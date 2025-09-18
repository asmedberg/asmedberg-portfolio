"use client";
import { useRef, useEffect } from "react";
import type p5 from "p5";

export default function P5Canvas() {
  const container = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const bgColor = getComputedStyle(document.body).getPropertyValue("--color-background");

    const loadP5 = async () => {
      const P5 = (await import("p5")).default;
      if (container.current) {
        const c = container.current;

        p5Instance.current = new P5((sketch: p5) => {
          sketch.setup = () => {
            sketch.createCanvas(c.clientWidth, c.clientHeight);
          };
          sketch.draw = () => {
            sketch.background(`${bgColor}`);
          };
          sketch.windowResized = () => {
            sketch.resizeCanvas(c.clientWidth, c.clientHeight);
          };
        }, c);
      }
    };
    loadP5();

    // Cleanup function
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return <div ref={container} className="fixed inset-0 -z-10" />;
}
