"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Fills its (relatively positioned) parent. With one image it's a plain
 *  picture; with more it adds prev/next arrows and position dots. Clicking
 *  the picture opens it large, with the same controls. */
export function Carousel({
  images,
  alt,
  sizes,
  eager,
}: {
  images: string[];
  alt: string;
  sizes: string;
  eager?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const many = images.length > 1;
  const label = many ? `${alt} (${index + 1} of ${images.length})` : alt;

  useEffect(() => {
    if (!open) return;
    const step = (by: number) => setIndex((i) => (i + by + images.length) % images.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  const step = (by: number) => setIndex((index + by + images.length) % images.length);

  const controls = (
    <>
      <button type="button" aria-label="Previous image" onClick={() => step(-1)} className="carousel-arrow left-2">
        ←
      </button>
      <button type="button" aria-label="Next image" onClick={() => step(1)} className="carousel-arrow right-2">
        →
      </button>
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="carousel-dot"
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        aria-label={`Enlarge: ${label}`}
        onClick={() => setOpen(true)}
        className="absolute inset-0 cursor-zoom-in"
      >
        <Image
          key={images[index]}
          src={images[index]}
          alt={label}
          fill
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          className="object-cover"
        />
      </button>
      {many && controls}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="carousel-lightbox"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
            <Image key={images[index]} src={images[index]} alt={label} fill sizes="100vw" className="object-contain" />
            {many && controls}
            <button
              type="button"
              aria-label="Close"
              autoFocus
              onClick={() => setOpen(false)}
              className="carousel-arrow right-2 top-6!"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
