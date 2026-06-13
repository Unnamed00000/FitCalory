const STORAGE_KEYS = {
  profile: "fitcalory_profile",
  foods: "fitcalory_foods",
  activities: "fitcalory_activities",
  foodByDate: "fitcalory_food_by_date",
  activityByDate: "fitcalory_activity_by_date",
  customProducts: "fitcalory_custom_products",
  theme: "fitcalory_theme",
  language: "fitcalory_language"
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

const I18N = {
  ru: {
    navHome: "Главная", navFood: "Еда", navActivity: "Активность", navHistory: "История", navProfile: "Профиль",
    statistics: "Статистика", monthlyResult: "Месячный результат", thisMonth: "Этот месяц", lastMonth: "Прошлый месяц",
    last2Months: "Последние 2 месяца", last3Months: "Последние 3 месяца", last6Months: "Последние 6 месяцев",
    allPeriod: "Весь период", customPeriod: "Свой период", period: "Период", from: "От даты", to: "До даты",
    eaten: "Съедено", burned: "Сожжено", deficit: "Дефицит", surplus: "Профицит", mostActiveDay: "Самый активный день",
    weakestDay: "Самый слабый день", goalReached: "Цель достигнута", goalMissed: "Цель не достигнута",
    fitAnalysis: "Анализ FitCalory", approximateResult: "Примерный результат", historyDays: "История дней",
    calorieChart: "Калории по дням", activityChart: "Активность по дням", activityTypeChart: "Виды активности",
    resultChart: "График результата", recordedDays: "Дней записано", avgEaten: "Средние калории в день",
    avgBurned: "Средняя активность в день", totalBalance: "Общий результат", avgBalance: "Средний результат в день",
    bestDay: "Лучший день", mostEatenDay: "Больше всего съедено", leastEatenDay: "Меньше всего съедено",
    noData: "За выбранный период пока нет записей.", kcal: "ккал", days: "дн.", approx: "примерно",
    lossMonth: "За этот период вы были в общем дефиците на {value} ккал.",
    gainMonth: "За этот период вы были в общем профиците на {value} ккал.",
    fatResult: "Примерный результат: около {value} кг жира. 7700 ккал дефицита ≈ около 1 кг жира. Это приблизительный расчёт.",
    gainWarning: "Слишком большой профицит может приводить не только к мышцам, но и к набору жира.",
    analysisGoodLoss: "Отличный период. Вы часто держали дефицит и были достаточно активны.",
    analysisLowActivityLoss: "В этом периоде активность была низкой. Для лучшего результата добавьте больше ходьбы, бега или тренировок.",
    analysisMissedLoss: "В этом периоде было много дней без дефицита. Лучше следить за вечерними приёмами пищи и добавлять активность.",
    analysisTooMuchLoss: "Дефицит был слишком большим в некоторые дни. Лучше худеть безопасно и не перегружать организм.",
    analysisGoodGain: "Хороший период для набора массы. Вы часто добирали нужные калории.",
    analysisLowCaloriesGain: "В этом периоде часто не хватало калорий для набора массы.",
    analysisHighActivityGain: "Вы много двигались. Для набора массы нужно компенсировать активность дополнительной едой.",
    analysisTooMuchGain: "Профицит часто был слишком большим. Есть риск набора лишнего жира."
  },
  en: {
    navHome: "Home", navFood: "Food", navActivity: "Activity", navHistory: "History", navProfile: "Profile",
    statistics: "Statistics", monthlyResult: "Monthly result", thisMonth: "This month", lastMonth: "Last month",
    last2Months: "Last 2 months", last3Months: "Last 3 months", last6Months: "Last 6 months",
    allPeriod: "All time", customPeriod: "Custom period", period: "Period", from: "From", to: "To",
    eaten: "Eaten", burned: "Burned", deficit: "Deficit", surplus: "Surplus", mostActiveDay: "Most active day",
    weakestDay: "Weakest activity day", goalReached: "Goal reached", goalMissed: "Goal missed",
    fitAnalysis: "FitCalory analysis", approximateResult: "Approximate result", historyDays: "Daily history",
    calorieChart: "Calories by day", activityChart: "Activity by day", activityTypeChart: "Activity types",
    resultChart: "Result chart", recordedDays: "Recorded days", avgEaten: "Average eaten per day",
    avgBurned: "Average activity per day", totalBalance: "Total result", avgBalance: "Average result per day",
    bestDay: "Best day", mostEatenDay: "Highest eaten day", leastEatenDay: "Lowest eaten day",
    noData: "There are no records for this period yet.", kcal: "kcal", days: "days", approx: "about",
    lossMonth: "For this period you were in a total deficit of {value} kcal.",
    gainMonth: "For this period you were in a total surplus of {value} kcal.",
    fatResult: "Approximate result: about {value} kg of fat. 7700 kcal deficit ≈ about 1 kg of fat. This is an estimate.",
    gainWarning: "A surplus that is too large can add fat, not only muscle.",
    analysisGoodLoss: "Great period. You often kept a deficit and stayed active enough.",
    analysisLowActivityLoss: "Activity was low in this period. Add more walking, running, or training for better results.",
    analysisMissedLoss: "There were many days without a deficit. Watch evening meals and add activity.",
    analysisTooMuchLoss: "The deficit was too large on some days. Lose weight safely and avoid overloading your body.",
    analysisGoodGain: "Good period for gaining mass. You often reached the needed calories.",
    analysisLowCaloriesGain: "Calories were often too low for mass gain in this period.",
    analysisHighActivityGain: "You moved a lot. For mass gain, compensate activity with extra food.",
    analysisTooMuchGain: "The surplus was often too large. There is a risk of gaining extra fat."
  },
  da: {
    navHome: "Start", navFood: "Mad", navActivity: "Aktivitet", navHistory: "Historik", navProfile: "Profil",
    statistics: "Statistik", monthlyResult: "Månedsresultat", thisMonth: "Denne måned", lastMonth: "Sidste måned",
    last2Months: "Seneste 2 måneder", last3Months: "Seneste 3 måneder", last6Months: "Seneste 6 måneder",
    allPeriod: "Hele perioden", customPeriod: "Egen periode", period: "Periode", from: "Fra", to: "Til",
    eaten: "Spist", burned: "Forbrændt", deficit: "Underskud", surplus: "Overskud", mostActiveDay: "Mest aktive dag",
    weakestDay: "Svageste aktivitetsdag", goalReached: "Mål nået", goalMissed: "Mål ikke nået",
    fitAnalysis: "FitCalory analyse", approximateResult: "Omtrentligt resultat", historyDays: "Dagshistorik",
    calorieChart: "Kalorier pr. dag", activityChart: "Aktivitet pr. dag", activityTypeChart: "Aktivitetstyper",
    resultChart: "Resultatgraf", recordedDays: "Registrerede dage", avgEaten: "Gennemsnit spist pr. dag",
    avgBurned: "Gennemsnitlig aktivitet pr. dag", totalBalance: "Samlet resultat", avgBalance: "Gennemsnitligt resultat pr. dag",
    bestDay: "Bedste dag", mostEatenDay: "Mest spist", leastEatenDay: "Mindst spist",
    noData: "Der er endnu ingen registreringer for perioden.", kcal: "kcal", days: "dage", approx: "ca.",
    lossMonth: "I denne periode var du i samlet underskud på {value} kcal.",
    gainMonth: "I denne periode var du i samlet overskud på {value} kcal.",
    fatResult: "Omtrentligt resultat: ca. {value} kg fedt. 7700 kcal underskud ≈ ca. 1 kg fedt. Dette er et estimat.",
    gainWarning: "Et for stort overskud kan give fedtøgning, ikke kun muskler.",
    analysisGoodLoss: "Stærk periode. Du holdt ofte underskud og var aktiv nok.",
    analysisLowActivityLoss: "Aktiviteten var lav i denne periode. Tilføj mere gang, løb eller træning.",
    analysisMissedLoss: "Der var mange dage uden underskud. Hold øje med aftensmåltider og tilføj aktivitet.",
    analysisTooMuchLoss: "Underskuddet var for stort på nogle dage. Tab dig sikkert og undgå at overbelaste kroppen.",
    analysisGoodGain: "God periode for vægtøgning. Du nåede ofte de nødvendige kalorier.",
    analysisLowCaloriesGain: "Der manglede ofte kalorier til vægtøgning i denne periode.",
    analysisHighActivityGain: "Du bevægede dig meget. Ved vægtøgning skal aktivitet kompenseres med ekstra mad.",
    analysisTooMuchGain: "Overskuddet var ofte for stort. Der er risiko for ekstra fedtøgning."
  },
  ka: {
    navHome: "მთავარი", navFood: "საკვები", navActivity: "აქტივობა", navHistory: "ისტორია", navProfile: "პროფილი",
    statistics: "სტატისტიკა", monthlyResult: "თვიური შედეგი", thisMonth: "ეს თვე", lastMonth: "წინა თვე",
    last2Months: "ბოლო 2 თვე", last3Months: "ბოლო 3 თვე", last6Months: "ბოლო 6 თვე",
    allPeriod: "მთელი პერიოდი", customPeriod: "საკუთარი პერიოდი", period: "პერიოდი", from: "დან", to: "მდე",
    eaten: "მიღებული", burned: "დახარჯული", deficit: "დეფიციტი", surplus: "პროფიციტი", mostActiveDay: "ყველაზე აქტიური დღე",
    weakestDay: "ყველაზე სუსტი დღე", goalReached: "მიზანი მიღწეულია", goalMissed: "მიზანი არ შესრულდა",
    fitAnalysis: "FitCalory ანალიზი", approximateResult: "დაახლოებითი შედეგი", historyDays: "დღეების ისტორია",
    calorieChart: "კალორიები დღეების მიხედვით", activityChart: "აქტივობა დღეების მიხედვით", activityTypeChart: "აქტივობის ტიპები",
    resultChart: "შედეგის გრაფიკი", recordedDays: "ჩაწერილი დღეები", avgEaten: "საშუალოდ მიღებული დღეში",
    avgBurned: "საშუალო აქტივობა დღეში", totalBalance: "საერთო შედეგი", avgBalance: "საშუალო შედეგი დღეში",
    bestDay: "საუკეთესო დღე", mostEatenDay: "ყველაზე მეტი მიღებული", leastEatenDay: "ყველაზე ნაკლები მიღებული",
    noData: "ამ პერიოდში ჩანაწერები ჯერ არ არის.", kcal: "კკალ", days: "დღე", approx: "დაახლ.",
    lossMonth: "ამ პერიოდში თქვენ იყავით საერთო დეფიციტში {value} კკალ.",
    gainMonth: "ამ პერიოდში თქვენ იყავით საერთო პროფიციტში {value} კკალ.",
    fatResult: "დაახლოებითი შედეგი: დაახლოებით {value} კგ ცხიმი. 7700 კკალ დეფიციტი ≈ დაახლოებით 1 კგ ცხიმი. ეს არის მიახლოებითი გამოთვლა.",
    gainWarning: "ძალიან დიდი პროფიციტი შეიძლება გამოიწვიოს არა მხოლოდ კუნთის, არამედ ცხიმის მატებაც.",
    analysisGoodLoss: "კარგი პერიოდი. ხშირად ინარჩუნებდით დეფიციტს და საკმარისად აქტიური იყავით.",
    analysisLowActivityLoss: "ამ პერიოდში აქტივობა დაბალი იყო. უკეთესი შედეგისთვის დაამატეთ სიარული, სირბილი ან ვარჯიში.",
    analysisMissedLoss: "ამ პერიოდში ბევრი დღე იყო დეფიციტის გარეშე. აკონტროლეთ საღამოს კვება და დაამატეთ აქტივობა.",
    analysisTooMuchLoss: "ზოგიერთ დღეს დეფიციტი ძალიან დიდი იყო. უმჯობესია უსაფრთხოდ დაიკლოთ და არ გადატვირთოთ ორგანიზმი.",
    analysisGoodGain: "კარგი პერიოდი მასის მოსამატებლად. ხშირად იღებდით საჭირო კალორიებს.",
    analysisLowCaloriesGain: "ამ პერიოდში ხშირად არ გყოფნიდათ კალორიები მასის მოსამატებლად.",
    analysisHighActivityGain: "ბევრს მოძრაობდით. მასის მატებისთვის აქტივობა დამატებითი საკვებით უნდა დააკომპენსიროთ.",
    analysisTooMuchGain: "პროფიციტი ხშირად ძალიან დიდი იყო. არსებობს ზედმეტი ცხიმის მატების რისკი."
  }
};

let state = {
  profile: load(STORAGE_KEYS.profile, DEFAULT_PROFILE),
  foodByDate: load(STORAGE_KEYS.foodByDate, null),
  activityByDate: load(STORAGE_KEYS.activityByDate, null),
  foods: load(STORAGE_KEYS.foods, []),
  activities: load(STORAGE_KEYS.activities, []),
  customProducts: load(STORAGE_KEYS.customProducts, []),
  theme: load(STORAGE_KEYS.theme, "light"),
  language: load(STORAGE_KEYS.language, "ru"),
  currentDate: todayKey()
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  migrateDailyStorage();
  applyTheme();
  applyTranslations();
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
    "profileForm", "goal", "sex", "weight", "height", "age", "language",
    "productForm", "productName", "productCalories", "productProtein",
    "productFat", "productCarbs", "productUnitWeight", "productMessage",
    "customProducts", "historySummary", "historyList", "periodPreset",
    "periodStart", "periodEnd", "statsTitle", "monthlyResult", "statsCards",
    "fitAnalysis", "calorieChart", "activityChart", "activityTypeChart", "resultChart"
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
    state.language = els.language.value;
    save(STORAGE_KEYS.profile, state.profile);
    save(STORAGE_KEYS.language, state.language);
    applyTranslations();
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

  [els.periodPreset, els.periodStart, els.periodEnd].forEach((element) => {
    element.addEventListener("change", () => {
      if (element === els.periodStart || element === els.periodEnd) {
        els.periodPreset.value = "custom";
      }
      renderStats();
    });
  });

  els.foodList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-food]");
    if (!button) return;
    state.foods = state.foods.filter((item) => item.id !== button.dataset.deleteFood);
    state.foodByDate[state.currentDate] = state.foods;
    saveDailyState();
    render();
  });

  els.activityList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-activity]");
    if (!button) return;
    state.activities = state.activities.filter((item) => item.id !== button.dataset.deleteActivity);
    state.activityByDate[state.currentDate] = state.activities;
    saveDailyState();
    render();
  });
}

