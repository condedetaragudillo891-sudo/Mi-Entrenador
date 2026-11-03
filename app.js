const routinePlan = {
  0: { name: "Descanso", badge: "Recuperación", muscles: [], cardio: null, exercises: [] },
  1: {
    name: "Pecho y tríceps", badge: "Día 1 · Empuje", muscles: ["Pecho", "Tríceps"],
    cardio: { title: "Cinta de correr o elíptica", description: "30 min a ritmo cómodo: debes poder mantener una conversación. Elige la máquina que te resulte más cómoda." },
    exercises: [
      { name: "Press de pecho sentado", equipment: "Máquina · Pecho", sets: 3, reps: "10–12", rest: "75 s", instructions: "Ajusta el asiento para que las asas queden a la altura del pecho. Empuja sin bloquear los codos y vuelve despacio.", art: "machine" },
      { name: "Press inclinado con mancuernas", equipment: "Banco inclinado · Mancuernas", sets: 3, reps: "10–12", rest: "75 s", instructions: "Apoya la espalda en el banco. Baja las mancuernas de forma controlada a los lados del pecho y empuja hacia arriba.", art: "dumbbell" },
      { name: "Aperturas en máquina", equipment: "Máquina contractora · Pecho", sets: 3, reps: "12", rest: "60 s", instructions: "Con la espalda apoyada, junta los brazos delante del pecho sin dar tirones. Regresa lentamente hasta notar un estiramiento suave.", art: "machine" },
      { name: "Extensión de tríceps", equipment: "Polea · Cuerda", sets: 3, reps: "12", rest: "60 s", instructions: "Mantén los codos pegados al cuerpo. Empuja la cuerda hacia abajo y separa ligeramente sus extremos al final.", art: "cable" },
      { name: "Extensión de tríceps sentado", equipment: "Máquina · Tríceps", sets: 2, reps: "12", rest: "60 s", instructions: "Ajusta la máquina y apoya los brazos. Extiende con suavidad, sin bloquear los codos ni arquear la espalda.", art: "machine" }
    ]
  },
  2: {
    name: "Espalda y bíceps", badge: "Día 2 · Tirón", muscles: ["Espalda", "Bíceps"],
    cardio: { title: "Elíptica o bicicleta estática", description: "30 min a intensidad suave o moderada. Mantén un ritmo continuo y cómodo; reduce la resistencia si te falta el aire." },
    exercises: [
      { name: "Jalón al pecho", equipment: "Polea alta · Espalda", sets: 3, reps: "10–12", rest: "75 s", instructions: "Sujeta la barra algo más abierta que los hombros. Llévala hacia la parte alta del pecho y deja subir despacio; no tires tras la nuca.", art: "cable" },
      { name: "Remo sentado", equipment: "Máquina · Espalda", sets: 3, reps: "10–12", rest: "75 s", instructions: "Siéntate erguido y lleva las asas hacia el abdomen acercando suavemente los omóplatos. Evita balancear el tronco.", art: "machine" },
      { name: "Remo con mancuerna", equipment: "Banco · Una mancuerna", sets: 3, reps: "10 por lado", rest: "60 s", instructions: "Apoya una mano y una rodilla en el banco. Lleva la mancuerna hacia la cadera con la espalda recta y cambia de lado.", art: "dumbbell" },
      { name: "Curl de bíceps sentado", equipment: "Mancuernas · Bíceps", sets: 3, reps: "10–12", rest: "60 s", instructions: "Con los codos cerca del cuerpo, sube las mancuernas sin balancearte y bájalas despacio hasta casi estirar los brazos.", art: "dumbbell" },
      { name: "Curl de bíceps en polea", equipment: "Polea baja · Barra", sets: 2, reps: "12", rest: "60 s", instructions: "Mantén el cuerpo quieto y los codos pegados a los costados. Flexiona los brazos y regresa de forma controlada.", art: "cable" }
    ]
  },
  3: { name: "Descanso", badge: "Recuperación", muscles: [], cardio: null, exercises: [] },
  4: {
    name: "Piernas y glúteos", badge: "Día 3 · Tren inferior", muscles: ["Piernas", "Glúteos"],
    cardio: { title: "Bicicleta estática o elíptica", description: "30 min con resistencia ligera. Si las piernas están cansadas, baja el ritmo; el objetivo es moverte, no agotarte." },
    exercises: [
      { name: "Prensa de piernas", equipment: "Máquina · Cuádriceps y glúteos", sets: 3, reps: "10–12", rest: "90 s", instructions: "Coloca los pies al ancho de las caderas. Baja hasta donde estés cómodo sin despegar la espalda y empuja sin bloquear las rodillas.", art: "machine" },
      { name: "Curl femoral sentado", equipment: "Máquina · Parte posterior del muslo", sets: 3, reps: "12", rest: "75 s", instructions: "Ajusta el rodillo por encima de los tobillos. Flexiona las rodillas sin levantar la cadera y vuelve despacio.", art: "machine" },
      { name: "Extensión de piernas", equipment: "Máquina · Cuádriceps", sets: 3, reps: "12", rest: "75 s", instructions: "Alinea las rodillas con el eje de la máquina. Extiende sin dar impulso y baja con control.", art: "machine" },
      { name: "Puente de glúteos", equipment: "Colchoneta · Peso corporal", sets: 3, reps: "12", rest: "60 s", instructions: "Tumbado boca arriba y con las rodillas flexionadas, eleva la cadera apretando los glúteos. No arquees la zona lumbar.", art: "body" },
      { name: "Elevación de talones", equipment: "Máquina o de pie · Gemelos", sets: 2, reps: "12–15", rest: "60 s", instructions: "Sujétate para mantener el equilibrio. Sube sobre la punta de los pies, pausa un instante y baja lentamente.", art: "body" }
    ]
  },
  5: {
    name: "Hombros y core", badge: "Día 4 · Estabilidad", muscles: ["Hombros", "Abdomen"],
    cardio: { title: "Cinta de correr, elíptica o paseo", description: "30 min a ritmo fácil. Puedes caminar con una ligera inclinación; no necesitas correr para que cuente." },
    exercises: [
      { name: "Press de hombros sentado", equipment: "Máquina · Hombros", sets: 3, reps: "10–12", rest: "75 s", instructions: "Ajusta las asas a la altura de los hombros. Empuja hacia arriba de forma controlada y baja sin forzar el rango.", art: "machine" },
      { name: "Elevación lateral", equipment: "Mancuernas ligeras · Hombros", sets: 3, reps: "12", rest: "60 s", instructions: "Con los codos ligeramente flexionados, levanta los brazos hasta la altura de los hombros. Usa poco peso y evita encogerlos.", art: "dumbbell" },
      { name: "Face pull", equipment: "Polea alta · Cuerda", sets: 3, reps: "12", rest: "60 s", instructions: "Tira de la cuerda hacia la cara con los codos abiertos. Mantén el pecho erguido y el movimiento suave.", art: "cable" },
      { name: "Dead bug", equipment: "Colchoneta · Core", sets: 3, reps: "8 por lado", rest: "45 s", instructions: "Tumbado boca arriba, mantén la zona lumbar apoyada. Extiende despacio brazo y pierna contrarios; alterna los lados.", art: "body" },
      { name: "Pallof press", equipment: "Polea o banda · Core", sets: 2, reps: "10 por lado", rest: "45 s", instructions: "De lado a la polea, sujeta el asa frente al pecho y extiende los brazos sin dejar que el tronco gire. Cambia de lado.", art: "cable" }
    ]
  },
  6: { name: "Descanso", badge: "Recuperación", muscles: [], cardio: null, exercises: [] }
};

