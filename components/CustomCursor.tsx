"use client";

import { useRef, useEffect, useCallback } from "react";
import { isMobile } from "@/lib/utils";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);
  const isOverImageRef = useRef(false);

  const animate = useCallback(() => {
    const lerp = 0.15;
    posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

    const scale = isHoveringRef.current ? 2 : isOverImageRef.current ? 1.5 : 1;
    const opacity = isOverImageRef.current && !isHoveringRef.current ? 0.8 : 1;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%) scale(${scale})`;
      cursorRef.current.style.opacity = `${opacity}`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isMobile() || "ontouchstart" in window) return;

    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const onMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const onMouseLeave = () => {
      isHoveringRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    const onImageEnter = () => {
      isOverImageRef.current = true;
    };
    const onImageLeave = () => {
      isOverImageRef.current = false;
    };

    const imageContainers = document.querySelectorAll(
      "img, [class*='aspect-']"
    );
    imageContainers.forEach((el) => {
      el.addEventListener("mouseenter", onImageEnter);
      el.addEventListener("mouseleave", onImageLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      imageContainers.forEach((el) => {
        el.removeEventListener("mouseenter", onImageEnter);
        el.removeEventListener("mouseleave", onImageLeave);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-5 w-5 rounded-full border border-text/50 transition-[width,height] duration-300 md:block"
      aria-hidden="true"
    />
  );
}