function migrateDailyStorage() {
  if (!state.foodByDate) {
    state.foodByDate = groupItemsByDate(state.foods);
  }
  if (!state.activityByDate) {
    state.activityByDate = groupItemsByDate(state.activities);
  }

  state.currentDate = todayKey();
  state.foods = normalizeDatedItems(state.foodByDate[state.currentDate] || [], state.currentDate);
  state.activities = normalizeDatedItems(state.activityByDate[state.currentDate] || [], state.currentDate);
  state.foodByDate[state.currentDate] = state.foods;
  state.activityByDate[state.currentDate] = state.activities;
  saveDailyState();
}

function groupItemsByDate(items) {
  return (items || []).reduce((groups, item) => {
    const dateKey = item.dateKey || dateKeyFromTimestamp(item.createdAt) || todayKey();
    if (!groups[dateKey]) groups[dateKey] = [];
    groups[dateKey].push({ ...item, dateKey });
    return groups;
  }, {});
}

function normalizeDatedItems(items, fallbackDate) {
  return (items || []).map((item) => ({
    ...item,
    dateKey: item.dateKey || fallbackDate
  }));
}

function ensureCurrentDay() {
  const key = todayKey();
  if (state.currentDate === key) return;
  state.currentDate = key;
  state.foods = normalizeDatedItems(state.foodByDate[key] || [], key);
  state.activities = normalizeDatedItems(state.activityByDate[key] || [], key);
  state.foodByDate[key] = state.foods;
  state.activityByDate[key] = state.activities;
  saveDailyState();
}

