"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const pieces = [
  {
    title: "Don Hills, New York, 2000",
    href: "/writing/don-hills-new-york-2000",
    img: "/writing/don-hills.jpeg",
    description: "Mods, models, and the last years of grit on Greenwich Street — a night at one of downtown Manhattan's defining venues.",
  },
];

function WritingCard({ piece, index }: { piece: (typeof pieces)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group relative block bg-[#0a0a0a] border border-border hover:border-accent/30 transition-colors duration-400 overflow-hidden"
    >
      <Link href={piece.href}>
        <div className="aspect-[4/3] overflow-hidden relative bg-[#111]">
          <Image
            src={piece.img}
            alt={piece.title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
        </div>
        <div className="p-3 border-t border-border">
          <span className="text-accent text-[9px] tracking-[0.2em] uppercase">Essay</span>
          <h3 className="font-heading text-[#999] text-sm mt-0.5 group-hover:text-text transition-colors duration-300">
            {piece.title}
          </h3>
          <p className="text-[#555] text-[11px] leading-relaxed mt-1.5">{piece.description}</p>
        </div>
      </Link>
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}

export default function Writing() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Words</div>
          <h2 className="font-heading text-text mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Writing
          </h2>
          <p className="text-muted text-sm max-w-xl leading-relaxed">
            Essays and observations — on places, scenes, and things that stuck.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {pieces.map((p, i) => (
            <WritingCard key={p.href} piece={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
