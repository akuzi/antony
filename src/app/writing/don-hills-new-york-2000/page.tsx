import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Don Hill's, New York, 2000 — Antony Kuzmicich",
  description: "By midnight the street outside Don Hill's looked like a collision between a British youth cult and a New York sanitation strike.",
};

const body = [
  "By midnight the street outside Don Hill's looked like a collision between a British youth cult and a New York sanitation strike. Cigarette smoke hung in the winter air like industrial exhaust. Mods in narrow-cut jackets leaned against dented Vespas parked crookedly along Greenwich Street, mirrors dimly reflecting the streetlight. Somebody was arguing about Northern Soul with a guy who looked like he'd slept in a rehearsal studio for six months. A girl in heavy eyeliner and a fake-fur coat stepped over a puddle that nobody wanted to look at closely. New York in 2000 still had enough grit left in it to feel unpolished and a bit unpredictable.",
  "Don Hill's sat back from the street, no attempt at polish. Inside: heat and noise, the sound bouncing off low ceilings and dense bodies before you'd fully crossed the threshold.",
  "The band was already playing when I got in. At Don Hill's there was always a band. People stood close to the stage whether they were watching or not. The lighting was low, uneven, faces half-visible. You'd catch someone's gaze through the haze, a brief smile, and then both of you looked away.",
  "Back in the main room, people kept repositioning themselves as the night went on. Near the bar, small groups formed and reformed without much ceremony. Conversations started and stopped mid-sentence as people were pulled away by friends or sound or drink orders. Near the speakers, the air was hotter and more compressed, and people stayed there for shorter stretches before moving back toward the edges.",
  "You heard bands mentioned more than you saw them. The Strokes played shows at Don Hill's, Brownies and the Mercury Lounge in 2000, still figuring out who they were. Interpol came through as well, a show in October 2000 at Don Hill's when the room was fuller than usual and people stood a bit closer to the stage than they normally would. Their set was stripped back and repetitive, built on basslines that held steady while the guitars sat above them rather than pushing forward, and vocals that didn't try to fill the room so much as sit inside it.",
  "What stayed consistent was proximity. You couldn't tell what would matter later, or whether any of it would.",
  "After the band finished, the changeover happened without much attention. People drifted toward the bar, or stayed where they were on the floor. Then the DJ came in and the room shifted.",
  "Records started to lean toward British indie and post-punk, tracks that some people clearly recognised and others just moved along with. The crowd stayed in motion, but in a contained way. People danced in small spaces. Most faces stayed neutral or slightly flushed. Every so often someone moved more freely, then stopped.",
  "Drinks moved across the bar quickly. Conversations continued in fragments rather than full exchanges. The sound level never really dropped, even when the songs changed.",
  "At some point near the bar, two people started pushing each other. It wasn't sustained enough to become a real fight. It lasted a few seconds, drew a few sideways glances, then broke apart. One of them was back at the bar shortly after.",
  "As the night went on, the room began to thin slightly, but never quite emptied in any obvious way. Condensation collected on pipes overhead. Glasses stacked up in uneven clusters. People kept moving between the bar, the floor, and the edges of the room, always in circulation.",
  "The bathrooms ran on a different system entirely. You'd push through the door and the sound of the room would drop away, replaced by running water, shouting, and the constant movement of people trying to navigate a space that was too small for how many were in it. Someone would be at the sink washing their hands for far longer than necessary. Someone else would be talking at full volume into the mirror, not clearly to anyone in particular. The stall doors didn't quite close properly, and they would shift slightly every time the bass from the stage hit a certain frequency.",
  "Outside, the Vespas were still there, unchanged in position, as if they had been left in a separate narrative entirely.",
  "And at some point in the background of all of it, Don Hill himself would be visible for a moment and then not, moving through the space without drawing attention, watching the room in the way someone watches something they are responsible for but cannot fully control.",
];

export default function DonHills() {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Back link */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-4">
        <Link
          href="/"
          className="text-muted text-xs tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
        >
          <span>←</span> Back
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Writing</div>
          <h1 className="font-heading text-text mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2 }}>
            Don Hill&apos;s, New York, 2000
          </h1>
          <div className="h-px w-12 bg-accent mt-6" />
        </header>

        {/* Images */}
        <div className="flex gap-2 mb-12">
          <div className="relative flex-[2] aspect-[16/9] overflow-hidden">
            <Image
              src="/writing/don-hills-exterior.jpg"
              alt="Don Hill's exterior, Greenwich Street"
              fill
              sizes="(max-width: 768px) 66vw, 448px"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative flex-[1] overflow-hidden">
            <Image
              src="/writing/don-hill-portrait.webp"
              alt="Don Hill"
              fill
              sizes="(max-width: 768px) 33vw, 224px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6">
          {body.map((para, i) => (
            <React.Fragment key={i}>
              <p className="text-[#aaa] leading-[1.85] text-[15px]">
                {para}
              </p>
              {i === 8 && (
                <div className="my-8">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src="/writing/don-hills-crowd.webp"
                      alt="Don Hill's crowd"
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#444] text-[10px] tracking-wide mt-2">
                    Huffington Post
                  </p>
                </div>
              )}
              {i === 11 && (
                <div className="my-8">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/writing/don-hills-interior-graffiti.jpg"
                      alt="Don Hill's interior"
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#444] text-[10px] tracking-wide mt-2">
                    WYNC: Don Hill&apos;s interior
                  </p>
                </div>
              )}
              {i === 5 && (
                <div className="my-8">
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <Image
                      src="/writing/strokes-don-hills-2000.jpg"
                      alt="The Strokes at Don Hill's, 2000"
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#444] text-[10px] tracking-wide mt-2">
                    © Cody Smyth / Consequence of Sound — The Strokes at Don Hill&apos;s, 2000
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </article>
    </main>
  );
}
