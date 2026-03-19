import { useManifest } from "../manifest/context";
import { COLOR_STYLES } from "../manifest/colors";

export default function FrontPage() {
  const { manifest } = useManifest();
  const { front_title, personas, background } = manifest;

  return (
    <div className={`min-h-screen`} style={{ backgroundColor: background?.style === "black" ? "#000" : "#000" }}>
      <div className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-white">{front_title || "Who’s Watching?"}</h1>
        <p className="text-gray-400 mt-2">Pick your profile</p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-8 pb-16">
        {(personas || []).filter(p => p.visible !== false).map((p, idx) => {
          const style = COLOR_STYLES[p.color_key] || COLOR_STYLES.red;
          return (
            <div key={idx} className="flex flex-col items-center gap-3">
              {/* Avatar tile (color mode only for now) */}
              <div
                className="w-36 h-36 rounded-xl shadow-lg flex items-center justify-center select-none"
                style={{ backgroundColor: style.tileBg, color: style.text }}
                title={p.label}
              >
                <span className="text-xl font-semibold">{(p.label || "Persona").slice(0,12)}</span>
              </div>
              <div className="text-white">{p.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
