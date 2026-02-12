"use client";

import TextReveal from "@/components/ui/TextReveal";

export default function Footer() {
  return (
    <footer className="bg-[#1a1410] px-6 py-20 text-[#f5f0e8]/70">
      <div className="mx-auto max-w-4xl">
        <TextReveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="font-serif text-2xl text-[#f5f0e8]">
              Chicago Current
            </p>

            <div className="text-[length:var(--text-caption)] leading-relaxed">
              <p>Photography by Ryan Calacsan</p>
              <p>Words by Erica Zazo</p>
              <p className="mt-1 opacity-50">
                Originally published in Mountain Gazette
              </p>
            </div>

            <div className="flex gap-8 text-[length:var(--text-caption)] uppercase tracking-[0.2em]">
              <a
                href="https://ryancalacsan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100 opacity-60"
              >
                Portfolio
              </a>
              <a
                href="https://github.com/ryancalacsan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100 opacity-60"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ryancalacsan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100 opacity-60"
              >
                LinkedIn
              </a>
            </div>

            <p className="text-[length:var(--text-caption)] opacity-30">
              Built with Next.js, GSAP, Tailwind CSS
            </p>
          </div>
        </TextReveal>
      </div>
    </footer>
  );
}
