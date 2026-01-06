"use client";
import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import type p5 from "p5";

export default function P5Canvas() {
  const { theme, systemTheme } = useTheme();
  const container = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const d1 = getComputedStyle(document.body).getPropertyValue("--dark-blue");
    const d2 = getComputedStyle(document.body).getPropertyValue("--darkest-blue");

    const l1 = getComputedStyle(document.body).getPropertyValue("--light-blue");
    const l2 = getComputedStyle(document.body).getPropertyValue("--lightest-blue");

    const dark = theme === "dark" || (systemTheme === "dark" && theme === "system");

    // console.log("dark: ", dark);

    const loadP5 = async () => {
      const P5 = (await import("p5")).default;
      const cols = 50;
      const rows = 38;

      if (container.current) {
        const c = container.current;

        p5Instance.current = new P5((sketch: p5) => {
          sketch.setup = () => {
            sketch.createCanvas(c.clientWidth, c.clientHeight);
            sketch.colorMode(sketch.HSB);
          };
          sketch.draw = () => {
            const mX = sketch.mouseX;
            const mY = sketch.mouseY;

            sketch.background(`${dark ? d1 : l1}`);

            for (let i = 1; i <= cols; i++) {
              for (let j = 1; j <= rows; j++) {
                const x = (sketch.width / cols) * i - sketch.width / cols / 2;
                const y = (sketch.height / rows) * j - sketch.height / rows / 2;
                const distToMouse = sketch.dist(mX, mY, x, y);
                let s = sketch.map(distToMouse, 0, sketch.width * 1.5, 5, 30);

                if (s <= 0) s = 0;

                sketch.rectMode(sketch.CENTER);
                sketch.fill(`${dark ? d2 : l2}`);
                sketch.noStroke();
                sketch.circle(x, y, s);
              }
            }
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
  }, [theme, systemTheme]);

  return <div ref={container} className="fixed inset-0 -z-10" />;
}
