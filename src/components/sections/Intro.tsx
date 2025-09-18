"use client";
// import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useGSAP } from "@gsap/react";

export default function Intro() {
  // const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    SplitText.create(".split", {
      type: "words",
      autoSplit: true,
      lineClass: "mt-0",
      onSplit: self => {
        return gsap.from(self.words, {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          onComplete: () => self.revert()
        });
      }
    });
  });

  return (
    <div className="grow flex flex-col justify-center split">
      <h1 className="mb-2 font-bold text-3xl sm:text-5xl lg:text-7xl">
        Hi! 👋
        <br />
        I&rsquo;m Adam
      </h1>
      <p className="text-lg leading-tight text-pretty">
        I&rsquo;m a web developer specializing in building modern web applications.
      </p>
      <p className="text-lg mt-2">Scroll to see some of my work.</p>
    </div>
  );
}