const STORAGE_KEY = "entrenador-personal-registro-v1";
const today = new Date();
today.setHours(0, 0, 0, 0);
const dateKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const parseDate = (key) => {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};
const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let selectedDate = new Date(today);
let calendarDate = new Date(today);
let calendarView = "month";
let records = readRecords();

function readRecords() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
  } catch (error) {
    console.error("No se pudieron leer los entrenamientos guardados.", error);
    return {};
  }
}

function saveRecords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return true;
  } catch (error) {
    console.error("No se pudo guardar el entrenamiento en este dispositivo.", error);
    document.getElementById("save-hint").textContent = "No se pudo guardar. Comprueba el espacio disponible del dispositivo y vuelve a intentarlo.";
    return false;
  }
}

function svgFor(type) {
  const figures = {
    machine: '<path d="M17 56h47M24 56V16h9v40M58 56V24h8v32M20 17h17M50 24h18"/><circle cx="45" cy="33" r="5"/><path d="M45 38v11m0-7-8 7m8-7 9 5M37 49l-3 7m20-5 4 5"/>',
    dumbbell: '<path d="M18 56h50M38 52l4-16m0 0-9-8m9 8 10-4m-10 4 4 15M33 28l-4-4m-3 0-4-4m3 8-4 4m30-10 6-4m3 0 5-4m-6 8 5 5"/><circle cx="42" cy="29" r="5"/>',
    cable: '<path d="M18 56h49M24 56V15h8v41M62 56V18m-30 3h34m-25 0v11l9 6m0 0 7 1m-7-1-7 8m7-8 2 9"/><circle cx="42" cy="33" r="5"/>',
    body: '<path d="M15 56h54M26 50l10-15 10 2 10 13M37 35l-5-10m14 12 11-8m-11 8 2 12m-12-14-12 8m22 12 10 4M32 25l-4-4m29 8 6-4"/><circle cx="38" cy="20" r="5"/>'
  };
  return `<svg viewBox="0 0 84 68" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${figures[type] || figures.body}</svg>`;
}

