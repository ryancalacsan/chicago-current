"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import { prefersReducedMotion, isMobile } from "@/lib/utils";

export default function SectionRiverStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || isMobile() || !pinRef.current) return;

      // Create a timeline that plays during the pin scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Stagger the content reveals across the scroll duration
      tl.from(
        labelRef.current,
        { opacity: 0, y: 20, duration: 0.15 },
        0
      );

      // First paragraph fades in at ~30% scroll
      tl.from(
        para1Ref.current,
        { opacity: 0, y: 30, duration: 0.2 },
        0.3
      );

      // Second paragraph fades in at ~60% scroll
      tl.from(
        para2Ref.current,
        { opacity: 0, y: 30, duration: 0.2 },
        0.6
      );
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
          <p
            ref={labelRef}
            className="mb-12 text-[length:var(--text-caption)] uppercase tracking-[0.3em] opacity-50"
          >
            The River&apos;s Story
          </p>

          <SplitTextReveal
            type="chars"
            stagger={0.02}
            className="font-serif text-[length:var(--text-section)] leading-[1.1]"
          >
            The Potawatomi called it Shikaakwa — the place of the wild onion.
          </SplitTextReveal>

          <p
            ref={para1Ref}
            className="mx-auto mt-16 max-w-2xl text-[length:var(--text-body)] leading-relaxed opacity-80"
          >
            Long before steel and glass defined its banks, this river was a
            highway of commerce, a boundary of nations, and a source of life.
            In 1900, engineers accomplished what many called impossible — they
            reversed its flow, sending its waters away from Lake Michigan and
            toward the Mississippi.
          </p>

          <p
            ref={para2Ref}
            className="mx-auto mt-10 max-w-2xl text-[length:var(--text-body)] leading-relaxed opacity-80"
          >
            Today, the river tells a different story — one of restoration, of
            a city learning to face the water it once turned its back on. And
            from a kayak, sitting just inches above the surface, you hear it
            all.
          </p>
        </div>
      </div>
    </section>
  );
}
