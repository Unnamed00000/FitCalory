const STORAGE_KEYS = {
  profile: "fitcalory_profile",
  foods: "fitcalory_foods",
  activities: "fitcalory_activities",
  customProducts: "fitcalory_custom_products",
  theme: "fitcalory_theme"
};

const DEFAULT_PROFILE = {
  goal: "loss",
  sex: "male",
  weight: 80,
  height: 175,
  age: 30
};

const PRODUCT_DATABASE = [
  product("яйцо", 155, 12.7, 10.9, 1.1, 60, ["яйца", "яиц", "яйцо", "яичница"]),
  product("куриное филе", 110, 23.1, 1.9, 0, 180, ["куриное филе", "филе курицы", "курица филе"]),
  product("куриная грудка", 113, 23.6, 1.9, 0.4, 180, ["куриная грудка", "куриную грудку", "грудка", "грудки"]),
  product("говядина", 187, 18.9, 12.4, 0, null, ["говядина", "говядины"]),
  product("рыба", 120, 20, 4, 0, null, ["рыба", "рыбы"]),
  product("тунец", 132, 28, 1.3, 0, null, ["тунец", "тунца"]),
  product("рис", 130, 2.7, 0.3, 28, null, ["рис", "риса"]),
  product("гречка", 110, 4.2, 1.1, 21.3, null, ["гречка", "гречки", "гречку"]),
  product("макароны", 150, 5.3, 0.9, 30.9, null, ["макароны", "паста", "спагетти"]),
  product("картошка", 77, 2, 0.1, 17, null, ["картошка", "картофель", "картошки", "картофеля"]),
  product("овсянка", 370, 13, 6.5, 62, null, ["овсянка", "овсяные хлопья", "овсянки"]),
  product("хлеб", 250, 8, 3, 49, 35, ["хлеб", "хлеба", "кусок хлеба"]),
  product("банан", 89, 1.1, 0.3, 23, 120, ["банан", "банана", "бананы", "бананов"]),
  product("яблоко", 52, 0.3, 0.2, 14, 150, ["яблоко", "яблока", "яблоки", "яблок"]),
  product("молоко", 60, 3.2, 3.2, 4.8, null, ["молоко", "молока"]),
  product("творог", 121, 17, 5, 1.8, null, ["творог", "творога"]),
  product("сыр", 350, 25, 27, 2, 25, ["сыр", "сыра"]),
  product("йогурт", 65, 4, 2.5, 6, 125, ["йогурт", "йогурта"]),
  product("масло", 748, 0.5, 82.5, 0.8, 10, ["масло", "масла", "сливочное масло"]),
  product("орехи", 600, 18, 54, 18, 30, ["орехи", "орехов", "орех"]),
  product("протеин", 390, 78, 6, 8, 30, ["протеин", "протеина"]),
  product("овощи", 35, 2, 0.3, 6, null, ["овощи", "овощей"]),
  product("салат", 18, 1.2, 0.2, 3, null, ["салат", "салата", "листья салата"]),
  product("помидор", 20, 0.9, 0.2, 3.9, 100, ["помидор", "помидора", "помидоры", "томат", "томаты"]),
  product("огурец", 15, 0.7, 0.1, 3.6, 100, ["огурец", "огурца", "огурцы"])
];

const ACTIVITY_TYPES = [
  activity("бег", ["бег", "пробежка", "пробежал", "бегал"], 1, 600),
  activity("ходьба", ["ходьба", "пешком", "гулял", "прогулка"], 0.5, 250),
  activity("велосипед", ["велосипед", "вело", "велопрогулка", "катался"], 0.35, 500),
  activity("зал", ["зал", "тренировка", "спортзал", "тренажерный зал"], null, 400),
  activity("плавание", ["плавание", "плавал", "бассейн"], null, 550),
  activity("физическая работа", ["физическая работа", "работа физическая", "физ работа"], null, 350)
];

let state = {
  profile: load(STORAGE_KEYS.profile, DEFAULT_PROFILE),
  foods: load(STORAGE_KEYS.foods, []),
  activities: load(STORAGE_KEYS.activities, []),
  customProducts: load(STORAGE_KEYS.customProducts, []),
  theme: load(STORAGE_KEYS.theme, "light")
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  applyTheme();
  fillProfileForm();
  bindEvents();
  render();
  registerServiceWorker();
});

