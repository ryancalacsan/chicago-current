import { gsap } from "@/lib/gsap-config";

export const fadeIn = (
  element: Element,
  delay = 0,
  duration = 1
): gsap.core.Tween => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration,
    delay,
    ease: "power3.out",
  });
};

export const scaleIn = (
  element: Element,
  delay = 0,
  duration = 1.2
): gsap.core.Tween => {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
  });
};