function saveDailyState() {
  save(STORAGE_KEYS.foodByDate, state.foodByDate);
  save(STORAGE_KEYS.activityByDate, state.activityByDate);
  save(STORAGE_KEYS.foods, state.foods);
  save(STORAGE_KEYS.activities, state.activities);
}

function addFood() {
  ensureCurrentDay();
  const text = els.foodInput.value.trim();
  clearMessage(els.foodError);
  if (!text) return;

  const parsed = parseFoodInput(text);
  if (parsed.errors.length) {
    showMessage(els.foodError, "Продукт не найден. Введите калории вручную или добавьте продукт в базу.", true);
  }

  if (!parsed.items.length) return;

  state.foods = [...parsed.items, ...state.foods];
  state.foodByDate[state.currentDate] = state.foods;
  saveDailyState();
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
      createdAt: Date.now(),
      dateKey: state.currentDate
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
  ensureCurrentDay();
  const text = els.activityInput.value.trim();
  clearMessage(els.activityError);
  if (!text) return;

  const parsed = parseActivityInput(text);
  if (!parsed) {
    showMessage(els.activityError, "Активность не распознана. Попробуйте: бег 1 км, ходьба 30 минут, зал 1 час.", true);
    return;
  }

  state.activities = [parsed, ...state.activities];
  state.activityByDate[state.currentDate] = state.activities;
  saveDailyState();
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
    createdAt: Date.now(),
    dateKey: state.currentDate
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
  ensureCurrentDay();
  const totals = calculateTotals();
  renderDashboard(totals);
  renderAdvice(totals);
  renderFoods();
  renderActivities();
  renderCustomProducts();
  renderHistory();
  renderStats();
}

