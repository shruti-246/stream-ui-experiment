// Deterministic pool based on persona count
export const COLOR_POOL = ["red", "blue", "green", "purple"];

export function colorPoolFor(count) {
  return COLOR_POOL.slice(0, Math.min(count, COLOR_POOL.length));
}

// Map color_key -> actual tile styles you already use
export const COLOR_STYLES = {
  red:   { tileBg: "#e50914", text: "#ffffff" },
  blue:  { tileBg: "#0a84ff", text: "#ffffff" },
  green: { tileBg: "#22c55e", text: "#0b1113" },
  purple:{ tileBg: "#a855f7", text: "#0b1113" }
};
