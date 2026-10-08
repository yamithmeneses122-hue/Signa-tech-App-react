export const signCategories = ["Personas", "Acciones", "Educación", "Lugares", "Objetos"];

export const activityMonthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

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

export const categoryOptions = [
  { value: "Todas", label: "Todas" },
  ...signCategories.map((category) => ({ value: category, label: category }))
];