function calculateTotals() {
  const eaten = sum(state.foods, "calories");
  const protein = sum(state.foods, "protein");
  const fat = sum(state.foods, "fat");
  const carbs = sum(state.foods, "carbs");
  const activityBurn = sum(state.activities, "calories");
  const hasData = state.foods.length > 0 || state.activities.length > 0;
  const bmr = calculateBmr(state.profile);
  const baseBurn = bmr * 1.2;
  const totalBurn = baseBurn + activityBurn;
  const balance = !hasData ? 0 : state.profile.goal === "loss"
    ? totalBurn - eaten
    : eaten - totalBurn;

  return { eaten, protein, fat, carbs, activityBurn, bmr, baseBurn, totalBurn, balance, hasData };
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
  els.baseBurn.textContent = totals.hasData ? round(totals.baseBurn) : 0;
  els.totalBurn.textContent = totals.hasData ? round(totals.totalBurn) : 0;
  els.totalProtein.textContent = `${formatNumber(totals.protein)} г`;
  els.totalFat.textContent = `${formatNumber(totals.fat)} г`;
  els.totalCarbs.textContent = `${formatNumber(totals.carbs)} г`;
}

function getGoalMessage(totals) {
  if (!totals.hasData) {
    return { text: "Добавьте еду или активность, и FitCalory посчитает результат дня.", className: "" };
  }

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
  if (!totals.hasData) {
    els.nextAdvice.innerHTML = `<div class="advice-item"><strong>Начните день</strong><span>Добавьте первую еду или активность, чтобы увидеть дефицит, профицит и советы.</span></div>`;
    return;
  }

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

function renderHistory() {
  const days = getRecordedDaySummaries().slice().reverse();
  if (!days.length) {
    els.historySummary.textContent = t("noData");
    els.historyList.innerHTML = "";
    return;
  }

  els.historySummary.textContent = `${days.length} ${t("days")}`;
  els.historyList.innerHTML = days.map((day) => `
    <article class="history-day">
      <div>
        <strong>${formatDateShort(day.dateKey)}</strong>
        <span>${t("eaten")}: ${round(day.eaten)} ${t("kcal")} · ${t("burned")}: ${round(day.activityBurn)} ${t("kcal")}</span>
      </div>
      <div class="${day.targetReached ? "status-good" : "status-warn"}">
        ${state.profile.goal === "loss" ? t("deficit") : t("surplus")}: ${round(day.balance)} ${t("kcal")}
      </div>
    </article>
  `).join("");
}

function renderStats() {
  const period = getSelectedPeriod();
  const summary = summarizePeriod(period.start, period.end);
  els.statsTitle.textContent = `${formatDateShort(period.start)} - ${formatDateShort(period.end)}`;

  if (!summary.recordedDays.length) {
    els.monthlyResult.innerHTML = `<p>${t("noData")}</p>`;
    els.statsCards.innerHTML = "";
    els.fitAnalysis.textContent = t("noData");
    clearCharts();
    return;
  }

  renderMonthlyResult(summary);
  renderStatsCards(summary);
  els.fitAnalysis.textContent = buildFitAnalysis(summary);
  renderCharts(summary);
}

function renderMonthlyResult(summary) {
  const balanceText = state.profile.goal === "loss" ? t("lossMonth") : t("gainMonth");
  const resultParts = [
    balanceText.replace("{value}", round(Math.abs(summary.totalBalance)))
  ];

  if (state.profile.goal === "loss") {
    resultParts.push(t("fatResult").replace("{value}", formatNumber(Math.max(0, summary.totalBalance) / 7700)));
  } else {
    resultParts.push(t("gainWarning"));
  }

  els.monthlyResult.innerHTML = resultParts
    .map((text) => `<p>${escapeHtml(text)}</p>`)
    .join("");
}

function renderStatsCards(summary) {
  const balanceLabel = state.profile.goal === "loss" ? t("deficit") : t("surplus");
  const approx = state.profile.goal === "loss"
    ? `${formatNumber(Math.max(0, summary.totalBalance) / 7700)} кг`
    : t("gainWarning");

  const cards = [
    [t("recordedDays"), `${summary.recordedDays.length} ${t("days")}`],
    [t("eaten"), `${round(summary.totalEaten)} ${t("kcal")}`],
    [t("burned"), `${round(summary.totalActivity)} ${t("kcal")}`],
    [t("avgEaten"), `${round(summary.avgEaten)} ${t("kcal")}`],
    [t("avgBurned"), `${round(summary.avgActivity)} ${t("kcal")}`],
    [t("totalBalance"), `${balanceLabel}: ${round(summary.totalBalance)} ${t("kcal")}`],
    [t("avgBalance"), `${round(summary.avgBalance)} ${t("kcal")}`],
    [t("goalReached"), `${summary.goalReached} ${t("days")}`],
    [t("goalMissed"), `${summary.goalMissed} ${t("days")}`],
    [t("bestDay"), describeDay(summary.bestDay, "balance")],
    [t("mostActiveDay"), describeDay(summary.mostActiveDay, "activity")],
    [t("weakestDay"), describeDay(summary.weakestDay, "activity")],
    [t("mostEatenDay"), describeDay(summary.mostEatenDay, "eaten")],
    [t("leastEatenDay"), describeDay(summary.leastEatenDay, "eaten")],
    [t("approximateResult"), approx]
  ];

  els.statsCards.innerHTML = cards.map(([label, value]) => `
    <article class="summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </article>
  `).join("");
}

function describeDay(day, metric) {
  if (!day) return "-";
  const value = metric === "activity" ? day.activityBurn : metric === "eaten" ? day.eaten : day.balance;
  return `${formatDateShort(day.dateKey)} · ${round(value)} ${t("kcal")}`;
}

function buildFitAnalysis(summary) {
  const tooLargeDays = summary.recordedDays.filter((day) => day.tooLarge).length;
  const activeAverage = summary.avgActivity;
  const reachedRate = summary.goalReached / summary.recordedDays.length;

  if (state.profile.goal === "loss") {
    if (tooLargeDays >= Math.max(2, summary.recordedDays.length * 0.25)) return t("analysisTooMuchLoss");
    if (activeAverage < 150) return t("analysisLowActivityLoss");
    if (reachedRate < 0.5) return t("analysisMissedLoss");
    return t("analysisGoodLoss");
  }

  if (tooLargeDays >= Math.max(2, summary.recordedDays.length * 0.25)) return t("analysisTooMuchGain");
  if (activeAverage > 450) return t("analysisHighActivityGain");
  if (reachedRate < 0.5) return t("analysisLowCaloriesGain");
  return t("analysisGoodGain");
}

function getRecordedDaySummaries() {
  return getAllDayKeys()
    .map((dateKey) => buildDaySummary(dateKey))
    .filter((day) => day.hasData);
}

function getAllDayKeys() {
  return [...new Set([
    ...Object.keys(state.foodByDate || {}),
    ...Object.keys(state.activityByDate || {})
  ])].sort();
}

function buildDaySummary(dateKey) {
  const foods = state.foodByDate[dateKey] || [];
  const activities = state.activityByDate[dateKey] || [];
  const eaten = sum(foods, "calories");
  const protein = sum(foods, "protein");
  const fat = sum(foods, "fat");
  const carbs = sum(foods, "carbs");
  const activityBurn = sum(activities, "calories");
  const baseBurn = calculateBmr(state.profile) * 1.2;
  const totalBurn = baseBurn + activityBurn;
  const balance = state.profile.goal === "loss" ? totalBurn - eaten : eaten - totalBurn;
  const targetReached = state.profile.goal === "loss" ? balance >= 400 : balance >= 300;
  const tooLarge = state.profile.goal === "loss" ? balance > 1000 : balance > 700;
  const activityTypes = activities.reduce((groups, item) => {
    const type = item.type || "другое";
    groups[type] = (groups[type] || 0) + (Number(item.calories) || 0);
    return groups;
  }, {});

  return {
    dateKey,
    foods,
    activities,
    hasData: foods.length > 0 || activities.length > 0,
    eaten,
    protein,
    fat,
    carbs,
    activityBurn,
    baseBurn,
    totalBurn,
    balance,
    targetReached,
    tooLarge,
    activityTypes
  };
}

function summarizePeriod(start, end) {
  const days = enumerateDates(start, end).map((dateKey) => buildDaySummary(dateKey));
  const recordedDays = days.filter((day) => day.hasData);
  const totalEaten = recordedDays.reduce((total, day) => total + day.eaten, 0);
  const totalActivity = recordedDays.reduce((total, day) => total + day.activityBurn, 0);
  const totalBalance = recordedDays.reduce((total, day) => total + day.balance, 0);
  const goalReached = recordedDays.filter((day) => day.targetReached).length;
  const activityTypes = recordedDays.reduce((groups, day) => {
    Object.entries(day.activityTypes).forEach(([type, calories]) => {
      groups[type] = (groups[type] || 0) + calories;
    });
    return groups;
  }, {});

  return {
    start,
    end,
    days,
    recordedDays,
    totalEaten,
    totalActivity,
    totalBalance,
    avgEaten: recordedDays.length ? totalEaten / recordedDays.length : 0,
    avgActivity: recordedDays.length ? totalActivity / recordedDays.length : 0,
    avgBalance: recordedDays.length ? totalBalance / recordedDays.length : 0,
    goalReached,
    goalMissed: recordedDays.length - goalReached,
    bestDay: maxBy(recordedDays, "balance"),
    mostActiveDay: maxBy(recordedDays, "activityBurn"),
    weakestDay: minBy(recordedDays, "activityBurn"),
    mostEatenDay: maxBy(recordedDays, "eaten"),
    leastEatenDay: minBy(recordedDays, "eaten"),
    activityTypes
  };
}

function getSelectedPeriod() {
  const today = new Date();
  const preset = els.periodPreset.value;
  let start;
  let end;

  if (preset === "lastMonth") {
    const last = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    start = dateKeyFromDate(last);
    end = dateKeyFromDate(new Date(last.getFullYear(), last.getMonth() + 1, 0));
  } else if (preset === "last2" || preset === "last3" || preset === "last6") {
    const count = Number(preset.replace("last", ""));
    start = dateKeyFromDate(new Date(today.getFullYear(), today.getMonth() - count + 1, 1));
    end = todayKey();
  } else if (preset === "all") {
    const keys = getAllDayKeys();
    start = keys[0] || todayKey();
    end = keys[keys.length - 1] || todayKey();
  } else if (preset === "custom") {
    start = els.periodStart.value || todayKey();
    end = els.periodEnd.value || start;
  } else {
    start = dateKeyFromDate(new Date(today.getFullYear(), today.getMonth(), 1));
    end = todayKey();
  }

  if (start > end) [start, end] = [end, start];
  els.periodStart.value = start;
  els.periodEnd.value = end;
  return { start, end };
}

function renderCharts(summary) {
  const chartDays = summary.days.length > 120 ? summary.days.filter((_, index) => index % Math.ceil(summary.days.length / 120) === 0) : summary.days;

  drawGroupedBars(els.calorieChart, chartDays, [
    { key: "eaten", label: t("eaten"), color: "#6557ff" },
    { key: "activityBurn", label: t("burned"), color: "#1c9f63" },
    { key: "balance", label: state.profile.goal === "loss" ? t("deficit") : t("surplus"), color: "#d19300" }
  ]);

  drawBars(els.activityChart, chartDays, "activityBurn", "#2f80ed");

  const typeData = Object.entries(summary.activityTypes)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
  drawCategoryBars(els.activityTypeChart, typeData, "#8578ff");

  drawBars(els.resultChart, chartDays, "balance", "#6557ff", true);
}

function clearCharts() {
  [els.calorieChart, els.activityChart, els.activityTypeChart, els.resultChart].forEach((canvas) => {
    const context = prepareCanvas(canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
}

function drawGroupedBars(canvas, days, series) {
  const ctx = prepareCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const padding = { top: 28, right: 12, bottom: 38, left: 42 };
  ctx.clearRect(0, 0, width, height);
  drawChartFrame(ctx, width, height, padding);

  const max = Math.max(1, ...days.flatMap((day) => series.map((item) => Math.abs(day[item.key]))));
  const groupWidth = (width - padding.left - padding.right) / Math.max(1, days.length);
  const barWidth = Math.max(2, Math.min(12, groupWidth / (series.length + 1)));

  days.forEach((day, dayIndex) => {
    series.forEach((item, seriesIndex) => {
      const value = Math.max(0, day[item.key]);
      const barHeight = (value / max) * (height - padding.top - padding.bottom);
      const x = padding.left + dayIndex * groupWidth + seriesIndex * barWidth + 2;
      const y = height - padding.bottom - barHeight;
      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, barWidth, barHeight);
    });
  });

  drawSparseLabels(ctx, days, width, height, padding);
  drawLegend(ctx, series);
}

function drawBars(canvas, days, key, color, allowNegative = false) {
  const ctx = prepareCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const padding = { top: 26, right: 12, bottom: 38, left: 42 };
  ctx.clearRect(0, 0, width, height);
  drawChartFrame(ctx, width, height, padding);

  const values = days.map((day) => Number(day[key]) || 0);
  const maxAbs = Math.max(1, ...values.map((value) => Math.abs(value)));
  const chartHeight = height - padding.top - padding.bottom;
  const zeroY = allowNegative ? padding.top + chartHeight / 2 : height - padding.bottom;
  const barWidth = Math.max(3, Math.min(18, (width - padding.left - padding.right) / Math.max(1, days.length) - 3));
  const step = (width - padding.left - padding.right) / Math.max(1, days.length);

  if (allowNegative) {
    ctx.strokeStyle = "rgba(105, 109, 128, 0.45)";
    ctx.beginPath();
    ctx.moveTo(padding.left, zeroY);
    ctx.lineTo(width - padding.right, zeroY);
    ctx.stroke();
  }

  values.forEach((value, index) => {
    const magnitude = (Math.abs(value) / maxAbs) * (allowNegative ? chartHeight / 2 : chartHeight);
    const x = padding.left + index * step + 2;
    const y = value >= 0 ? zeroY - magnitude : zeroY;
    ctx.fillStyle = allowNegative && value < 0 ? "#d83b3b" : color;
    ctx.fillRect(x, y, barWidth, Math.max(1, magnitude));
  });

  drawSparseLabels(ctx, days, width, height, padding);
}

function drawCategoryBars(canvas, data, color) {
  const ctx = prepareCanvas(canvas);
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const padding = { top: 24, right: 12, bottom: 52, left: 42 };
  ctx.clearRect(0, 0, width, height);
  drawChartFrame(ctx, width, height, padding);

  if (!data.length) {
    ctx.fillStyle = getCssVar("--muted");
    ctx.fillText(t("noData"), padding.left, height / 2);
    return;
  }

  const max = Math.max(1, ...data.map((item) => item.value));
  const step = (width - padding.left - padding.right) / data.length;
  const barWidth = Math.max(14, Math.min(42, step - 10));

  data.forEach((item, index) => {
    const barHeight = (item.value / max) * (height - padding.top - padding.bottom);
    const x = padding.left + index * step + (step - barWidth) / 2;
    const y = height - padding.bottom - barHeight;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = getCssVar("--muted");
    ctx.font = "11px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(shortenLabel(item.label), x + barWidth / 2, height - 30);
    ctx.fillText(round(item.value), x + barWidth / 2, height - 14);
  });
}

function prepareCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, rect.width || canvas.parentElement.clientWidth || 300);
  const height = Number(canvas.getAttribute("height")) || 240;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.font = "12px system-ui";
  ctx.lineWidth = 1;
  return ctx;
}

function drawChartFrame(ctx, width, height, padding) {
  ctx.strokeStyle = "rgba(105, 109, 128, 0.24)";
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, height - padding.bottom);
  ctx.lineTo(width - padding.right, height - padding.bottom);
  ctx.stroke();
}