function product(name, calories, protein, fat, carbs, unitWeight, aliases) {
  return { name, calories, protein, fat, carbs, unitWeight, aliases };
}

function activity(name, aliases, distanceFactor, caloriesPerHour) {
  return { name, aliases, distanceFactor, caloriesPerHour };
}

function bindElements() {
  [
    "themeToggle", "goalTitle", "goalMessage", "balanceLabel", "balanceValue",
    "totalCalories", "activityCalories", "baseBurn", "totalBurn",
    "totalProtein", "totalFat", "totalCarbs", "nextAdvice",
    "foodForm", "foodInput", "foodError", "foodList",
    "activityForm", "activityInput", "activityError", "activityList",
    "profileForm", "goal", "sex", "weight", "height", "age",
    "productForm", "productName", "productCalories", "productProtein",
    "productFat", "productCarbs", "productUnitWeight", "productMessage",
    "customProducts"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    save(STORAGE_KEYS.theme, state.theme);
    applyTheme();
  });

  els.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile = {
      goal: els.goal.value,
      sex: els.sex.value,
      weight: positiveNumber(els.weight.value, DEFAULT_PROFILE.weight),
      height: positiveNumber(els.height.value, DEFAULT_PROFILE.height),
      age: positiveNumber(els.age.value, DEFAULT_PROFILE.age)
    };
    save(STORAGE_KEYS.profile, state.profile);
    render();
  });

  els.foodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addFood();
  });

  els.activityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addActivity();
  });

  els.productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomProduct();
  });

  els.foodList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-food]");
    if (!button) return;
    state.foods = state.foods.filter((item) => item.id !== button.dataset.deleteFood);
    save(STORAGE_KEYS.foods, state.foods);
    render();
  });

  els.activityList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-activity]");
    if (!button) return;
    state.activities = state.activities.filter((item) => item.id !== button.dataset.deleteActivity);
    save(STORAGE_KEYS.activities, state.activities);
    render();
  });
}

function addFood() {
  const text = els.foodInput.value.trim();
  clearMessage(els.foodError);
  if (!text) return;

  const parsed = parseFoodInput(text);
  if (parsed.errors.length) {
    showMessage(els.foodError, "Продукт не найден. Введите калории вручную или добавьте продукт в базу.", true);
  }

  if (!parsed.items.length) return;

  state.foods = [...parsed.items, ...state.foods];
  save(STORAGE_KEYS.foods, state.foods);
  els.foodInput.value = "";
  render();
}

function parseFoodInput(text) {
  const segments = splitFoodText(text);
  const items = [];
  const errors = [];

  segments.forEach((segment) => {
    const normalized = normalize(segment);
    const found = findProduct(normalized);
    if (!found) {
      errors.push(segment);
      return;
    }

    const amount = parseFoodAmount(normalized, found.product);
    const totals = scaleNutrition(found.product, amount.grams);
    items.push({
      id: createId(),
      title: segment.trim(),
      productName: found.product.name,
      grams: amount.grams,
      note: amount.note,
      calories: totals.calories,
      protein: totals.protein,
      fat: totals.fat,
      carbs: totals.carbs,
      createdAt: Date.now()
    });
  });

  return { items, errors };
}

function splitFoodText(text) {
  return text
    .split(/\s+(?:и|плюс)\s+|[+;\n]|,\s+/i)
    .map((item) => item.trim())
    .filter(Boolean);
}

function findProduct(normalizedText) {
  const products = getAllProducts();
  const candidates = [];
  products.forEach((productItem) => {
    productItem.aliases.forEach((alias) => {
      const normalizedAlias = normalize(alias);
      if (normalizedText.includes(normalizedAlias)) {
        candidates.push({ product: productItem, alias: normalizedAlias });
      }
    });
  });
  candidates.sort((a, b) => b.alias.length - a.alias.length);
  return candidates[0] || null;
}

