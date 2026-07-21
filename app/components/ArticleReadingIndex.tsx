"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "o-que-e-um-projeto-de-extensao", label: "O que é um projeto de extensão?" },
  { id: "producao-coletiva", label: "Produção coletiva" },
  { id: "mas-por-que-pequi", label: "Mas por que PEQUI?" },
];

export default function ArticleReadingIndex() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [supportsObserver] = useState(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return false;
    }

    return true;
  });

  useEffect(() => {
    if (!supportsObserver || typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.5, 0.8],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [supportsObserver]);

  return (
    <div className="mt-6 rounded-[1.05rem] border border-[#e8dfd0] bg-white/70 p-4 sm:mt-6">
      <h4 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
        Nesta matéria
      </h4>
      <nav aria-label="Índice da matéria" className="space-y-2">
        {sections.map((section) => {
          const isActive = supportsObserver && activeId === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-start rounded-full px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7c65] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf7] ${
                isActive
                  ? "border-l-2 border-[#0b7c65] bg-white/80 font-semibold text-[#174b8a]"
                  : "text-[#24364f] hover:bg-[#f6efe4] hover:text-[#0b2f5f]"
              }`}
            >
              <span className="mr-2 text-[#0b7c65]">•</span>
              <span>{section.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
