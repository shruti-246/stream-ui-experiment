export default function StudioGate({ enabled, children }) {
  if (!enabled) return <div className="min-h-screen bg-black text-white p-8">Studio disabled.</div>;
  return children;
}
