"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import SanityImage, { type SanityImageProps } from "./SanityImage";
import SanityVideo, { type SanityVideoProps } from "./SanityVideo";
import Overlay from "./Overlay";

interface SliderProps {
  slides: (SanityImageProps | SanityVideoProps)[];
}

const renderSlide = (slide: SanityImageProps | SanityVideoProps) => {
  if (slide._type === "projectImage") return <SanityImage {...slide} />;
  if (slide._type === "projectVideo") return <SanityVideo {...slide} />;
  return null;
};

export default function Slider({ slides }: SliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOverlayOpen = () => setOverlayOpen(true);
  const handleOverlayClose = () => setOverlayOpen(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key;
    if (key === "Escape") {
      handleOverlayClose();
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.right = `${currentSlideIndex * 100}%`;
    }
  }, [currentSlideIndex]);

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
            {renderSlide(slide)}
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
      {overlayOpen && (
        <Overlay closeOverlay={handleOverlayClose}>
          {slides[currentSlideIndex]._type === "projectImage" ? (
            <SanityImage {...slides[currentSlideIndex]} />
          ) : slides[currentSlideIndex]._type === "projectVideo" ? (
            <SanityVideo {...slides[currentSlideIndex]} />
          ) : (
            <p>No asset found.</p>
          )}
        </Overlay>
      )}
    </div>
  );
}
