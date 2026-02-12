"use client";

import ImageReveal from "@/components/ui/ImageReveal";
import ScaleImage from "@/components/ui/ScaleImage";
import TextReveal from "@/components/ui/TextReveal";

export default function SectionLaunch() {
  return (
    <section
      data-theme="launch"
      className="relative bg-bg py-32 text-text md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro text */}
        <TextReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[length:var(--text-body)] leading-relaxed">
            We set out from the North Shore Channel at dawn, the water still and
            dark as oil. The kayaks slid in with barely a whisper. Ahead of us,
            nine miles of river — a passage through the heart of Chicago most
            residents never see.
          </p>
        </TextReveal>

        {/* Image grid */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 md:gap-8">
          <ImageReveal
            src="/images/launch-01.jpg"
            alt="Kayak being lowered into the North Shore Channel"
            direction="left"
            className="relative aspect-[3/4] w-full"
          />
          <div className="flex flex-col gap-6 md:gap-8 md:pt-24">
            <ScaleImage
              src="/images/launch-02.jpg"
              alt="Morning light on the water surface"
              className="relative aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <TextReveal>
              <p className="text-[length:var(--text-caption)] uppercase tracking-[0.2em] opacity-60">
                North Shore Channel &middot; 6:47 AM
              </p>
            </TextReveal>
          </div>
        </div>

        {/* Pull text */}
        <TextReveal className="mx-auto mt-24 max-w-3xl">
          <p className="text-[length:var(--text-body)] leading-relaxed">
            There&apos;s a particular silence that settles over a city river in
            the early morning — not the absence of sound, but a muffling of it,
            as if the water itself absorbs the noise of a waking metropolis.
          </p>
        </TextReveal>
      </div>
    </section>
  );
}
