"use client";
import { useEffect } from "react";

export default function HaloBackground() {
  useEffect(() => {
    const halo = document.createElement("div");
    halo.className = "halo-bg";
    document.body.appendChild(halo);

    const handleMouseMove = (e: MouseEvent) => {
      halo.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.1), transparent 60%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      halo.remove();
    };
  }, []);

  return null; // pas besoin de JSX
}