function getPlan(date) {
  return routinePlan[date.getDay()];
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderRoutine() {
  const key = dateKey(selectedDate);
  const plan = getPlan(selectedDate);
  const record = records[key] || { completed: [], calories: "" };
  const label = `${dayNames[selectedDate.getDay()]} ${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}`;
  document.getElementById("today-label").textContent = selectedDate.getTime() === today.getTime() ? label.toUpperCase() : `PLAN PARA ${label.toUpperCase()}`;
  document.getElementById("routine-title").textContent = plan.name;
  document.getElementById("routine-badge").textContent = plan.badge;
  document.getElementById("workout-summary").innerHTML = plan.exercises.length
    ? `<span class="summary-chip">⏱ 60 min aprox. · fuerza</span><span class="summary-chip">🏋 ${plan.muscles.join(" + ")}</span><span class="summary-chip">🔁 ${plan.exercises.length} ejercicios</span>`
    : `<span class="summary-chip">Día libre · recuperación activa opcional</span>`;
  document.getElementById("session-timeline").classList.toggle("hidden", !plan.exercises.length);
  document.getElementById("exercise-list").innerHTML = plan.exercises.map((exercise, index) => `
    <article class="exercise-card">
      <div class="exercise-main">
        <div class="exercise-art">${svgFor(exercise.art)}</div>
        <div><span class="exercise-number">EJERCICIO ${String(index + 1).padStart(2, "0")}</span><h3 class="exercise-title">${escapeHtml(exercise.name)}</h3><p class="exercise-equipment">${escapeHtml(exercise.equipment)}</p></div>
        <div class="exercise-dose"><span class="dose-reps">${exercise.sets} × ${escapeHtml(exercise.reps)}</span><span class="dose-rest">${escapeHtml(exercise.rest)} descanso</span></div>
      </div>
      <div class="exercise-instructions"><p>${escapeHtml(exercise.instructions)}</p><label class="done-label"><input type="checkbox" data-exercise="${index}" ${record.completed.includes(index) ? "checked" : ""}> Hecho</label></div>
    </article>`).join("");
  document.getElementById("cardio-card").classList.toggle("hidden", !plan.cardio);
  document.getElementById("rest-card").classList.toggle("hidden", Boolean(plan.cardio));
  if (plan.cardio) {
    document.getElementById("cardio-title").textContent = plan.cardio.title;
    document.getElementById("cardio-description").textContent = plan.cardio.description;
  }
  document.getElementById("calories-input").value = record.calories ?? "";
  updateCompletion(record, plan);
  document.querySelectorAll("[data-exercise]").forEach((checkbox) => checkbox.addEventListener("change", () => {
    const current = records[key] || { completed: [], calories: "" };
    const completed = new Set(current.completed || []);
    if (checkbox.checked) completed.add(Number(checkbox.dataset.exercise));
    else completed.delete(Number(checkbox.dataset.exercise));
    records[key] = { ...current, completed: [...completed] };
    if (saveRecords()) {
      updateCompletion(records[key], plan);
      if (!document.getElementById("calendar-panel").classList.contains("hidden")) renderCalendar();
    }
  }));
}

function updateCompletion(record, plan) {
  const count = (record.completed || []).length;
  document.getElementById("completion-status").textContent = count ? `${count}/${plan.exercises.length} ejercicios hechos` : "";
}

function saveDay() {
  const key = dateKey(selectedDate);
  const input = document.getElementById("calories-input");
  if (input.value && (!Number.isInteger(Number(input.value)) || Number(input.value) < 0 || Number(input.value) > 20000)) {
    document.getElementById("save-hint").textContent = "Introduce un número entero de calorías entre 0 y 20 000, o deja el campo vacío.";
    input.focus();
    return;
  }
  const current = records[key] || { completed: [], calories: "" };
  records[key] = { ...current, calories: input.value ? Number(input.value) : "" };
  if (saveRecords()) {
    document.getElementById("save-hint").textContent = "Día guardado en este dispositivo.";
    renderRoutine();
    renderCalendar();
  }
}

function monthStart(date) { return new Date(date.getFullYear(), date.getMonth(), 1); }
function startOfWeek(date) {
  const start = new Date(date);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  start.setHours(0, 0, 0, 0);
  return start;
}
function monthLabel(date) { return `${monthNames[date.getMonth()]} ${date.getFullYear()}`; }
function workoutLabel(record, date) {
  if (!record || !record.completed || !record.completed.length) return "";
  const plan = getPlan(date);
  return plan.exercises.length ? plan.muscles.join(" · ") : "Actividad";
}

function renderCalendar() {
  if (calendarView === "week") renderWeek();
  else if (calendarView === "year") renderYear();
  else renderMonth();
  renderDayDetail();
}

function renderMonth() {
  const first = monthStart(calendarDate);
  const firstCell = startOfWeek(first);
  const monthName = monthLabel(calendarDate);
  document.getElementById("period-label").textContent = monthName;
  let html = '<div class="calendar-grid">';
  ["L", "M", "X", "J", "V", "S", "D"].forEach((day) => { html += `<span class="weekday">${day}</span>`; });
  for (let i = 0; i < 42; i++) {
    const date = new Date(firstCell);
    date.setDate(firstCell.getDate() + i);
    const key = dateKey(date);
    const record = records[key];
    const isOutside = date.getMonth() !== calendarDate.getMonth();
    const workout = workoutLabel(record, date);
    html += `<button type="button" class="calendar-day${isOutside ? " outside" : ""}${key === dateKey(today) ? " today" : ""}${key === dateKey(selectedDate) ? " selected-day" : ""}" data-date="${key}" aria-label="${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]}${workout ? `, ${workout}` : ""}${record && record.calories !== "" ? `, ${record.calories} calorías` : ""}">
      <span class="day-number">${date.getDate()}</span>${workout ? `<span class="day-mark">${escapeHtml(workout)}</span>` : ""}${record && record.calories !== "" ? `<span class="calorie-mark">${record.calories} kcal</span>` : ""}
    </button>`;
  }
  html += '</div><div class="calendar-legend"><span><i class="legend-dot"></i>Entrenamiento hecho</span><span><i class="legend-dot orange"></i>Calorías anotadas</span></div>';
  document.getElementById("calendar-content").innerHTML = html;
  bindCalendarDays();
}

function renderWeek() {
  const start = startOfWeek(calendarDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  document.getElementById("period-label").textContent = `${start.getDate()}–${end.getDate()} ${monthNames[end.getMonth()]} ${end.getFullYear()}`;
  let html = '<div class="calendar-grid">';
  ["L", "M", "X", "J", "V", "S", "D"].forEach((day) => { html += `<span class="weekday">${day}</span>`; });
  for (let i = 0; i < 7; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const key = dateKey(date);
    const record = records[key];
    const workout = workoutLabel(record, date);
    html += `<button type="button" class="calendar-day${key === dateKey(today) ? " today" : ""}${key === dateKey(selectedDate) ? " selected-day" : ""}" data-date="${key}" aria-label="${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]}${workout ? `, ${workout}` : ""}">
      <span class="day-number">${date.getDate()} ${monthNames[date.getMonth()].slice(0, 3)}</span>${workout ? `<span class="day-mark">${escapeHtml(workout)}</span>` : `<span class="day-mark">—</span>`}${record && record.calories !== "" ? `<span class="calorie-mark">${record.calories} kcal</span>` : ""}
    </button>`;
  }
  html += '</div><div class="calendar-legend"><span><i class="legend-dot"></i>Entrenamiento hecho</span><span><i class="legend-dot orange"></i>Calorías anotadas</span></div>';
  document.getElementById("calendar-content").innerHTML = html;
  bindCalendarDays();
}

function renderYear() {
  document.getElementById("period-label").textContent = String(calendarDate.getFullYear());
  let html = '<div class="year-grid">';
  for (let month = 0; month < 12; month++) {
    const first = new Date(calendarDate.getFullYear(), month, 1);
    const firstCell = startOfWeek(first);
    let workouts = 0;
    let calories = 0;
    html += `<section class="year-month"><button type="button" class="year-month-button" data-month="${month}">${monthNames[month]}</button><div class="mini-grid">`;
    for (let i = 0; i < 42; i++) {
      const date = new Date(firstCell);
      date.setDate(firstCell.getDate() + i);
      if (date.getMonth() !== month) {
        html += '<span class="mini-day"></span>';
        continue;
      }
      const record = records[dateKey(date)];
      const done = Boolean(record && record.completed && record.completed.length);
      const hasCalories = Boolean(record && record.calories !== "");
      if (done) workouts++;
      if (hasCalories) calories++;
      html += `<span class="mini-day${done ? " has-workout" : ""}${hasCalories ? " has-calories" : ""}" title="${date.getDate()}${done ? " · entrenamiento" : ""}${hasCalories ? " · calorías" : ""}">${date.getDate()}</span>`;
    }
    html += `</div><p class="month-stats">${workouts} entrenos · ${calories} días con kcal</p></section>`;
  }
  html += "</div>";
  document.getElementById("calendar-content").innerHTML = html;
  document.querySelectorAll("[data-month]").forEach((button) => button.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), Number(button.dataset.month), 1);
    calendarView = "month";
    updateViewButtons();
    renderCalendar();
  }));
}

