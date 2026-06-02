"use client";

import { useEffect, useRef, useState } from "react";

function isInteractiveElement(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  return el.tagName === "A" || el.tagName === "BUTTON" || !!el.closest("a") || !!el.closest("button");
}

export function Cursor() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const posRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const ringEl = useRef<HTMLDivElement>(null);
  const overInteractive = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isTouch) return;
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const target = posRef.current;
      const ring = ringRef.current;

      ring.x = lerp(ring.x, target.x, 0.12);
      ring.y = lerp(ring.y, target.y, 0.12);

      if (ringEl.current) {
        ringEl.current.style.left = `${ring.x - 15}px`;
        ringEl.current.style.top = `${ring.y - 15}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    const handleMouseOver = (e: MouseEvent) => {
      const over = isInteractiveElement(e.target);
      if (over !== overInteractive.current) {
        overInteractive.current = over;
        if (ringEl.current) {
          ringEl.current.style.transform = over ? "scale(1.5)" : "scale(1)";
          ringEl.current.style.borderColor = over
            ? "rgba(34, 211, 238, 0.7)"
            : "rgba(255, 255, 255, 0.3)";
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div ref={ringEl} className="cursor-ring pointer-events-none" />
  );
}
