export const dashboardStats = [
  { label: "Señas validadas", value: "128", detail: "+12 este mes", icon: "✓", tone: "green" },
  { label: "Nuevas señas", value: "24", detail: "8 pendientes", icon: "+", tone: "cyan" },
  { label: "Corregidas", value: "36", detail: "+5 este mes", icon: "✎", tone: "purple" },
  { label: "Pendientes", value: "8", detail: "Requieren revisión", icon: "!", tone: "orange" }
];

export const monthlyActivity = [
  ["Ene", 42],
  ["Feb", 58],
  ["Mar", 47],
  ["Abr", 72],
  ["May", 64],
  ["Jun", 88],
  ["Jul", 76],
  ["Ago", 94]
];

export const categoryDistribution = [
  ["Personas", "32%"],
  ["Acciones", "26%"],
  ["Educación", "18%"],
  ["Lugares", "14%"],
  ["Otros", "10%"]
];

export const latestActivity = [
  { word: "Familia", category: "Personas", status: "Validada", date: "Hoy, 10:30" },
  { word: "Aprender", category: "Educación", status: "Corregida", date: "Ayer, 16:20" },
  { word: "Trabajo", category: "Acciones", status: "Validada", date: "Ayer, 11:45" }
];

export const pendingSigns = [
  { id: 1, word: "Familia", category: "Personas", meaning: "Grupo de personas unidas por parentesco.", description: "Seña usada para representar a la familia.", status: "Pendiente", date: "23/09/2026" },
  { id: 2, word: "Escuela", category: "Educación", meaning: "Lugar destinado a la enseñanza.", description: "Seña relacionada con el espacio educativo.", status: "Pendiente", date: "22/09/2026" },
  { id: 3, word: "Trabajar", category: "Acciones", meaning: "Realizar una actividad laboral.", description: "Representa una acción de trabajo.", status: "Pendiente", date: "21/09/2026" },
  { id: 4, word: "Hospital", category: "Lugares", meaning: "Centro para atención de salud.", description: "Seña usada para identificar un hospital.", status: "Pendiente", date: "20/09/2026" }
];

export const correctionSigns = [
  { id: 1, word: "Aprender", category: "Educación", meaning: "Adquirir conocimientos.", status: "Corregida" },
  { id: 2, word: "Comunicar", category: "Acciones", meaning: "Transmitir información.", status: "Validada" },
  { id: 3, word: "Familia", category: "Personas", meaning: "Grupo unido por parentesco.", status: "Validada" },
  { id: 4, word: "Hospital", category: "Lugares", meaning: "Centro de atención médica.", status: "Corregida" }
];

export const historyRecords = [
  { id: 1, word: "Familia", action: "Validación", user: "Intérprete", status: "Validada", date: "23/09/2026" },
  { id: 2, word: "Aprender", action: "Corrección", user: "Intérprete", status: "Corregida", date: "22/09/2026" },
  { id: 3, word: "Trabajo", action: "Validación", user: "Intérprete", status: "Validada", date: "21/09/2026" },
  { id: 4, word: "Hospital", action: "Revisión", user: "Intérprete", status: "Pendiente", date: "20/09/2026" },
  { id: 5, word: "Escuela", action: "Validación", user: "Intérprete", status: "Validada", date: "19/09/2026" },
  { id: 6, word: "Comunicar", action: "Corrección", user: "Intérprete", status: "Corregida", date: "18/09/2026" }
];

export const statisticsMonths = monthlyActivity;

export const statisticsSummary = [
  ["Actividad total", "188 señas"],
  ["Promedio mensual", "24 validaciones"],
  ["Categoría principal", "Personas"],
  ["Última actualización", "23/09/2026"]
];

export const categoryOptions = [
  { value: "Todas", label: "Todas" },
  { value: "Personas", label: "Personas" },
  { value: "Acciones", label: "Acciones" },
  { value: "Educación", label: "Educación" },
  { value: "Lugares", label: "Lugares" }
];