function bindCalendarDays() {
  document.querySelectorAll("[data-date]").forEach((button) => button.addEventListener("click", () => {
    selectedDate = parseDate(button.dataset.date);
    renderCalendar();
  }));
}

function renderDayDetail() {
  const key = dateKey(selectedDate);
  const record = records[key];
  const plan = getPlan(selectedDate);
  document.getElementById("detail-date").textContent = `${dayNames[selectedDate.getDay()]} ${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]} de ${selectedDate.getFullYear()}`;
  const details = [];
  if (plan.exercises.length) details.push(`<span class="detail-chip">${escapeHtml(plan.name)}</span>`);
  if (record && record.completed && record.completed.length) details.push(`<span class="detail-chip">${record.completed.length}/${plan.exercises.length} ejercicios completados</span>`);
  if (record && record.calories !== "") details.push(`<span class="detail-chip">${record.calories} kcal</span>`);
  if (!details.length) {
    document.getElementById("detail-content").innerHTML = `<p>${plan.exercises.length ? "Aún no has registrado actividad este día." : "Día de descanso."} Abre «Mi rutina» para consultar el plan o registrar tus datos.</p>`;
  } else {
    document.getElementById("detail-content").innerHTML = `<p>Resumen guardado</p><div class="detail-chips">${details.join("")}</div>`;
  }
}

