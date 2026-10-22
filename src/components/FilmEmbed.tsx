"use client";

import { useRef } from "react";

/** Plays a self-contained HTML film in a 16:9 frame, with a button that
 *  makes the frame full screen (or opens the film in a new tab on browsers
 *  that can't, like iPhone Safari). */
export function FilmEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  const enlarge = () => {
    const openTab = () => window.open(src, "_blank", "noopener");
    const frame = ref.current;
    if (frame?.requestFullscreen) frame.requestFullscreen().catch(openTab);
    else openTab();
  };

  return (
    <div className="relative aspect-video border overflow-hidden" style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}>
      <iframe ref={ref} src={src} title={title} loading="lazy" allowFullScreen className="absolute inset-0 h-full w-full" />
      <button
        type="button"
        onClick={enlarge}
        aria-label={`Play full screen: ${title}`}
        title="Full screen"
        className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-md border cursor-pointer transition-transform hover:scale-105"
        style={{ borderColor: "var(--line-strong)", background: "rgba(0, 0, 0, 0.75)", color: "var(--paper)" }}
      >
        <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
        </svg>
      </button>
    </div>
  );
}
