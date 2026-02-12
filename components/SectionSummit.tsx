"use client";

import ScaleImage from "@/components/ui/ScaleImage";
import TextReveal from "@/components/ui/TextReveal";
import SplitTextReveal from "@/components/ui/SplitTextReveal";

export default function SectionSummit() {
  return (
    <section
      data-theme="summit"
      className="relative bg-bg text-text"
    >
      {/* Full-bleed hero image */}
      <div className="relative h-screen">
        <ScaleImage
          src="/images/summit-01.jpg"
          alt="Golden light on the river at journey's end"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6">
          <TextReveal>
            <p className="text-[length:var(--text-caption)] uppercase tracking-[0.3em] opacity-60">
              Mile 9 &middot; Journey&apos;s End
            </p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="mt-4 text-center font-serif text-[length:var(--text-section)]">
              The Summit
            </h2>
          </TextReveal>
        </div>
      </div>

      {/* Closing content */}
      <div className="px-6 py-32 md:py-48">
        <div className="mx-auto max-w-3xl">
          <TextReveal>
            <p className="text-[length:var(--text-body)] leading-relaxed">
              We pulled the kayaks out at the lakefront, arms heavy, faces
              sunburned. Nine miles of river behind us — from the quiet
              headwaters of the North Shore Channel through the industrial
              corridor and into the canyon of downtown.
            </p>
          </TextReveal>

          <div className="my-24 md:my-32">
            <SplitTextReveal
              type="chars"
              stagger={0.02}
              delay={0.2}
              className="text-center font-serif text-[length:var(--text-section)] italic leading-[1.2]"
            >
              If this isn&apos;t true adventure, I don&apos;t know what is.
            </SplitTextReveal>
          </div>

          <TextReveal>
            <p className="text-center text-[length:var(--text-body)] leading-relaxed opacity-70">
              The river doesn&apos;t belong to the city. The city belongs to the
              river.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
