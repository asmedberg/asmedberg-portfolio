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
            sketch.background(`${bgColor}`);
            sketch.colorMode(sketch.HSB);
          };
          sketch.draw = () => {
            sketch.filter(sketch.BLUR, 8);
            sketch.noStroke();
            // sketch.fill(`${bgColor}05`);
            sketch.fill(`#00000001`);
            sketch.rect(0, 0, sketch.width, sketch.height);
          };
          sketch.mouseMoved = () => {
            const line = sketch.mouseX - sketch.mouseY;

            sketch.stroke(line, 100, 100);
            sketch.strokeWeight(15);
            sketch.line(sketch.pmouseX, sketch.pmouseY, sketch.mouseX, sketch.mouseY);
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
