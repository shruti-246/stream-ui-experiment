import { useManifest } from "../manifest/context";

export default function FrontPageStudio() {
  const { manifest, update, reset } = useManifest();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Who’s Watching — editor</h2>

      <label className="block text-sm text-gray-300 mb-1">Front page title</label>
      <input
        className="w-full max-w-xl bg-neutral-800 border border-neutral-700 rounded px-3 py-2 mb-2 outline-none"
        placeholder="Who’s Watching?"
        value={manifest.front_title || ""}
        onChange={(e) => update({ front_title: e.target.value })}
        maxLength={30}
      />
      <div className="text-xs text-gray-500 mb-6">Appears at the top of the front page. Max 30 characters.</div>

      <button className="px-3 py-2 bg-neutral-700 rounded mr-3" onClick={reset}>Reset section</button>
      <a className="px-3 py-2 bg-red-600 rounded inline-block" href="/" target="_blank" rel="noreferrer">Open preview</a>

      <div className="mt-8 text-sm text-gray-400">
        Next steps here will be: choose personas, colors, uploads.
      </div>
    </div>
  );
}