function parseFoodAmount(text, productItem) {
  const match = text.match(/(\d+(?:[.,]\d+)?)\s*(кг|килограмм(?:а|ов)?|г|гр|грамм(?:а|ов)?|мл|литр(?:а|ов)?|л|штук(?:а|и)?|шт|шт\.?)?/i);
  const amount = match ? Number(match[1].replace(",", ".")) : 1;
  const unit = match && match[2] ? normalize(match[2]).replace(".", "") : "";

  if (["кг", "килограмм", "килограмма", "килограммов"].includes(unit)) {
    return { grams: amount * 1000, note: "по указанному весу" };
  }

  if (["г", "гр", "грамм", "грамма", "граммов"].includes(unit)) {
    return { grams: amount, note: "по указанному весу" };
  }

  if (["мл", "л", "литр", "литра", "литров"].includes(unit)) {
    const grams = unit === "л" || unit.startsWith("литр") ? amount * 1000 : amount;
    return { grams, note: "мл посчитаны примерно как граммы" };
  }

  if (["шт", "штук", "штука", "штуки"].includes(unit) || productItem.unitWeight) {
    if (productItem.unitWeight) {
      return { grams: amount * productItem.unitWeight, note: `${formatNumber(amount)} шт × ${productItem.unitWeight} г` };
    }
    return { grams: amount * 100, note: "взято примерно 100 г за штуку" };
  }

  if (match && !unit) {
    return { grams: amount * 100, note: "число без единицы посчитано как порции по 100 г" };
  }

  return { grams: 100, note: "взята примерная порция 100 г" };
}

function scaleNutrition(productItem, grams) {
  const factor = grams / 100;
  return {
    calories: productItem.calories * factor,
    protein: productItem.protein * factor,
    fat: productItem.fat * factor,
    carbs: productItem.carbs * factor
  };
}

function addActivity() {
  const text = els.activityInput.value.trim();
  clearMessage(els.activityError);
  if (!text) return;

  const parsed = parseActivityInput(text);
  if (!parsed) {
    showMessage(els.activityError, "Активность не распознана. Попробуйте: бег 1 км, ходьба 30 минут, зал 1 час.", true);
    return;
  }

  state.activities = [parsed, ...state.activities];
  save(STORAGE_KEYS.activities, state.activities);
  els.activityInput.value = "";
  render();
}

function parseActivityInput(text) {
  const normalized = normalize(text);
  const type = ACTIVITY_TYPES
    .map((item) => ({ item, alias: item.aliases.find((alias) => normalized.includes(normalize(alias))) }))
    .filter((match) => match.alias)
    .sort((a, b) => b.alias.length - a.alias.length)[0]?.item;

  if (!type) return null;

  const distance = normalized.match(/(\d+(?:[.,]\d+)?)\s*(км|километр(?:а|ов)?)/i);
  const time = normalized.match(/(\d+(?:[.,]\d+)?)\s*(мин|минута|минуты|минут|час|часа|часов)/i);
  const weight = positiveNumber(state.profile.weight, DEFAULT_PROFILE.weight);
  let calories = 0;
  let detail = "";

  if (distance && type.distanceFactor) {
    const km = Number(distance[1].replace(",", "."));
    calories = weight * km * type.distanceFactor;
    detail = `${formatNumber(km)} км`;
  } else if (time) {
    const value = Number(time[1].replace(",", "."));
    const unit = normalize(time[2]);
    const minutes = unit.startsWith("час") ? value * 60 : value;
    calories = (type.caloriesPerHour / 60) * minutes;
    detail = `${formatNumber(minutes)} минут`;
  } else {
    return null;
  }

  return {
    id: createId(),
    title: text,
    type: type.name,
    detail,
    calories,
    createdAt: Date.now()
  };
}

function addCustomProduct() {
  const name = els.productName.value.trim();
  const calories = Number(els.productCalories.value);
  const protein = Number(els.productProtein.value);
  const fat = Number(els.productFat.value);
  const carbs = Number(els.productCarbs.value);
  const unitWeightValue = Number(els.productUnitWeight.value);
  clearMessage(els.productMessage);

  if (!name || [calories, protein, fat, carbs].some((value) => Number.isNaN(value) || value < 0)) {
    showMessage(els.productMessage, "Заполните название и КБЖУ на 100 г.", true);
    return;
  }

  const customProduct = product(
    name.toLowerCase(),
    calories,
    protein,
    fat,
    carbs,
    unitWeightValue > 0 ? unitWeightValue : null,
    buildAliases(name)
  );

  state.customProducts = [
    customProduct,
    ...state.customProducts.filter((item) => normalize(item.name) !== normalize(name))
  ];
  save(STORAGE_KEYS.customProducts, state.customProducts);
  els.productForm.reset();
  showMessage(els.productMessage, "Продукт добавлен в базу.", false);
  render();
}

