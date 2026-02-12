"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import TextReveal from "@/components/ui/TextReveal";
import { prefersReducedMotion, isMobile } from "@/lib/utils";

const images = [
  {
    src: "/images/green-01.jpg",
    alt: "Dense tree canopy arching over the river",
    caption: "The canopy closes in",
  },
  {
    src: "/images/green-02.jpg",
    alt: "Kayaker paddling through a tunnel of green",
    caption: "North Branch",
  },
  {
    src: "/images/green-03.jpg",
    alt: "Reflections of trees in still water",
    caption: "Still water mirrors",
  },
  {
    src: "/images/green-04.jpg",
    alt: "Wildlife on the riverbank",
    caption: "River residents",
  },
];

export default function SectionGreen() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || isMobile() || !trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth - viewportWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-theme="green"
      className="relative bg-bg text-text"
    >
      {/* Section header */}
      <div className="px-6 pt-24 pb-12 md:hidden">
        <TextReveal>
          <h2 className="font-serif text-[length:var(--text-section)]">
            Into the Green
          </h2>
        </TextReveal>
      </div>

      {/* Horizontal scroll track (desktop) / Vertical stack (mobile) */}
      <div
        ref={trackRef}
        className="flex flex-col gap-8 px-6 pb-24 md:h-screen md:flex-row md:items-center md:gap-12 md:px-0 md:pb-0"
      >
        {/* Title panel (desktop only) */}
        <div className="hidden shrink-0 md:flex md:h-full md:w-screen md:flex-col md:items-center md:justify-center md:px-24">
          <p className="text-[length:var(--text-caption)] uppercase tracking-[0.3em] opacity-50">
            Mile 3
          </p>
          <h2 className="mt-4 font-serif text-[length:var(--text-hero)] leading-[0.9]">
            Into the Green
          </h2>
          <p className="mt-6 max-w-md text-[length:var(--text-body)] leading-relaxed opacity-70">
            The North Branch narrows and the city falls away. Here, the river
            remembers what it was before concrete and steel.
          </p>
        </div>

        {/* Image panels */}
        {images.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 md:h-[80vh] md:w-[60vw]"
          >
            <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <p className="mt-3 text-[length:var(--text-caption)] opacity-60 md:absolute md:bottom-6 md:left-6">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
