import { pendingSigns, correctionSigns, historyRecords } from "../data/interpreterData";

const KEYS = {
  signs: "signa_interpreter_signs",
  history: "signa_interpreter_history",
  profile: "signa_interpreter_profile"
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

export function getSigns() {
  return read(KEYS.signs, [...pendingSigns, ...correctionSigns]);
}

export function saveSigns(signs) {
  return write(KEYS.signs, signs);
}

export function getHistory() {
  return read(KEYS.history, historyRecords);
}

export function addHistory(record) {
  const history = getHistory();
  return write(KEYS.history, [{ ...record, id: Date.now() }, ...history]);
}

export function getProfile() {
  return read(KEYS.profile, {
    name: "Intérprete",
    email: "interprete@signatech.com",
    phone: "300 000 0000",
    notifications: true
  });
}

export function saveProfile(profile) {
  return write(KEYS.profile, profile);
}
