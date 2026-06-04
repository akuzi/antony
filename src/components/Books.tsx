"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Cover URLs with size upgraded from _SX50_/_SY75_ to _SX300_
const books = [
  {
    title: "Breath",
    author: "Tim Winton",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317792624l/2176735._SX300_.jpg",
    review: "Tim Winton doesn't waste a word. A coming-of-age story about adrenaline addiction that hits much deeper than it first appears.",
    genre: "Literary Fiction",
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1357177533l/13623848._SX300_.jpg",
    review: "A brilliant retelling — more plot-driven than Circe but compelling from start to finish.",
    genre: "Historical Fiction",
  },
  {
    title: "Disgrace",
    author: "J.M. Coetzee",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385161943l/6192._SX300_.jpg",
    review: "Post-colonial guilt and fall from grace. Coetzee is an amazing writer.",
    genre: "Literary Fiction",
  },
  {
    title: "Techgnosis",
    author: "Erik Davis",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388625540l/206998._SX300_.jpg",
    review: "A dense web of ideas — a dizzying mix of technology, mysticism, and culture. One of my favourite books.",
    genre: "Non-fiction",
  },
  {
    title: "Cloud Atlas",
    author: "David Mitchell",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563042852l/49628._SX300_.jpg",
    review: null,
    genre: "Literary Fiction",
  },
  {
    title: "East of Eden",
    author: "John Steinbeck",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639969375l/4406._SX300_.jpg",
    review: null,
    genre: "Literary Fiction",
  },
  {
    title: "Gardens of the Moon",
    author: "Steven Erikson",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SX300_.jpg",
    review: "Dense and daunting, but I found myself compulsively reading it.",
    genre: "Fantasy",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1704917687l/186074._SX300_.jpg",
    review: null,
    genre: "Fantasy",
  },
  {
    title: "Just Kids",
    author: "Patti Smith",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1259762407l/341879._SX300_.jpg",
    review: null,
    genre: "Memoir",
  },
  {
    title: "Shop Class as Soulcraft",
    author: "Matthew B. Crawford",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442839731l/6261332._SX300_.jpg",
    review: null,
    genre: "Philosophy",
  },
  {
    title: "How to Get Filthy Rich in Rising Asia",
    author: "Mohsin Hamid",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353428459l/15815364._SX300_.jpg",
    review: null,
    genre: "Literary Fiction",
  },
  {
    title: "Nine Lives",
    author: "William Dalrymple",
    rating: 5,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329136130l/6943146._SX300_.jpg",
    review: null,
    genre: "Non-fiction",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < n ? "text-accent" : "text-[#2a2a2a]"}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function BookCard({ book, index }: { book: (typeof books)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href="https://www.goodreads.com/user/show/11317709-antony-kuzmicich"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group relative block"
    >
      {/* Cover */}
      <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 16vw, 14vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-all duration-400 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
          <Stars n={book.rating} />
          <p className="text-text text-xs font-heading mt-1.5 leading-snug">{book.title}</p>
          <p className="text-muted text-[10px] mt-0.5">{book.author}</p>
          {book.review && (
            <p className="text-[#aaa] text-[10px] mt-2 leading-relaxed italic line-clamp-3">
              &ldquo;{book.review}&rdquo;
            </p>
          )}
        </div>
      </div>
      {/* Genre tag */}
      <div className="mt-2 text-[#333] text-[10px] tracking-wide truncate">{book.genre}</div>
    </motion.a>
  );
}

export default function Books() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="reading" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Reading</div>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <h2
                className="font-heading text-text mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                Books
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                I&apos;m an avid reader. Check out some of my book reviews
              </p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end">
              {[["215", "Books Read"], ["3.82", "Avg Rating"], ["75", "Reviews"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="font-heading text-text text-3xl">{val}</div>
                  <div className="text-muted text-xs tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://www.goodreads.com/user/show/11317709-antony-kuzmicich"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
          >
            View on Goodreads <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {books.map((book, i) => (
            <BookCard key={book.title} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
