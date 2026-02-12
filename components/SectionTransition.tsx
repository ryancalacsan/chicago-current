"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ImageReveal from "@/components/ui/ImageReveal";
import TextReveal from "@/components/ui/TextReveal";
import { prefersReducedMotion } from "@/lib/utils";

export default function SectionTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.to(sectionRef.current, {
        "--bg": "#3a3e44",
        "--text": "#e8e4e0",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-theme="green"
      className="relative bg-bg py-32 text-text transition-colors md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6">
        <TextReveal className="mx-auto max-w-3xl">
          <p className="text-[length:var(--text-body)] leading-relaxed">
            The green corridor ends without ceremony. The trees thin, the banks
            harden to concrete, and the water darkens. You feel the city before
            you see it — a shift in the air, a deepening of sound.
          </p>
        </TextReveal>

        <div className="mt-24 grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <ParallaxImage
              src="/images/transition-01.jpg"
              alt="Industrial corridor along the river"
              speed={0.25}
              className="relative aspect-[16/10] w-full"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-5">
            <TextReveal>
              <p className="text-[length:var(--text-body)] leading-relaxed opacity-80">
                This stretch is where the river&apos;s industrial past is most
                visible — rusted steel, crumbling loading docks, the ghosts of
                factories that once drove the nation&apos;s economy.
              </p>
            </TextReveal>
            <ImageReveal
              src="/images/transition-02.jpg"
              alt="Weathered concrete along the riverbank"
              direction="bottom"
              className="relative aspect-[3/4] w-full"
            />
          </div>
        </div>

        <TextReveal className="mx-auto mt-24 max-w-3xl text-center">
          <p className="text-[length:var(--text-body)] leading-relaxed">
            And yet, even here, there are signs of return. A great blue heron
            stands motionless on a rusted beam. Fish break the surface where
            chemical runoff once killed everything it touched. The river is
            healing, slowly and stubbornly.
          </p>
        </TextReveal>
      </div>
    </section>
  );
}
