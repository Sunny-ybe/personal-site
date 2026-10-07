"use client";

import { useEffect, useRef, useState } from "react";

// Stars are laid out once on a fixed virtual field (seeded, so the sky is
// identical on every load) and the viewport shows a window onto it.
const FIELD_W = 2560;
const FIELD_H = 1600;
const DUST_COUNT = 10350;
const STAR_COUNT = 1265;

// [r, g, b] tints: white, cool blue-white, warm orange.
const WHITE = [255, 255, 255];
const COOL = [150, 200, 255];
const WARM = [255, 160, 95];

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function draw(canvas: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "lighter";

  const rand = mulberry32(11);
  const tint = () => {
    const t = rand();
    return t < 0.45 ? COOL : t < 0.75 ? WHITE : WARM;
  };
  const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  // Faint pin-point dust: most of it barely visible, which is what gives depth.
  for (let i = 0; i < DUST_COUNT; i++) {
    const x = rand() * FIELD_W;
    const y = rand() * FIELD_H;
    const c = tint();
    const a = 0.2 + 0.8 * rand() ** 2.2;
    const r = 0.35 + 0.5 * rand();
    if (x > w || y > h) continue;
    ctx.fillStyle = rgba(c, a);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Proper stars: a white-hot core that falls off into a soft tinted halo.
  for (let i = 0; i < STAR_COUNT; i++) {
    const x = rand() * FIELD_W;
    const y = rand() * FIELD_H;
    const c = tint();
    const size = rand() ** 2.4; // few large, many small
    const core = 0.7 + 1.5 * size;
    const halo = core * (4 + 3 * size);
    if (x > w + halo || y > h + halo) continue;

    const g = ctx.createRadialGradient(x, y, 0, x, y, halo);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop((core / halo) * 0.8, "rgba(255,255,255,0.95)");
    g.addColorStop((core / halo) * 1.5, rgba(c, 0.45));
    g.addColorStop(0.45, rgba(c, 0.07 + 0.08 * size));
    g.addColorStop(1, rgba(c, 0));
    ctx.fillStyle = g;
    ctx.fillRect(x - halo, y - halo, halo * 2, halo * 2);

    // The very brightest get faint diffraction spikes.
    if (size > 0.9) {
      const len = halo * 1.8;
      for (const [dx, dy] of [[1, 0], [0, 1]]) {
        const s = ctx.createLinearGradient(x - dx * len, y - dy * len, x + dx * len, y + dy * len);
        s.addColorStop(0, rgba(c, 0));
        s.addColorStop(0.5, rgba(c, 0.2));
        s.addColorStop(1, rgba(c, 0));
        ctx.fillStyle = s;
        ctx.fillRect(x - (dx * len + dy * 0.4), y - (dy * len + dx * 0.4), dx * len * 2 + dy * 0.8, dy * len * 2 + dx * 0.8);
      }
    }
  }
}

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const redraw = () => draw(canvas);
    redraw();
    window.addEventListener("resize", redraw);
    return () => window.removeEventListener("resize", redraw);
  }, []);

  return (
    <>
      <canvas
        ref={ref}
        aria-hidden
        className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
        style={{ visibility: on ? "visible" : "hidden" }}
      />
      <button
        type="button"
        aria-pressed={on}
        onClick={() => setOn(!on)}
        className="chip fixed bottom-5 left-5 z-10 cursor-pointer"
        style={{ background: "var(--ink)", color: "var(--paper)" }}
      >
        Stars: {on ? "on" : "off"}
      </button>
    </>
  );
}
