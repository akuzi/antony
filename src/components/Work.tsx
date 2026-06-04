"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const founded = [
  {
    name: "Performio",
    logo: "/logos/performio.png",
    logoWide: false,
    url: "https://performio.co",
    role: "Founding CTO",
    description: "Sales performance management & incentive compensation platform — helping revenue teams design, manage, and automate commission plans at scale.",
    tags: ["SaaS", "Sales Tech", "B2B"],
  },
  {
    name: "Lasoo",
    logo: "/logos/lasoo-icon.png",
    logoWide: false,
    url: "https://www.lasoohabits.com",
    role: "Founder",
    description: "Workplace habit-building platform helping employees form better routines and supporting learning, coaching, and performance initiatives.",
    tags: ["HR Tech", "SaaS", "B2B"],
  },
];

const experience = [
  { name: "Verizon",           logo: "/logos/verizon.jpeg",     wide: false },
  { name: "KPN",               logo: null,                      wide: false },
  { name: "Deutsche Bank",     logo: "/logos/deutschebank.png", wide: false },
  { name: "Emirates NBD",      logo: "/logos/emiratesnbd.png",  wide: false },
  { name: "TSYS Prepaid",      logo: "/logos/tsys.svg",         wide: false },
  { name: "Culture Amp",       logo: "/logos/cultureamp.webp",  wide: false },
  { name: "realestate.com.au", logo: "/logos/rea.png",          wide: false },
];

function Initials({ name, size = 44 }: { name: string; size?: number }) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      className="flex items-center justify-center bg-[#1a1a1a] border border-border text-[#555] text-xs font-mono tracking-wider shrink-0"
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
}

function FoundedCard({ co, index }: { co: (typeof founded)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const Tag = co.url ? motion.a : motion.div;
  const linkProps = co.url ? { href: co.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag
      ref={ref}
      {...linkProps}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group relative block bg-[#0a0a0a] border border-border hover:border-accent/30 transition-colors duration-400 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] overflow-hidden relative bg-[#111]">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {co.logo ? (
            <div className="relative w-full h-full">
              <Image
                src={co.logo}
                alt={co.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
            </div>
          ) : (
            <Initials name={co.name} size={64} />
          )}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
      </div>

      {/* Info panel */}
      <div className="p-3 border-t border-border">
        <span className="text-accent text-[9px] tracking-[0.2em] uppercase">{co.role}</span>
        <h3 className="font-heading text-[#999] text-sm mt-0.5 group-hover:text-text transition-colors duration-300">
          {co.name}
        </h3>
        <p className="text-[#555] text-[11px] leading-relaxed mt-1.5">{co.description}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </Tag>
  );
}

function OtherBrandsCard({ index }: { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const logos = experience.filter(co => co.logo);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group relative block bg-[#0a0a0a] border border-border hover:border-accent/30 transition-colors duration-400 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] overflow-hidden relative bg-black">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 p-4 content-center">
          {logos.map(co => (
            <div key={co.name} className="flex flex-col items-center gap-1 shrink-0">
              <div className="relative w-12 h-7">
                <Image
                  src={co.logo!}
                  alt={co.name}
                  fill
                  sizes="48px"
                  className="object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-400"
                />
              </div>
              <span className="text-[#555] text-[7px] tracking-wide text-center leading-tight w-14 truncate group-hover:text-[#777] transition-colors duration-400">
                {co.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
      </div>

      {/* Info panel */}
      <div className="p-3 border-t border-border">
        <span className="text-accent text-[9px] tracking-[0.2em] uppercase">Experience</span>
        <h3 className="font-heading text-[#999] text-sm mt-0.5 group-hover:text-text transition-colors duration-300">
          Other Brands
        </h3>
        <p className="text-[#555] text-[11px] leading-relaxed mt-1.5">
          Enterprise and scale-up brands spanning telco, fintech, and tech — from Sydney to Dubai to San Francisco.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}

export default function Work() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Professional</div>
          <h2 className="font-heading text-text mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Work
          </h2>
          <p className="text-muted text-sm max-w-xl leading-relaxed">
            A career spanning enterprise software, fintech, media, and SaaS — building products
            across product strategy, backend engineering, and data & AI.
          </p>
          <a
            href="https://www.linkedin.com/in/akuzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
          >
            View LinkedIn Profile <span>→</span>
          </a>
        </motion.div>

        {/* Founded + Other Brands */}
        <div>
          <div className="text-[#333] text-xs tracking-[0.3em] uppercase mb-8">Work</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {founded.map((co, i) => (
              <FoundedCard key={co.name} co={co} index={i} />
            ))}
            <OtherBrandsCard index={founded.length} />
          </div>
        </div>

      </div>
    </section>
  );
}
