"use client";

import { useState } from "react";

/** Shows the video's thumbnail and only loads YouTube's player (from the
 *  no-cookie domain) once someone presses play. */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video border overflow-hidden" style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
        >
          <span
            aria-hidden
            className="flex h-14 w-14 items-center justify-center rounded-full border text-lg transition-transform group-hover:scale-105"
            style={{ borderColor: "var(--paper)", background: "rgba(0, 0, 0, 0.75)", boxShadow: "none" }}
          >
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