function buildAliases(name) {
  const normalizedName = normalize(name);
  return [...new Set([normalizedName, `${normalizedName}а`, `${normalizedName}ы`, `${normalizedName}ов`])];
}

function render() {
  const totals = calculateTotals();
  renderDashboard(totals);
  renderAdvice(totals);
  renderFoods();
  renderActivities();
  renderCustomProducts();
}

function calculateTotals() {
  const eaten = sum(state.foods, "calories");
  const protein = sum(state.foods, "protein");
  const fat = sum(state.foods, "fat");
  const carbs = sum(state.foods, "carbs");
  const activityBurn = sum(state.activities, "calories");
  const bmr = calculateBmr(state.profile);
  const baseBurn = bmr * 1.2;
  const totalBurn = baseBurn + activityBurn;
  const balance = state.profile.goal === "loss"
    ? totalBurn - eaten
    : eaten - totalBurn;

  return { eaten, protein, fat, carbs, activityBurn, bmr, baseBurn, totalBurn, balance };
}

function calculateBmr(profile) {
  const weight = positiveNumber(profile.weight, DEFAULT_PROFILE.weight);
  const height = positiveNumber(profile.height, DEFAULT_PROFILE.height);
  const age = positiveNumber(profile.age, DEFAULT_PROFILE.age);
  const modifier = profile.sex === "female" ? -161 : 5;
  return 10 * weight + 6.25 * height - 5 * age + modifier;
}

function renderDashboard(totals) {
  const isLoss = state.profile.goal === "loss";
  const message = getGoalMessage(totals);
  els.goalTitle.textContent = isLoss ? "Похудение" : "Набор массы";
  els.goalMessage.textContent = message.text;
  els.goalMessage.className = `goal-message ${message.className}`;
  els.balanceLabel.textContent = isLoss ? "Дефицит" : "Профицит";
  els.balanceValue.textContent = round(totals.balance);
  els.balanceValue.className = message.className;
  els.totalCalories.textContent = round(totals.eaten);
  els.activityCalories.textContent = round(totals.activityBurn);
  els.baseBurn.textContent = round(totals.baseBurn);
  els.totalBurn.textContent = round(totals.totalBurn);
  els.totalProtein.textContent = `${formatNumber(totals.protein)} г`;
  els.totalFat.textContent = `${formatNumber(totals.fat)} г`;
  els.totalCarbs.textContent = `${formatNumber(totals.carbs)} г`;
}

function getGoalMessage(totals) {
  if (state.profile.goal === "loss") {
    if (totals.balance > 1000) {
      return { text: "Дефицит слишком большой. Лучше худеть безопасно и не перегружать организм.", className: "status-bad" };
    }
    if (totals.balance >= 400) {
      return { text: `Отлично. Вы в хорошем дефиците на ${round(totals.balance)} ккал.`, className: "status-good" };
    }
    const need = 400 - totals.balance;
    return { text: `Чтобы выйти на хороший дефицит, нужно сжечь ещё примерно ${round(need)} ккал или съесть меньше.`, className: "status-warn" };
  }

  if (totals.balance > 700) {
    return { text: "Профицит слишком большой. Есть риск набора лишнего жира.", className: "status-bad" };
  }
  if (totals.balance >= 300) {
    return { text: "Отлично. Вы достигли цели для набора массы.", className: "status-good" };
  }
  const need = 300 - totals.balance;
  const movementNote = totals.activityBurn > 400 ? " Сегодня вы много двигались. Для набора массы нужно компенсировать это едой." : "";
  return { text: `Для набора массы нужно съесть ещё примерно ${round(need)} ккал.${movementNote}`, className: "status-warn" };
}

