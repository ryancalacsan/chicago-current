"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import { prefersReducedMotion } from "@/lib/utils";

type RevealDirection = "left" | "right" | "top" | "bottom";

interface ImageRevealProps {
  src: string;
  alt: string;
  direction?: RevealDirection;
  className?: string;
  priority?: boolean;
}

function getClipPath(direction: RevealDirection, open: boolean) {
  if (open) return "inset(0 0% 0 0)";

  switch (direction) {
    case "left":
      return "inset(0 100% 0 0)";
    case "right":
      return "inset(0 0 0 100%)";
    case "top":
      return "inset(100% 0 0 0)";
    case "bottom":
      return "inset(0 0 100% 0)";
  }
}

export default function ImageReveal({
  src,
  alt,
  direction = "left",
  className = "",
  priority = false,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      gsap.fromTo(
        containerRef.current,
        { clipPath: getClipPath(direction, false) },
        {
          clipPath: getClipPath(direction, true),
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}
