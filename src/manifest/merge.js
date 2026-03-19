// tiny deep merge for Base ⊕ Overrides (front page only)
export function deepMerge(base, over) {
  if (Array.isArray(base) && Array.isArray(over)) return over;
  if (isObj(base) && isObj(over)) {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = deepMerge(base?.[k], over[k]);
    return out;
  }
  return over ?? base;
}
function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }
