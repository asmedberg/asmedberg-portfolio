"use client";
import { useState, useEffect } from "react";

import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400"
});

export default function NavDetails() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMousePosition);
    return () => document.removeEventListener("mousemove", handleMousePosition);
  }, []);
  return (
    <div className={`fixed top-12 left-12 text-white dark:text-black ${shareTechMono.className}`}>
      <p>{mousePosition?.x}</p>
      <p>{mousePosition?.y}</p>
    </div>
  );
}
