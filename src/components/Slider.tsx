"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import SanityImage from "./SanityImage";
import SanityVideo from "./SanityVideo";
import Overlay from "./Overlay";

import { Projects } from "@/sanity/types/sanity.types";

type ProjectAsset = NonNullable<Projects["assets"]>[number];

interface SliderProps {
  slides: ProjectAsset[];
}

export default function Slider({ slides }: SliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // handlers for opening and closing the overlay
  const handleOverlayOpen = () => setOverlayOpen(true);
  const handleOverlayClose = () => setOverlayOpen(false);

  // closes overlay when esc key is pressed
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key;
    if (key === "Escape") {
      handleOverlayClose();
    }
  }, []);

  // advances slide and pauses any playing videos
  useEffect(() => {
    const container = containerRef.current;
    const videoSlides = container?.querySelectorAll("video");

    if (container) {
      container.style.right = `${currentSlideIndex * 100}%`;
      if (videoSlides) {
        videoSlides.forEach(video => video.pause());
      }
    }
  }, [currentSlideIndex]);

  // prevents body from scrolling when overlay is open
  useEffect(() => {
    const body = document.body;
    if (overlayOpen) {
      body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [overlayOpen, handleKeyDown]);

  return (
    <div className="rounded-lg border-4 border-dark dark:border-light overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full h-full flex flex-row flex-nowrap transition-all duration-500 ease-in-out"
        >
          {slides?.map(slide => (
            <div
              key={slide._key}
              onClick={slide._type === "projectImage" ? handleOverlayOpen : undefined}
              className={`w-full h-auto shrink-0 grow basis-full flex justify-center items-start bg-dark dark:bg-light ${
                slide._type === "projectImage" ? "cursor-zoom-in" : ""
              }`.trim()}
            >
              {slide._type === "projectImage" && <SanityImage asset={slide.asset} alt={slide.altText} />}
              {slide._type === "projectVideo" && <SanityVideo asset={slide.asset} />}
            </div>
          ))}
        </div>
        {slides.length > 1 && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-1/2 z-20 -translate-y-1/2 w-full p-2 flex flex-row flex-nowrap justify-between text-(--blue)">
              <button
                disabled={currentSlideIndex === 0}
                onClick={() => setCurrentSlideIndex(prev => prev - 1)}
                className="cursor-pointer pointer-events-auto disabled:hidden"
              >
                <span className="text-4xl sm:text-6xl md:text-9xl text-white text-shadow-lg text-shadow-black">
                  &lsaquo;
                </span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                disabled={currentSlideIndex === slides.length - 1}
                onClick={() => setCurrentSlideIndex(prev => prev + 1)}
                className="ml-auto cursor-pointer pointer-events-auto disabled:hidden"
              >
                <span className="text-4xl sm:text-6xl md:text-9xl text-white text-shadow-lg text-shadow-black">
                  &rsaquo;
                </span>
                <span className="sr-only">Next</span>
              </button>
            </div>

            <div className="absolute bottom-0 z-20 w-full p-4 flex flex-row flex-nowrap justify-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s._key}
                  disabled={currentSlideIndex === i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className="block w-4 h-4 rounded-full bg-white shadow shadow-black cursor-pointer pointer-events-auto disabled:bg-(--blue) disabled:cursor-default"
                >
                  <span className="sr-only">{`Slide ${i + 1}`}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <Overlay open={overlayOpen} close={handleOverlayClose} asset={slides[currentSlideIndex] ?? null} />
      </div>
    </div>
  );
}
