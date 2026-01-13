"use client";

import { useEffect, useRef, type RefObject } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
};

const projects: Project[] = [
  { id: 1, title: "Projet A", description: "Description courte du projet A." },
  { id: 2, title: "Projet B", description: "Description courte du projet B." },
  { id: 3, title: "Projet C", description: "Description courte du projet C." },
  { id: 4, title: "Projet D", description: "Description courte du projet D." },
  { id: 5, title: "Projet E", description: "Description courte du projet E." },
  { id: 6, title: "Projet F", description: "Description courte du projet E." },
  { id: 7, title: "Projet G", description: "Description courte du projet E." },
  { id: 8, title: "Projet H", description: "Description courte du projet E." },
  { id: 9, title: "Projet J", description: "Description courte du projet E." },
];

function useCenterScale(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLDivElement>("[data-card]")
    );

    const updateScales = () => {
      const rect = container.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;

      // Distance at which scale reaches its minimum
      const influenceRadius = Math.max(320, rect.width * 0.45);
      const minScale = 0.9;
      const maxScale = 1.1;

      for (const card of cards) {
        const cr = card.getBoundingClientRect();
        const cardCenterX = cr.left + cr.width / 2;
        const distance = Math.abs(cardCenterX - containerCenterX);
        const t = Math.min(distance / influenceRadius, 1);
        const scale = maxScale - t * (maxScale - minScale);
        card.style.transform = `scale(${scale.toFixed(3)})`;
        card.style.zIndex = String(Math.round((scale - minScale) * 1000));
      }
    };

    updateScales();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScales();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScales);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScales);
    };
  }, [containerRef]);
}

export default function ProjetsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useCenterScale(containerRef);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Mes projets</h1>

        <div
          ref={containerRef}
          className="relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-6 sm:gap-8 px-4 sm:px-8 py-8 -mx-4 sm:-mx-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              data-card
              className="snap-center shrink-0 w-[70vw] sm:w-[360px] md:w-[420px] aspect-[4/5] bg-white/90 dark:bg-black/40 border border-black/10 dark:border-white/15 rounded-2xl shadow-sm backdrop-blur-sm transition-transform duration-200 ease-out origin-center"
            >
              <div className="h-full w-full p-5 flex flex-col">
                <div className="h-40 w-full rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-black/10 dark:border-white/10" />
                <h2 className="mt-4 text-lg font-medium">{p.title}</h2>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                  {p.description}
                </p>
                <div className="mt-auto pt-4">
                  <button className="inline-flex items-center justify-center h-10 px-4 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity text-sm">
                    Voir le projet
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer so last card can center */}
          <div className="shrink-0 w-[10vw]" />
        </div>

        <p className="mt-4 text-sm text-black/60 dark:text-white/60">
          Faites défiler horizontalement. La carte au centre s’agrandit.
        </p>
      </div>
    </div>

    
  );
}


