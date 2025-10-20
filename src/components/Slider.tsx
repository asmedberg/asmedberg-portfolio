"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Image, Video } from "@imagekit/next";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface BaseSlide {
  type: "image" | "video";
  source: string;
}

interface ImageSlide extends BaseSlide {
  type: "image";
  alt: string;
  width: number;
  height: number;
}

interface VideoSlide extends BaseSlide {
  type: "video";
  title: string;
}

interface SliderProps {
  slides: Slide[];
}

export type Slide = ImageSlide | VideoSlide;

const imagekit_endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT;

const renderSlide = (slide: Slide) => {
  if (slide.type === "image")
    return (
      <Image
        urlEndpoint={imagekit_endpoint}
        src={slide.source || ""}
        alt={slide.alt || ""}
        width={slide.width}
        height={slide.height}
        className="pointer-events-auto"
      />
    );

  if (slide.type === "video")
    return (
      <Video
        urlEndpoint={imagekit_endpoint}
        src={slide.source}
        title={slide.title}
        controls
        className="pointer-events-auto"
      />
    );

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
        {slides?.map((slide, i) => (
          <div
            key={i}
            onClick={slide.type === "image" ? handleOverlayOpen : undefined}
            className={`w-full h-auto shrink-0 grow-1 basis-full flex justify-center items-start bg-dark dark:bg-light ${
              slide.type === "image" ? "cursor-zoom-in" : ""
            }`.trim()}
          >
            {renderSlide(slide)}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/2 z-20 -translate-y-1/2 w-full p-2 flex flex-row flex-nowrap justify-between text-[var(--blue)]">
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
                key={i}
                disabled={currentSlideIndex === i}
                onClick={() => setCurrentSlideIndex(i)}
                className="block w-4 h-4 rounded-full bg-white shadow shadow-black cursor-pointer pointer-events-auto disabled:bg-[var(--blue)] disabled:cursor-default"
              >
                <span className="sr-only">{`Slide ${i + 1}`}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {overlayOpen && (
        <>
          <div onClick={handleOverlayClose} className="fixed inset-0 z-10 bg-black/50" />
          <button
            onClick={handleOverlayClose}
            className="fixed top-4 right-4 z-30 rounded-full p-2 bg-white text-black shadow-md shadow-black cursor-pointer"
          >
            <XMarkIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
          <div className="fixed inset-0 z-20 p-0 sm:p-4 md:p-8 flex items-start justify-center overflow-y-scroll pointer-events-none">
            {renderSlide(slides[currentSlideIndex])}
          </div>
        </>
      )}
    </div>
  );
}
