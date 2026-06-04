"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const galleries = [
  { name: "Nepal", region: "Asia", href: "https://pbase.com/akuzi/nepal", img: "https://a4.pbase.com/g3/87/425687/3/56700054.nepal10.jpg" },
  { name: "Tibet", region: "Asia", href: "https://pbase.com/akuzi/tibet", img: "https://a4.pbase.com/g3/87/425687/3/56707864.tibet35.jpg" },
  { name: "Iran", region: "Middle East", href: "https://pbase.com/akuzi/iran", img: "https://a4.pbase.com/g1/87/425687/3/129355777.wD225DTC.jpg" },
  { name: "Easter Island", region: "Pacific", href: "https://pbase.com/akuzi/rapanui", img: "https://a4.pbase.com/g1/87/425687/3/129866747.7WEUBheO.jpg" },
  { name: "Ethiopia", region: "Africa", href: "https://pbase.com/akuzi/ethiopia", img: "https://a4.pbase.com/g3/87/425687/3/123819317.1hUMmk7y.jpg" },
  { name: "Myanmar", region: "Asia", href: "https://pbase.com/akuzi/myanmar", img: "https://a4.pbase.com/g1/87/425687/3/130231271.bZ4cc33a.jpg" },
  { name: "Iceland", region: "Europe", href: "https://pbase.com/akuzi/iceland", img: "https://a4.pbase.com/g1/87/425687/3/129589669.oA1CBtZJ.jpg" },
  { name: "Burning Man", region: "Nevada, USA", href: "https://pbase.com/akuzi/bm2003", img: "https://a4.pbase.com/v3/87/425687/3/47705846.bm4.jpg" },
  { name: "French Polynesia", region: "Pacific", href: "https://pbase.com/akuzi/fp", img: "https://a4.pbase.com/g1/87/425687/3/130502638.sKGNfPbb.jpg" },
  { name: "Sri Lanka", region: "Asia", href: "https://pbase.com/akuzi/sri_lanka", img: "https://a4.pbase.com/g3/87/425687/3/122149606.aSHlksrB.jpg" },
  { name: "Croatia", region: "Europe", href: "https://pbase.com/akuzi/croatia", img: "https://a4.pbase.com/g1/87/425687/3/127370609.0RlBZHtU.jpg" },
  { name: "East Africa", region: "Africa", href: "https://pbase.com/akuzi/east_africa", img: "https://a4.pbase.com/g3/87/425687/3/123824524.Cy3NRs3n.jpg" },
  { name: "India", region: "Asia", href: "https://pbase.com/akuzi/india", img: "https://a4.pbase.com/g3/87/425687/3/56710404.india13.jpg" },
  { name: "Galápagos", region: "Pacific", href: "https://pbase.com/akuzi/galapagos", img: "https://a4.pbase.com/g9/87/425687/3/150343998.xohvxlfW.jpg" },
  { name: "Maldives", region: "Indian Ocean", href: "https://pbase.com/akuzi/maldives", img: "https://a4.pbase.com/g3/87/425687/3/122611252.0kWb9MtR.jpg" },
  { name: "Former Soviet Union", region: "Eurasia", href: "https://pbase.com/akuzi/fsu", img: "https://a4.pbase.com/g1/87/425687/3/128834785.niJcDCVw.jpg" },
  { name: "Boracay", region: "Asia", href: "https://pbase.com/akuzi/boracay", img: "https://a4.pbase.com/g3/87/425687/3/119686449.Jx1GGKp0.jpg" },
  { name: "Goa", region: "Asia", href: "https://pbase.com/akuzi/goa", img: "https://a4.pbase.com/g1/87/425687/3/130866730.rAN91aCn.jpg" },
  { name: "South India", region: "Asia", href: "https://pbase.com/akuzi/south_india", img: "https://a4.pbase.com/g3/87/425687/3/121490565.3xWp3AxO.jpg" },
  { name: "New York", region: "USA", href: "https://pbase.com/akuzi/ny", img: "https://a4.pbase.com/u23/akuzi/medium/33109130.sn002.jpg" },
];

function GalleryCard({ gallery, index }: { gallery: (typeof galleries)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={gallery.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: "easeOut" }}
      className="group relative aspect-[4/3] overflow-hidden block bg-[#111]"
    >
      <Image
        src={gallery.img}
        alt={gallery.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Persistent dark gradient at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      {/* Hover tint */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">{gallery.region}</span>
        <div>
          <h3 className="font-heading text-white text-lg drop-shadow group-hover:text-accent transition-colors duration-300">
            {gallery.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <div className="h-px w-5 bg-accent" />
            <span className="text-accent text-[10px] tracking-[0.2em] uppercase">View Gallery</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Photography() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

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
            Some travel images, largely shot on Fuji Velvia film
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {galleries.map((g, i) => (
            <GalleryCard key={g.href} gallery={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
