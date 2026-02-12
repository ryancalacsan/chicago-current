"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import ParallaxImage from "@/components/ui/ParallaxImage";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import TextReveal from "@/components/ui/TextReveal";

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollIndicatorRef.current) return;

    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      opacity: 0.4,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  });

  return (
    <section
      data-theme="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg text-text"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/hero.jpg"
          alt="Kayakers on the Chicago River at dawn"
          speed={0.2}
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-bg/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <SplitTextReveal
          type="chars"
          stagger={0.04}
          className="font-serif text-[length:var(--text-hero)] leading-[0.9] tracking-tight"
        >
          Charting Course
        </SplitTextReveal>

        <TextReveal delay={0.6} className="mt-6">
          <p className="font-serif text-[length:var(--text-section)] italic leading-tight opacity-80">
            Paddling the Chicago River
          </p>
        </TextReveal>

        <TextReveal delay={1} className="mt-8">
          <p className="text-[length:var(--text-caption)] uppercase tracking-[0.3em] opacity-60">
            Photography by Ryan Calacsan &middot; Words by Erica Zazo
          </p>
        </TextReveal>

        <TextReveal delay={1.2} className="mt-2">
          <p className="text-[length:var(--text-caption)] uppercase tracking-[0.2em] opacity-40">
            Mountain Gazette
          </p>
        </TextReveal>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-60"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
