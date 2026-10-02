import { addHistory, getSigns, saveSigns } from "./interpreterStorage";

export function changeSignStatus(signId, status, user = "Intérprete") {
  const signs = getSigns();
  const sign = signs.find((item) => item.id === signId);
  if (!sign) return null;

  const updated = signs.map((item) =>
    item.id === signId ? { ...item, status } : item
  );

  saveSigns(updated);
  addHistory({
    word: sign.word,
    action: status === "Validada" ? "Validación" : "Revisión",
    user,
    status,
    date: new Date().toLocaleDateString("es-CO")
  });

  return updated;
}

export function updateSign(sign, user = "Intérprete") {
  const signs = getSigns();
  const updated = signs.map((item) => (item.id === sign.id ? sign : item));
  saveSigns(updated);
  addHistory({
    word: sign.word,
    action: "Corrección",
    user,
    status: "Corregida",
    date: new Date().toLocaleDateString("es-CO")
  });
  return updated;
}

export function registerSign(form, user = "Intérprete") {
  const signs = getSigns();
  const newSign = {
    ...form,
    id: Date.now(),
    status: "Pendiente",
    date: new Date().toLocaleDateString("es-CO")
  };
  saveSigns([...signs, newSign]);
  addHistory({
    word: newSign.word,
    action: "Revisión",
    user,
    status: "Pendiente",
    date: newSign.date
  });
  return newSign;
}
