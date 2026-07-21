"use client";

import { useState } from "react";

type ArticleShareButtonsProps = {
  shareText?: string;
};

export default function ArticleShareButtons({ shareText }: ArticleShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl] = useState(() =>
    typeof window !== "undefined" ? window.location.href : ""
  );

  const copyLink = async () => {
    try {
      const urlToCopy = currentUrl || (typeof window !== "undefined" ? window.location.href : "");
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const shareUrl = encodeURIComponent(currentUrl || "");
  const shareMessage = encodeURIComponent(shareText || "Leia esta matéria da Revista PEQUI.");

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <a
          className="rounded-full border border-[#d8d2c4] px-4 py-2 font-semibold text-[#24364f] transition hover:border-[#0b7c65] hover:text-[#0b7c65]"
          href={`https://wa.me/?text=${shareMessage}%20${shareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="rounded-full border border-[#d8d2c4] px-4 py-2 font-semibold text-[#24364f] transition hover:border-[#0b7c65] hover:text-[#0b7c65]"
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          className="rounded-full border border-[#d8d2c4] px-4 py-2 font-semibold text-[#24364f] transition hover:border-[#0b7c65] hover:text-[#0b7c65]"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full border border-[#d8d2c4] px-4 py-2 font-semibold text-[#24364f] transition hover:border-[#0b7c65] hover:text-[#0b7c65]"
        >
          {copied ? "Link copiado" : "Copiar link"}
        </button>
      </div>
    </div>
  );
}
