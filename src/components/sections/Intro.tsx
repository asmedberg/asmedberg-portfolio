"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useGSAP } from "@gsap/react";
import Section from "@/components/layout/Section";

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      gsap.set(".split", { opacity: 1 });

      SplitText.create(".split", {
        type: "chars",
        autoSplit: true,
        lineClass: "m-0",
        onSplit: self => {
          return gsap.from(self.chars, {
            y: 2,
            opacity: 0,
            stagger: 0.01,
            onComplete: () => self.revert()
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <Section>
      <div ref={container} className="grow flex flex-col justify-center">
        <div className="split opacity-0">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl">Hi! 👋</h1>
          <h2 className="mb-2 font-bold text-3xl sm:text-5xl lg:text-7xl">I&rsquo;m Adam</h2>
          <p className="text-lg leading-tight text-pretty">
            I&rsquo;m a web developer specializing in building modern web applications.
          </p>
          <p className="text-lg mt-2">Scroll to see some of my work.</p>
        </div>
      </div>
    </Section>
  );
}
