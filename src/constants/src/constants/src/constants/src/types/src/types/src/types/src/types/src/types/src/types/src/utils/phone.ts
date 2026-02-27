export function normalizePhone(raw: string): string {
  const s = (raw || "").trim().replace(/\s+/g, "");
  // on enlève + si présent
  return s.startsWith("+") ? s.slice(1) : s;
}

export function isPhoneLen9to15(phone: string): boolean {
  const p = normalizePhone(phone);
  return /^\d{9,15}$/.test(p);
}
