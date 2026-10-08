import { senasPendientes, senasCorregidas, registrosHistorial } from "../data/datos";

const KEYS = {
  signs: "signa_interpreter_signs",
  history: "signa_interpreter_history",
  profile: "signa_interpreter_profile",
  registrationDraft: "signa_interpreter_registration_draft"
};

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function seedSigns() {
  return [
    ...senasPendientes.map((sign) => ({ ...sign, id: `pending-${sign.id}` })),
    ...senasCorregidas.map((sign) => ({ ...sign, id: `correction-${sign.id}` }))
  ];
}

export function obtenerSenas() {
  return read(KEYS.signs, seedSigns());
}

export function guardarSenas(signs) {
  return write(KEYS.signs, signs);
}

export function obtenerHistorial() {
  return read(KEYS.history, registrosHistorial);
}

export function agregarHistorial(record) {
  const history = obtenerHistorial();
  return write(KEYS.history, [{ ...record, id: Date.now() }, ...history]);
}

export function obtenerPerfil() {
  return read(KEYS.profile, {
    name: "Intérprete",
    email: "interprete@signatech.com",
    phone: "300 000 0000",
    notifications: true
  });
}

export function guardarPerfil(profile) {
  return write(KEYS.profile, profile);
}

export function obtenerBorrador() {
  return read(KEYS.registrationDraft, null);
}

export function guardarBorrador(draft) {
  if (!draft.word && !draft.meaning && !draft.description && !draft.attachment) {
    localStorage.removeItem(KEYS.registrationDraft);
    return null;
  }
  return write(KEYS.registrationDraft, draft);
}

export function limpiarBorrador() {
  localStorage.removeItem(KEYS.registrationDraft);
}
