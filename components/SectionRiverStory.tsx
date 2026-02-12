"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import TextReveal from "@/components/ui/TextReveal";
import { prefersReducedMotion, isMobile } from "@/lib/utils";

export default function SectionRiverStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || isMobile() || !pinRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: pinRef.current,
        pinSpacing: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-theme="river-story"
      className="relative bg-bg text-text"
    >
      <div
        ref={pinRef}
        className="flex min-h-screen flex-col items-center justify-center px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <TextReveal className="mb-12">
            <p className="text-[length:var(--text-caption)] uppercase tracking-[0.3em] opacity-50">
              The River&apos;s Story
            </p>
          </TextReveal>

          <SplitTextReveal
            type="chars"
            stagger={0.02}
            className="font-serif text-[length:var(--text-section)] leading-[1.1]"
          >
            The Potawatomi called it Shikaakwa — the place of the wild onion.
          </SplitTextReveal>

          <TextReveal delay={0.4} className="mt-16">
            <p className="mx-auto max-w-2xl text-[length:var(--text-body)] leading-relaxed opacity-80">
              Long before steel and glass defined its banks, this river was a
              highway of commerce, a boundary of nations, and a source of life.
              In 1900, engineers accomplished what many called impossible — they
              reversed its flow, sending its waters away from Lake Michigan and
              toward the Mississippi.
            </p>
          </TextReveal>

          <TextReveal delay={0.6} className="mt-10">
            <p className="mx-auto max-w-2xl text-[length:var(--text-body)] leading-relaxed opacity-80">
              Today, the river tells a different story — one of restoration, of
              a city learning to face the water it once turned its back on. And
              from a kayak, sitting just inches above the surface, you hear it
              all.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
