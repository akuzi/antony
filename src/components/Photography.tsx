"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { photos } from "../data/photos";

function PhotoTile({
  index,
  onOpen,
}: {
  index: number;
  onOpen: (i: number) => void;
}) {
  const photo = photos[index];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative block w-full aspect-[3/2] overflow-hidden bg-[#111]"
    >
      <Image
        src={photo.src}
        alt={photo.name}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
    </motion.button>
  );
}

function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const photo = photos[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + photos.length) % photos.length),
    [index, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % photos.length),
    [index, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-10 text-white/60 hover:text-accent text-2xl leading-none transition-colors duration-200"
      >
        ✕
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/40 text-xs tracking-[0.2em]">
        {String(index + 1).padStart(2, "0")} / {photos.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="absolute left-3 md:left-6 z-10 text-white/50 hover:text-accent text-3xl md:text-4xl px-3 py-6 transition-colors duration-200"
      >
        ‹
      </button>

      {/* Image + caption */}
      <motion.div
        key={photo.src}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center"
      >
        <div className="relative w-[92vw] h-[80vh]">
          <Image
            src={photo.src}
            alt={photo.name}
            fill
            sizes="92vw"
            priority
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-heading text-text text-lg">{photo.name}</h3>
          <span className="text-muted text-[10px] tracking-[0.3em] uppercase">
            {photo.region}
          </span>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="absolute right-3 md:right-6 z-10 text-white/50 hover:text-accent text-3xl md:text-4xl px-3 py-6 transition-colors duration-200"
      >
        ›
      </button>
    </motion.div>
  );
}

export default function Photography() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const perPage = 12; // 4 rows × 3 columns on desktop
  const pageCount = Math.ceil(photos.length / perPage);
  const start = page * perPage;
  const pagePhotos = photos.slice(start, start + perPage);

  return (
    <section id="photography" className="py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Photography</div>
          <h2
            className="font-heading text-text mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Around the World
          </h2>
          <p className="text-muted text-sm max-w-xl leading-relaxed">
            I grew up reading National Geographic magazines and was drawn to the
            style of photographers like Steve McCurry, Jodi Cobb, and Annie
            Griffiths. My style is also influenced by the photojournalistic
            approach of Magnum photographers such as Alex Webb, David Seymour,
            and Eve Arnold. Most of my travel photos are taken on Fuji Velvia film.
          </p>
          <a
            href="https://pbase.com/akuzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
          >
            Browse Full Gallery <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pagePhotos.map((p, i) => (
            <PhotoTile key={p.src} index={start + i} onOpen={setOpenIndex} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-accent disabled:opacity-30 disabled:hover:text-muted transition-colors duration-300"
          >
            ← Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-accent" : "w-1.5 bg-muted/40 hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            className="text-xs tracking-[0.2em] uppercase text-muted hover:text-accent disabled:opacity-30 disabled:hover:text-muted transition-colors duration-300"
          >
            Next →
          </button>
        </div>

        <p className="text-center text-muted text-[10px] tracking-[0.25em] uppercase mt-5">
          {start + 1}–{Math.min(start + perPage, photos.length)} of {photos.length}
        </p>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={(i) => {
              setOpenIndex(i);
              setPage(Math.floor(i / perPage));
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
