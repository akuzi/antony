"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const videos = [
  { id: "YGo5L3yzXhA", title: "Soviet Elektronika MK-90 Portable Computer from 1988", year: "2026" },
  { id: "sYz6-nNNPuo", title: "Sharp PC-1211 — The first pocket computer from 1980", year: "2025" },
  { id: "uhIl-BgD1_s", title: "Casio fx-CG100 ClassWiz Calculator Review", year: "2025" },
  { id: "fBMCvktGpsE", title: "Compucorp 324G Scientist from 1973", year: "2025" },
  { id: "d7EKFHRzwcU", title: "SwissMicros DM15C and DM15L Review", year: "2025" },
  { id: "44d0LV82YmA", title: "HP 49G — Meta Kernel, Erable and ALG48", year: "2024" },
  { id: "ASZ20K0VEgQ", title: "SwissMicros DM32 Review", year: "2024" },
  { id: "U04wFOnbR5Y", title: "C47 Calculator Review", year: "2024" },
  { id: "NEIlmBphJ1k", title: "HP 48GX Graphing Calculator from 1993", year: "2024" },
  { id: "wherEqBmwL8", title: "Casio CM-100 Computer Math Calculator from 1986", year: "2024" },
  { id: "k_PGX669SiA", title: "PX-15C, PX-16C & PX-41C Calculator Kits Review", year: "2024" },
  { id: "cw7Gp2Qrmtk", title: "Sharp EL-9000 Graphing Calculator from 1986", year: "2023" },
  { id: "rPV3yDZX9z0", title: "HP 15C Collector's Edition Review", year: "2023" },
  { id: "yujtxo5efbE", title: "HP 48SX Calculator from 1990", year: "2023" },
  { id: "ZNc1uAE3uHg", title: "Casio fx-702p from 1981 — Casio's first pocket computer", year: "2023" },
];

function VideoCard({ video, index }: { video: (typeof videos)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative block bg-[#111] overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-[#888] text-xs leading-snug group-hover:text-text transition-colors duration-300 line-clamp-2">
          {video.title}
        </p>
        <span className="text-[#333] text-[10px] mt-1.5 block">{video.year}</span>
      </div>
    </motion.a>
  );
}

export default function CalculatorCulture() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="calculator-culture" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">YouTube</div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <h2
                className="font-heading text-text leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Calculator<br />Culture
              </h2>
              <div className="space-y-3 mb-8">
                {[
                  ["Before the iPhone.", false],
                  ["Before Windows.", false],
                  ["Before the personal computer.", false],
                  ["The pocket calculator was computing's first personal revolution.", true],
                ].map(([line, highlight], i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={highlight ? "font-heading italic text-text text-lg" : "text-muted text-sm"}
                  >
                    {line as string}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-muted text-sm leading-relaxed max-w-md">
                A YouTube channel tracing how devices like the HP-35 and TI-83 were the original
                personal computers — and how they shaped Silicon Valley, the PC revolution, and
                mobile computing.
              </p>
              <a
                href="https://www.youtube.com/calculatorculture"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-[#080808] transition-all duration-300 self-start"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
