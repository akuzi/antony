"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Layered dark background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a86c 1px, transparent 1px), linear-gradient(90deg, #c9a86c 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a86c]/[0.025] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a86c]/[0.015] blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-xs tracking-[0.35em] uppercase mb-8"
        >
          antony.akuzi.org
        </motion.div>

        <div className="flex items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading leading-[1.05] text-text mb-14"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              Antony
              <br />
              <span className="text-accent">Kuzmicich</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-[#080808] transition-all duration-300"
              >
                Explore Work
              </button>
              <button
                onClick={() => document.querySelector("#photography")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 text-muted text-xs tracking-[0.2em] uppercase hover:text-text transition-colors duration-300"
              >
                View Photos
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block flex-shrink-0"
          >
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-accent/20">
              <Image
                src="/profile.jpg"
                alt="Antony Kuzmicich"
                fill
                sizes="(max-width: 768px) 0px, (max-width: 1024px) 224px, 288px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[#333] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent"
        />
      </motion.div>
    </section>
  );
}