function updateViewButtons() {
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("selected", button.dataset.view === calendarView));
}

document.querySelectorAll(".tab-button").forEach((button) => button.addEventListener("click", () => {
  const tab = button.dataset.tab;
  document.querySelectorAll(".tab-button").forEach((item) => item.classList.toggle("active", item === button));
  document.getElementById("routine-panel").classList.toggle("hidden", tab !== "routine");
  document.getElementById("calendar-panel").classList.toggle("hidden", tab !== "calendar");
  if (tab === "calendar") renderCalendar();
}));

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => {
  calendarView = button.dataset.view;
  updateViewButtons();
  renderCalendar();
}));

document.getElementById("previous-period").addEventListener("click", () => {
  if (calendarView === "year") calendarDate.setFullYear(calendarDate.getFullYear() - 1);
  else if (calendarView === "week") calendarDate.setDate(calendarDate.getDate() - 7);
  else calendarDate.setMonth(calendarDate.getMonth() - 1);
  renderCalendar();
});
document.getElementById("next-period").addEventListener("click", () => {
  if (calendarView === "year") calendarDate.setFullYear(calendarDate.getFullYear() + 1);
  else if (calendarView === "week") calendarDate.setDate(calendarDate.getDate() + 7);
  else calendarDate.setMonth(calendarDate.getMonth() + 1);
  renderCalendar();
});
document.getElementById("save-day").addEventListener("click", saveDay);

renderRoutine();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch((error) => console.error("No se pudo habilitar el modo sin conexión.", error)));
}
