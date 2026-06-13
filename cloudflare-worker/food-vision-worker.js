const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = buildCorsHeaders(origin, env.ALLOWED_ORIGINS || "");

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, corsHeaders);
    }

    if (env.ALLOWED_ORIGINS && !isOriginAllowed(origin, env.ALLOWED_ORIGINS)) {
      return json({ error: "Origin not allowed" }, 403, corsHeaders);
    }

    if (!env.OPENAI_API_KEY) {
      return json({ error: "OPENAI_API_KEY secret is not configured" }, 500, corsHeaders);
    }

    try {
      const body = await request.json();
      const image = String(body.image || "");
      const totalWeightInput = Number(body.totalWeightGrams);
      const totalWeightGrams = Number.isFinite(totalWeightInput) && totalWeightInput > 0 ? totalWeightInput : 0;
      const language = String(body.language || "ru").slice(0, 8);
      const productHints = Array.isArray(body.productHints)
        ? body.productHints.slice(0, 100).map((item) => String(item).slice(0, 60))
        : [];

      if (!image.startsWith("data:image/")) {
        return json({ error: "Image must be a base64 data URL" }, 400, corsHeaders);
      }
      if (totalWeightGrams > 5000) {
        return json({ error: "Invalid total food weight" }, 400, corsHeaders);
      }
      if (estimateBase64Bytes(image) > MAX_IMAGE_BYTES) {
        return json({ error: "Image is too large" }, 413, corsHeaders);
      }

      const result = await analyzeFoodImage({
        apiKey: env.OPENAI_API_KEY,
        model: env.OPENAI_MODEL || "gpt-5.5",
        image,
        totalWeightGrams,
        language,
        productHints
      });

      return json(result, 200, corsHeaders);
    } catch (error) {
      return json({ error: error.message || "Food recognition failed" }, 500, corsHeaders);
    }
  }
};

async function analyzeFoodImage({ apiKey, model, image, totalWeightGrams, language, productHints }) {
  const prompt = [
    "You analyze a meal photo for a calorie tracker.",
    "Return only valid JSON. No markdown.",
    totalWeightGrams > 0
      ? "The user provides the total edible food weight, not plate weight."
      : "The user did not provide weight. Read the package text and find net weight / product weight if visible.",
    totalWeightGrams > 0
      ? `Total food weight provided by user: ${totalWeightGrams} g.`
      : "If the image shows grams or kilograms on the package, convert it to grams and return it as detectedTotalWeightGrams. If no package weight is visible, return 0.",
    `User language: ${language}.`,
    "Identify visible edible components and estimate each component's percentage of edible weight.",
    "Percent values must sum to about 100.",
    "Use simple food names that can match this app database when possible.",
    "If a sauce/oil is visible or likely important, include it.",
    "Do not invent package weight if it is not visible.",
    "Do not invent exact calories. The app will calculate nutrition from its own database.",
    `Known product hints: ${productHints.join(", ")}`,
    'JSON shape: {"detectedTotalWeightGrams":220,"weightSource":"read from package: 220 g","items":[{"name":"rice","percent":100,"confidence":0.7,"note":"short note"}]}'
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [{
        role: "user",
        content: [
          { type: "input_text", text: prompt },
          { type: "input_image", image_url: image }
        ]
      }],
      text: {
        format: {
          type: "json_schema",
          name: "food_photo_analysis",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              detectedTotalWeightGrams: {
                type: "number",
                minimum: 0,
                maximum: 5000
              },
              weightSource: {
                type: "string"
              },
              items: {
                type: "array",
                minItems: 1,
                maxItems: 8,
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    name: { type: "string" },
                    percent: { type: "number", minimum: 1, maximum: 100 },
                    confidence: { type: "number", minimum: 0, maximum: 1 },
                    note: { type: "string" }
                  },
                  required: ["name", "percent", "confidence", "note"]
                }
              }
            },
            required: ["detectedTotalWeightGrams", "weightSource", "items"]
          }
        }
      }
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI request failed");
  }

  const text = data.output_text || "";
  const parsed = JSON.parse(text);
  const detectedTotalWeightGrams = totalWeightGrams > 0
    ? totalWeightGrams
    : Math.max(0, Math.min(5000, Number(parsed.detectedTotalWeightGrams) || 0));
  return {
    detectedTotalWeightGrams,
    weightSource: totalWeightGrams > 0
      ? "provided by user"
      : String(parsed.weightSource || "").slice(0, 160),
    items: normalizeItems(parsed.items || [])
  };
}

function normalizeItems(items) {
  const cleaned = items
    .map((item) => ({
      name: String(item.name || "").trim().toLowerCase(),
      percent: Math.max(0, Math.min(100, Number(item.percent) || 0)),
      confidence: Math.max(0, Math.min(1, Number(item.confidence) || 0)),
      note: String(item.note || "").trim().slice(0, 160)
    }))
    .filter((item) => item.name && item.percent > 0);

  const total = cleaned.reduce((sum, item) => sum + item.percent, 0);
  if (!total) return [];

  return cleaned.map((item) => ({
    ...item,
    percent: Math.round((item.percent / total) * 1000) / 10
  }));
}

function buildCorsHeaders(origin, allowedOrigins) {
  const allowed = allowedOrigins.split(",").map((item) => item.trim()).filter(Boolean);
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0] || "";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function isOriginAllowed(origin, allowedOrigins) {
  const allowed = allowedOrigins.split(",").map((item) => item.trim()).filter(Boolean);
  return Boolean(origin && allowed.includes(origin));
}

function json(payload, status, headers) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function estimateBase64Bytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  return Math.ceil((base64.length * 3) / 4);
}
