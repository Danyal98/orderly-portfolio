"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const progress = document.querySelector<HTMLElement>(".scroll-progress span");

    root.classList.add("motion-ready");

    const updateProgress = () => {
      if (!progress) return;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const amount = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0;
      progress.style.transform = `scaleX(${amount})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    let observer: IntersectionObserver | undefined;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -7%" },
      );

      revealItems.forEach((item) => observer?.observe(item));
    }

    const tiltCleanups = tiltItems.map((item) => {
      const onMove = (event: PointerEvent) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const bounds = item.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        item.style.setProperty("--tilt-x", `${x * 5}deg`);
        item.style.setProperty("--tilt-y", `${y * -4}deg`);
        item.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
        item.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
      };

      const onLeave = () => {
        item.style.removeProperty("--tilt-x");
        item.style.removeProperty("--tilt-y");
        item.style.removeProperty("--shine-x");
        item.style.removeProperty("--shine-y");
      };

      item.addEventListener("pointermove", onMove);
      item.addEventListener("pointerleave", onLeave);
      return () => {
        item.removeEventListener("pointermove", onMove);
        item.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      root.classList.remove("motion-ready");
      observer?.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span /></div>;
}
