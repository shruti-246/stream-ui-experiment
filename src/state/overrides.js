const KEY = "site_overrides_frontpage_v1";

export function getOverrides() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
  catch { return {}; }
}

export function setOverrides(update) {
  const curr = getOverrides();
  const next = { ...curr, ...update };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearSection() {
  localStorage.removeItem(KEY);
}