function drawSparseLabels(ctx, days, width, height, padding) {
  const step = (width - padding.left - padding.right) / Math.max(1, days.length);
  const labelEvery = Math.max(1, Math.ceil(days.length / 6));
  ctx.fillStyle = getCssVar("--muted");
  ctx.font = "11px system-ui";
  ctx.textAlign = "center";
  days.forEach((day, index) => {
    if (index % labelEvery !== 0 && index !== days.length - 1) return;
    ctx.fillText(day.dateKey.slice(5), padding.left + index * step + step / 2, height - 14);
  });
}

function drawLegend(ctx, series) {
  let x = 44;
  series.forEach((item) => {
    ctx.fillStyle = item.color;
    ctx.fillRect(x, 8, 9, 9);
    ctx.fillStyle = getCssVar("--muted");
    ctx.textAlign = "left";
    ctx.fillText(item.label, x + 13, 16);
    x += item.label.length * 7 + 34;
  });
}

function getCssVar(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function fillProfileForm() {
  els.goal.value = state.profile.goal;
  els.sex.value = state.profile.sex;
  els.weight.value = state.profile.weight;
  els.height.value = state.profile.height;
  els.age.value = state.profile.age;
  els.language.value = state.language;
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  els.themeToggle.textContent = state.theme === "dark" ? "☼" : "☾";
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
}

function t(key) {
  return (I18N[state.language] && I18N[state.language][key]) || I18N.ru[key] || key;
}

function todayKey() {
  return dateKeyFromDate(new Date());
}

function dateKeyFromTimestamp(timestamp) {
  if (!timestamp) return "";
  return dateKeyFromDate(new Date(timestamp));
}

function dateKeyFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function enumerateDates(start, end) {
  const days = [];
  const cursor = dateFromKey(start);
  const endDate = dateFromKey(end);
  while (cursor <= endDate) {
    days.push(dateKeyFromDate(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function formatDateShort(dateKey) {
  const date = dateFromKey(dateKey);
  return new Intl.DateTimeFormat(state.language, { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function maxBy(items, key) {
  if (!items.length) return null;
  return items.reduce((best, item) => (item[key] > best[key] ? item : best), items[0]);
}

function minBy(items, key) {
  if (!items.length) return null;
  return items.reduce((best, item) => (item[key] < best[key] ? item : best), items[0]);
}

function shortenLabel(label) {
  return String(label).length > 10 ? `${String(label).slice(0, 9)}…` : String(label);
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