function renderAdvice(totals) {
  const isLoss = state.profile.goal === "loss";
  const target = isLoss ? 400 : 300;
  const remaining = Math.max(0, target - totals.balance);

  if (remaining <= 0) {
    els.nextAdvice.innerHTML = `<div class="advice-item"><strong>Цель дня</strong><span>Основная цель уже выполнена. Держите темп без крайностей.</span></div>`;
    return;
  }

  if (isLoss) {
    const options = [
      ["ходьба", 250],
      ["бег", 600],
      ["велосипед", 500],
      ["зал", 400],
      ["плавание", 550]
    ];
    els.nextAdvice.innerHTML = options.map(([name, kcalPerHour]) => {
      const minutes = Math.ceil((remaining / kcalPerHour) * 60);
      return `<div class="advice-item"><strong>${escapeHtml(name)}</strong><span>примерно ${minutes} минут</span></div>`;
    }).join("");
    return;
  }

  const foods = ["2 яйца + хлеб", "банан + йогурт", "рис + куриная грудка", "овсянка с молоком", "творог + банан"];
  els.nextAdvice.innerHTML = foods
    .map((item) => `<div class="advice-item"><strong>${escapeHtml(item)}</strong><span>поможет добрать примерно ${round(remaining)} ккал</span></div>`)
    .join("");
}

function renderFoods() {
  if (!state.foods.length) {
    els.foodList.innerHTML = `<div class="entry-card"><div><h3>Еда пока не добавлена</h3><div class="entry-meta"><span>Напишите: 2 яйца, 100 г гречки, 1 банан</span></div></div></div>`;
    return;
  }

  els.foodList.innerHTML = state.foods.map((item) => `
    <article class="entry-card">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <div class="entry-meta">
          <span>вес: ${formatNumber(item.grams)} г</span>
          <span>примерно ${round(item.calories)} ккал</span>
          <span>белки: ${formatNumber(item.protein)} г</span>
          <span>жиры: ${formatNumber(item.fat)} г</span>
          <span>углеводы: ${formatNumber(item.carbs)} г</span>
          <span>${escapeHtml(item.note)}</span>
        </div>
      </div>
      <button class="delete-button" type="button" data-delete-food="${item.id}">Удалить</button>
    </article>
  `).join("");
}

function renderActivities() {
  if (!state.activities.length) {
    els.activityList.innerHTML = `<div class="entry-card"><div><h3>Активность пока не добавлена</h3><div class="entry-meta"><span>Напишите: бег 1 км, зал 45 минут</span></div></div></div>`;
    return;
  }

  els.activityList.innerHTML = state.activities.map((item) => `
    <article class="entry-card">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <div class="entry-meta">
          <span>${escapeHtml(item.type)} ${escapeHtml(item.detail)}</span>
          <span>сожжено: примерно ${round(item.calories)} ккал</span>
        </div>
      </div>
      <button class="delete-button" type="button" data-delete-activity="${item.id}">Удалить</button>
    </article>
  `).join("");
}

function renderCustomProducts() {
  if (!state.customProducts.length) {
    els.customProducts.innerHTML = `<span class="chip">Пользовательских продуктов пока нет</span>`;
    return;
  }
  els.customProducts.innerHTML = state.customProducts
    .map((item) => `<span class="chip">${escapeHtml(item.name)} · ${formatNumber(item.calories)} ккал / 100 г</span>`)
    .join("");
}

function fillProfileForm() {
  els.goal.value = state.profile.goal;
  els.sex.value = state.profile.sex;
  els.weight.value = state.profile.weight;
  els.height.value = state.profile.height;
  els.age.value = state.profile.age;
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  els.themeToggle.textContent = state.theme === "dark" ? "☼" : "☾";
}

function getAllProducts() {
  return [...state.customProducts, ...PRODUCT_DATABASE];
}

function normalize(value) {
  return String(value).toLowerCase().replace(/ё/g, "е").trim();
}

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function sum(items, key) {
  return items.reduce((total, item) => total + (Number(item[key]) || 0), 0);
}

function round(value) {
  return Math.round(Number(value) || 0);
}

function formatNumber(value) {
  const rounded = Math.round((Number(value) || 0) * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function positiveNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function createId() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function clearMessage(element) {
  element.textContent = "";
  element.classList.remove("error");
}

function showMessage(element, text, isError) {
  element.textContent = text;
  element.classList.toggle("error", isError);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}
