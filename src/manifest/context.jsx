import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import base from "./base.json";
import { deepMerge } from "./merge";
import { getOverrides, setOverrides, clearSection } from "../state/overrides";

const ManifestCtx = createContext(null);

export function ManifestProvider({ children }) {
  const [overrides, setLocal] = useState(getOverrides());

  // rebuild manifest whenever overrides change
  const manifest = useMemo(() => deepMerge(base, overrides), [overrides]);

  // expose helpers
  const update = (patch) => {
    const next = setOverrides(patch);
    setLocal(next);
  };
  const reset = () => { clearSection(); setLocal({}); };

  // keep in sync if user edits in another tab
  useEffect(() => {
    const h = () => setLocal(getOverrides());
    window.addEventListener("storage", h);
    return () => window.removeEventListener("storage", h);
  }, []);

  return (
    <ManifestCtx.Provider value={{ manifest, overrides, update, reset }}>
      {children}
    </ManifestCtx.Provider>
  );
}

export function useManifest() {
  const ctx = useContext(ManifestCtx);
  if (!ctx) throw new Error("useManifest must be used inside <ManifestProvider>");
  return ctx;
}
