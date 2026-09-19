"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function StudioShell({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    let destroy: (() => void) | undefined;
    import("@/motion/studioMotion").then(({ studioMotion }) => {
      if (!cancelled && root.current) destroy = studioMotion(root.current);
    });
    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);
  return (
    <div className="studio" ref={root}>
      {children}
    </div>
  );
}
