"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const experiments = [
  {
    num: "01",
    title: "Musical Cells",
    href: "https://vibes.akuzi.org/experiments/cells",
    img: "/vibes/musical-cells.png",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="cells-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#0a2a1a" />
            <stop offset="100%" stopColor="#040d07" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#cells-bg)" />
        {/* Grid of living cells */}
        {[0,1,2,3,4,5,6,7].map(col =>
          [0,1,2,3,4,5].map(row => {
            const alive = (col * 3 + row * 7 + col * row) % 5 < 2;
            return alive ? (
              <rect
                key={`${col}-${row}`}
                x={col * 20 + 4}
                y={row * 20 + 4}
                width="14"
                height="14"
                fill="#3abf7a"
                fillOpacity={(0.3 + (col + row) % 4 * 0.18).toString()}
                rx="1"
              />
            ) : null;
          })
        )}
        <text x="80" y="108" textAnchor="middle" fill="#1a5a3a" fontSize="8" fontFamily="monospace">MUSICAL CELLS</text>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Polish Notation Calculator",
    href: "https://vibes.akuzi.org/experiments/pncalc",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="pnc-bg" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#1a1200" />
            <stop offset="100%" stopColor="#0a0800" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#pnc-bg)" />
        {/* Display */}
        <rect x="10" y="10" width="140" height="40" fill="#0d0900" stroke="#c9a86c" strokeWidth="0.5" strokeOpacity="0.4" rx="2" />
        <text x="140" y="36" textAnchor="end" fill="#c9a86c" fontSize="18" fontFamily="monospace" fontWeight="bold">3.14159</text>
        <text x="14" y="26" fill="#5a4a20" fontSize="7" fontFamily="monospace">RPN</text>
        {/* Stack display */}
        <text x="14" y="68" fill="#7a6030" fontSize="9" fontFamily="monospace">+ × ÷ − √ ^</text>
        <text x="14" y="82" fill="#5a4520" fontSize="9" fontFamily="monospace">3  4  +  2  ×</text>
        {/* Keys */}
        {[0,1,2,3].map(i => (
          <rect key={i} x={14 + i * 34} y={92} width="28" height="20" fill="#111000" stroke="#3a2a00" strokeWidth="0.5" rx="2" />
        ))}
        <text x="28" y="106" textAnchor="middle" fill="#c9a86c" fontSize="9" fontFamily="monospace">ENT</text>
        <text x="62" y="106" textAnchor="middle" fill="#7a6030" fontSize="9" fontFamily="monospace">+</text>
        <text x="96" y="106" textAnchor="middle" fill="#7a6030" fontSize="9" fontFamily="monospace">×</text>
        <text x="130" y="106" textAnchor="middle" fill="#7a6030" fontSize="9" fontFamily="monospace">CL</text>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Pretzl Programming Language",
    href: "https://vibes.akuzi.org/experiments/pretzl",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="pretzl-bg" cx="50%" cy="0%">
            <stop offset="0%" stopColor="#120a20" />
            <stop offset="100%" stopColor="#070410" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#pretzl-bg)" />
        <text x="10" y="28" fill="#9b59b6" fontSize="9" fontFamily="monospace">fn <tspan fill="#7ec8e3">greet</tspan>(name) {"{"}</text>
        <text x="20" y="42" fill="#c0c0c0" fontSize="9" fontFamily="monospace">let msg = <tspan fill="#a8d8a8">"hello"</tspan></text>
        <text x="20" y="56" fill="#c0c0c0" fontSize="9" fontFamily="monospace">+ <tspan fill="#7ec8e3">name</tspan></text>
        <text x="20" y="70" fill="#9b59b6" fontSize="9" fontFamily="monospace">return <tspan fill="#7ec8e3">msg</tspan></text>
        <text x="10" y="84" fill="#9b59b6" fontSize="9" fontFamily="monospace">{"}"}</text>
        <text x="10" y="100" fill="#5a4a80" fontSize="9" fontFamily="monospace">{">"} <tspan fill="#c0c0c0">greet</tspan>(<tspan fill="#a8d8a8">"world"</tspan>)</text>
        <text x="10" y="114" fill="#a8d8a8" fontSize="9" fontFamily="monospace">hello world</text>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Dialectica",
    href: "https://vibes.akuzi.org/experiments/dialectica",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <linearGradient id="dial-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0e14" />
            <stop offset="100%" stopColor="#08080c" />
          </linearGradient>
        </defs>
        <rect width="160" height="120" fill="url(#dial-bg)" />
        {/* Thesis bubble */}
        <rect x="8" y="10" width="90" height="34" rx="4" fill="#0e1622" stroke="#2a4a7a" strokeWidth="0.8" />
        <text x="16" y="24" fill="#6a9ad4" fontSize="7" fontFamily="sans-serif">Thesis: The calculator</text>
        <text x="16" y="36" fill="#6a9ad4" fontSize="7" fontFamily="sans-serif">preceded the PC.</text>
        {/* Antithesis bubble */}
        <rect x="62" y="54" width="90" height="34" rx="4" fill="#1a0e12" stroke="#7a2a4a" strokeWidth="0.8" />
        <text x="70" y="68" fill="#d46a8a" fontSize="7" fontFamily="sans-serif">Antithesis: The PC was</text>
        <text x="70" y="80" fill="#d46a8a" fontSize="7" fontFamily="sans-serif">a different invention.</text>
        {/* Synthesis */}
        <rect x="32" y="98" width="96" height="16" rx="3" fill="#0e140e" stroke="#2a7a4a" strokeWidth="0.8" />
        <text x="80" y="110" textAnchor="middle" fill="#4ab47a" fontSize="7" fontFamily="sans-serif">Synthesis: Both shaped computing.</text>
        {/* Arrows */}
        <line x1="53" y1="44" x2="80" y2="54" stroke="#444" strokeWidth="0.8" strokeDasharray="3,2" />
        <line x1="80" y1="88" x2="72" y2="98" stroke="#444" strokeWidth="0.8" strokeDasharray="3,2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Gas Giant",
    href: "https://vibes.akuzi.org/experiments/gasgiant",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="space-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#04080f" />
            <stop offset="100%" stopColor="#020408" />
          </radialGradient>
          <radialGradient id="planet-grad" cx="38%" cy="35%">
            <stop offset="0%" stopColor="#b8701a" />
            <stop offset="40%" stopColor="#7a3a08" />
            <stop offset="100%" stopColor="#3a1804" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#space-bg)" />
        {/* Stars */}
        {[[20,15],[50,8],[90,20],[130,10],[150,35],[10,55],[140,70],[30,90],[110,85]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="0.8" fill="white" fillOpacity="0.6" />
        ))}
        {/* Rings */}
        <ellipse cx="80" cy="62" rx="62" ry="12" fill="none" stroke="#a06820" strokeWidth="5" strokeOpacity="0.3" />
        <ellipse cx="80" cy="62" rx="56" ry="10" fill="none" stroke="#c08830" strokeWidth="3" strokeOpacity="0.2" />
        {/* Planet */}
        <circle cx="80" cy="60" r="34" fill="url(#planet-grad)" />
        {/* Atmospheric bands */}
        {[48,56,64,72].map((y, i) => (
          <ellipse key={i} cx="80" cy={y} rx={Math.sqrt(34*34 - (y-60)*(y-60)) * 0.95} ry="2.5"
            fill={i % 2 === 0 ? "#c88a30" : "#5a2808"} fillOpacity="0.25" />
        ))}
        {/* Ring overlay (in front of planet bottom) */}
        <ellipse cx="80" cy="62" rx="62" ry="12" fill="none" stroke="#a06820" strokeWidth="5" strokeOpacity="0.15"
          style={{ clipPath: "inset(50% 0 0 0)" }} />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Sokoban Solver",
    href: "https://vibes.akuzi.org/experiments/sokoban",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <linearGradient id="sok-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#120800" />
            <stop offset="100%" stopColor="#0a0500" />
          </linearGradient>
        </defs>
        <rect width="160" height="120" fill="url(#sok-bg)" />
        {/* Grid */}
        {Array.from({length: 8}, (_, col) =>
          Array.from({length: 6}, (_, row) => {
            const layout = [
              [1,1,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,1],
              [1,0,2,0,3,0,0,1],
              [1,0,0,4,0,3,0,1],
              [1,0,0,0,2,0,0,1],
              [1,1,1,1,1,1,1,1],
            ];
            const cell = layout[row]?.[col] ?? 0;
            const x = col * 20 + 2;
            const y = row * 20 + 2;
            if (cell === 1) return <rect key={`${col}-${row}`} x={x} y={y} width="18" height="18" fill="#2a1800" stroke="#3a2200" strokeWidth="0.5" rx="1" />;
            if (cell === 2) return <rect key={`${col}-${row}`} x={x+2} y={y+2} width="14" height="14" fill="#c07020" fillOpacity="0.8" rx="2" />;
            if (cell === 3) return <circle key={`${col}-${row}`} cx={x+9} cy={y+9} r="4" fill="none" stroke="#4a8a4a" strokeWidth="1.5" />;
            if (cell === 4) return <rect key={`${col}-${row}`} x={x+3} y={y+3} width="12" height="12" fill="#4a7a9a" fillOpacity="0.9" rx="2" />;
            return <rect key={`${col}-${row}`} x={x} y={y} width="18" height="18" fill="#0e0600" />;
          })
        )}
        <text x="80" y="116" textAnchor="middle" fill="#3a2200" fontSize="7" fontFamily="monospace">SOLVED IN 12 MOVES</text>
      </svg>
    ),
  },
  {
    num: "07",
    title: "Voxel World",
    href: "https://vibes.akuzi.org/experiments/voxel",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#060e18" />
            <stop offset="100%" stopColor="#040810" />
          </linearGradient>
        </defs>
        <rect width="160" height="120" fill="url(#sky-grad)" />
        {/* Isometric voxels - ground layer */}
        {[
          {x:80,y:85,c:"#2a5a2a",d:"#1a3a1a",r:"#3a7a3a"},
          {x:60,y:78,c:"#2a5a2a",d:"#1a3a1a",r:"#3a7a3a"},
          {x:100,y:78,c:"#8a6a3a",d:"#5a4020",r:"#a8803a"},
          {x:80,y:71,c:"#2a5a2a",d:"#1a3a1a",r:"#3a7a3a"},
          {x:40,y:71,c:"#2a5a2a",d:"#1a3a1a",r:"#3a7a3a"},
          {x:120,y:71,c:"#2a5a2a",d:"#1a3a1a",r:"#3a7a3a"},
          // Tall tower
          {x:100,y:64,c:"#8a6a3a",d:"#5a4020",r:"#a8803a"},
          {x:100,y:50,c:"#8a6a3a",d:"#5a4020",r:"#a8803a"},
          {x:100,y:36,c:"#c9a86c",d:"#8a6030",r:"#d4b87a"},
          // Water
          {x:60,y:92,c:"#1a3a5a",d:"#0a2030",r:"#2a5a8a"},
          {x:80,y:99,c:"#1a3a5a",d:"#0a2030",r:"#2a5a8a"},
        ].map(({x,y,c,d,r},i) => (
          <g key={i}>
            <polygon points={`${x},${y-10} ${x+18},${y-5} ${x+18},${y+5} ${x},${y} `} fill={c} />
            <polygon points={`${x},${y} ${x+18},${y+5} ${x+18},${y+15} ${x},${y+10}`} fill={d} />
            <polygon points={`${x},${y-10} ${x-18},${y-5} ${x-18},${y+5} ${x},${y}`} fill={r} />
          </g>
        ))}
      </svg>
    ),
  },
  {
    num: "08",
    title: "AI Voice Chat + Emotion Detection",
    href: "https://vibes.akuzi.org/experiments/voice-chat",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="voice-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#041414" />
            <stop offset="100%" stopColor="#020808" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#voice-bg)" />
        {/* Face outline */}
        <circle cx="80" cy="52" r="30" fill="none" stroke="#1a4a4a" strokeWidth="0.8" />
        <circle cx="80" cy="52" r="22" fill="#060e0e" stroke="#2a6a6a" strokeWidth="0.5" />
        {/* Eyes */}
        <circle cx="72" cy="48" r="4" fill="none" stroke="#3abfbf" strokeWidth="1" />
        <circle cx="72" cy="48" r="1.5" fill="#3abfbf" />
        <circle cx="88" cy="48" r="4" fill="none" stroke="#3abfbf" strokeWidth="1" />
        <circle cx="88" cy="48" r="1.5" fill="#3abfbf" />
        {/* Smile arc (happy emotion) */}
        <path d="M 70 58 Q 80 66 90 58" fill="none" stroke="#3abfbf" strokeWidth="1.5" strokeLinecap="round" />
        {/* Emotion label */}
        <rect x="55" y="78" width="50" height="12" rx="6" fill="#0a2a2a" stroke="#2a8a8a" strokeWidth="0.5" />
        <text x="80" y="88" textAnchor="middle" fill="#3abfbf" fontSize="7" fontFamily="monospace">HAPPY 94%</text>
        {/* Waveform at bottom */}
        {[-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i, idx) => {
          const h = Math.abs(Math.sin(i * 0.8)) * 10 + 2;
          return <rect key={idx} x={20 + idx * 6} y={105 - h/2} width="4" height={h} fill="#1a5a5a" rx="1" />;
        })}
      </svg>
    ),
  },
  {
    num: "09",
    title: "Speaking Avatar",
    href: "https://vibes.akuzi.org/experiments/speaking-avatar",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="avatar-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#08101e" />
            <stop offset="100%" stopColor="#030508" />
          </radialGradient>
          <radialGradient id="avatar-face" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#3a5a8a" />
            <stop offset="100%" stopColor="#1a2a4a" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#avatar-bg)" />
        {/* Ripple rings */}
        {[44,52,60].map((r, i) => (
          <circle key={i} cx="80" cy="55" r={r} fill="none" stroke="#2a4a8a" strokeWidth="0.6" strokeOpacity={(0.5 - i*0.15).toString()} />
        ))}
        {/* Avatar circle */}
        <circle cx="80" cy="55" r="34" fill="url(#avatar-face)" />
        {/* Face */}
        <ellipse cx="72" cy="50" rx="4" ry="5" fill="#5a8abf" fillOpacity="0.7" />
        <ellipse cx="88" cy="50" rx="4" ry="5" fill="#5a8abf" fillOpacity="0.7" />
        {/* Animated mouth bars */}
        {[70,76,82,88,94].map((x, i) => {
          const h = [8,14,6,12,8][i];
          return <rect key={i} x={x} y={62 - h/2} width="4" height={h} fill="#7ab0e8" fillOpacity="0.8" rx="2" />;
        })}
        {/* Sound waves emanating */}
        <path d="M 24 55 Q 18 45 24 35" fill="none" stroke="#2a4a8a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 16 58 Q 6 45 16 30" fill="none" stroke="#2a4a8a" strokeWidth="1" strokeLinecap="round" />
        <path d="M 136 55 Q 142 45 136 35" fill="none" stroke="#2a4a8a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 144 58 Q 154 45 144 30" fill="none" stroke="#2a4a8a" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Crochet Simulator",
    href: "https://vibes.akuzi.org/experiments/crochet",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <pattern id="stitch" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="5" fill="none" stroke="#8a3a6a" strokeWidth="1.2" />
            <circle cx="8" cy="8" r="2" fill="#6a2a4a" />
            <line x1="0" y1="8" x2="3" y2="8" stroke="#8a3a6a" strokeWidth="1" />
            <line x1="13" y1="8" x2="16" y2="8" stroke="#8a3a6a" strokeWidth="1" />
            <line x1="8" y1="0" x2="8" y2="3" stroke="#8a3a6a" strokeWidth="1" />
            <line x1="8" y1="13" x2="8" y2="16" stroke="#8a3a6a" strokeWidth="1" />
          </pattern>
          <radialGradient id="crochet-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#180a12" />
            <stop offset="100%" stopColor="#0a0408" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#crochet-bg)" />
        <rect width="160" height="120" fill="url(#stitch)" fillOpacity="0.9" />
        {/* Yarn strand */}
        <path d="M 10 100 Q 40 80 60 95 Q 80 110 100 90 Q 120 70 150 85"
          fill="none" stroke="#d4609a" strokeWidth="2" strokeLinecap="round" />
        <path d="M 10 90 Q 35 70 55 85 Q 75 100 95 82 Q 115 65 150 78"
          fill="none" stroke="#e870aa" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "11",
    title: "Pokemon Catch",
    href: "https://vibes.akuzi.org/experiments/pokemon",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="poke-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#0f0f0f" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#poke-bg)" />
        {/* Pokeball */}
        <circle cx="80" cy="58" r="42" fill="#c0281e" />
        <rect x="38" y="55" width="84" height="6" fill="#111" />
        <circle cx="80" cy="58" r="42" fill="none" stroke="#111" strokeWidth="3" />
        {/* Bottom white half */}
        <path d="M 38 58 A 42 42 0 0 0 122 58 Z" fill="#e8e8e8" />
        {/* Center button */}
        <circle cx="80" cy="58" r="12" fill="#111" stroke="#111" strokeWidth="2" />
        <circle cx="80" cy="58" r="8" fill="#f0f0f0" />
        <circle cx="80" cy="58" r="4" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
        {/* Shine */}
        <circle cx="66" cy="44" r="6" fill="white" fillOpacity="0.15" />
        {/* Stars / catch effect */}
        {[[130,20],[140,40],[20,30],[15,70],[145,80]].map(([x,y],i) => (
          <text key={i} x={x} y={y} fill="#c9a86c" fontSize="10" textAnchor="middle" fillOpacity="0.5">★</text>
        ))}
      </svg>
    ),
  },
  {
    num: "12",
    title: "Neuroimaging Viewer",
    href: "https://vibes.akuzi.org/experiments/nifti-viewer",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <radialGradient id="neuro-bg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#120404" />
            <stop offset="100%" stopColor="#060202" />
          </radialGradient>
          <radialGradient id="brain-glow" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#d44a2a" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#8a2010" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="160" height="120" fill="url(#neuro-bg)" />
        {/* Brain scan slices */}
        <ellipse cx="80" cy="56" rx="46" ry="38" fill="#1a0a08" stroke="#5a1a10" strokeWidth="0.5" />
        <ellipse cx="80" cy="56" rx="38" ry="30" fill="url(#brain-glow)" />
        {/* Brain folds */}
        <path d="M 46 50 Q 56 40 66 50 Q 70 56 80 52 Q 90 48 96 56 Q 100 64 110 58 Q 116 54 118 62"
          fill="none" stroke="#8a3020" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M 50 62 Q 60 52 68 62 Q 74 70 84 64 Q 94 58 102 66"
          fill="none" stroke="#8a3020" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 54 44 Q 62 38 70 44" fill="none" stroke="#c04030" strokeWidth="1" strokeOpacity="0.6" />
        {/* Scan lines */}
        <line x1="34" y1="56" x2="126" y2="56" stroke="#3a1010" strokeWidth="0.5" strokeDasharray="2,3" />
        <line x1="80" y1="18" x2="80" y2="94" stroke="#3a1010" strokeWidth="0.5" strokeDasharray="2,3" />
        {/* HUD labels */}
        <text x="10" y="14" fill="#5a2010" fontSize="7" fontFamily="monospace">AXIAL</text>
        <text x="10" y="24" fill="#5a2010" fontSize="7" fontFamily="monospace">Z: -12mm</text>
        <text x="120" y="14" fill="#5a2010" fontSize="7" fontFamily="monospace">T1w</text>
      </svg>
    ),
  },
  {
    num: "13",
    title: "Flatland",
    href: "https://vibes.akuzi.org/experiments/flatland",
    thumbnail: (
      <svg viewBox="0 0 160 120" className="w-full h-full">
        <defs>
          <linearGradient id="flat-bg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#080810" />
            <stop offset="100%" stopColor="#050508" />
          </linearGradient>
        </defs>
        <rect width="160" height="120" fill="url(#flat-bg)" />
        {/* Ground line */}
        <line x1="0" y1="90" x2="160" y2="90" stroke="#2a2a3a" strokeWidth="0.8" />
        {/* 2D shapes */}
        {/* Triangle (warrior) */}
        <polygon points="50,70 38,88 62,88" fill="none" stroke="#c9a86c" strokeWidth="1.5" />
        <text x="50" y="100" textAnchor="middle" fill="#7a6030" fontSize="6" fontFamily="sans-serif">Triangle</text>
        {/* Square (professional) */}
        <rect x="72" y="68" width="22" height="22" fill="none" stroke="#6a9ad4" strokeWidth="1.5" />
        <text x="83" y="100" textAnchor="middle" fill="#3a5a7a" fontSize="6" fontFamily="sans-serif">Square</text>
        {/* Many-sided polygon (upper class) */}
        <polygon points="122,62 134,66 138,78 134,90 122,94 110,90 106,78 110,66" fill="none" stroke="#9b59b6" strokeWidth="1.2" />
        <text x="122" y="106" textAnchor="middle" fill="#5a3a7a" fontSize="6" fontFamily="sans-serif">Polygon</text>
        {/* Movement arrows */}
        <path d="M 20 79 L 28 79" stroke="#3a3a4a" strokeWidth="1" markerEnd="url(#arr)" />
        {/* Title text in 2D flatland style */}
        <text x="80" y="18" textAnchor="middle" fill="#2a2a4a" fontSize="10" fontFamily="serif" letterSpacing="2">FLATLAND</text>
        <text x="80" y="30" textAnchor="middle" fill="#1a1a2e" fontSize="6" fontFamily="serif">A Romance of Many Dimensions</text>
      </svg>
    ),
  },
];

function VibesCard({ exp, index }: { exp: (typeof experiments)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={exp.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      className="group relative block bg-[#0a0a0a] border border-border hover:border-accent/30 transition-colors duration-400 overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        {exp.img ? (
          <Image
            src={exp.img}
            alt={exp.title}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
            className="object-cover"
          />
        ) : (
          exp.thumbnail
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
      </div>
      <div className="p-2 border-t border-border">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[#333] text-[9px] font-mono">{exp.num}</span>
          <h3 className="text-[#777] text-[10px] leading-snug group-hover:text-text transition-colors duration-300 line-clamp-1">
            {exp.title}
          </h3>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </motion.a>
  );
}

export default function Vibes() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="vibes" className="py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Experiments</div>
          <h2
            className="font-heading text-text mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Vibes
          </h2>
          <p className="text-muted text-sm max-w-xl leading-relaxed">
            An ongoing lab of interactive experiments — from programming languages and AI voice chat
            to voxel worlds and pocket calculator simulators.
          </p>
          <a
            href="https://vibes.akuzi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
          >
            Explore All Experiments <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
          {experiments.map((exp, i) => (
            <VibesCard key={exp.num} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
