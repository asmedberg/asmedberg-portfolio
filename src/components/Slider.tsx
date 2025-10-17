"use client";
import { useEffect, useState, useRef } from "react";
import { Image, Video } from "@imagekit/next";

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
      />
    );

  if (slide.type === "video")
    return <Video urlEndpoint={imagekit_endpoint} src={slide.source} title={slide.title} controls />;

  return null;
};

export default function Slider({ slides }: SliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.right = `${currentSlideIndex * 100}%`;
    }
  }, [currentSlideIndex]);

  return (
    <div className="relative aspect-video overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-row flex-nowrap transition-all duration-500 ease-in-out"
      >
        {slides?.map((slide, i) => (
          <div
            key={i}
            className="w-full h-auto shrink-0 grow-1 basis-full flex justify-center items-start bg-dark dark:bg-light overflow-y-scroll overscroll-contain"
          >
            {renderSlide(slide)}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full p-2 flex flex-row flex-nowrap justify-between text-[var(--blue)]">
        <button
          disabled={currentSlideIndex === 0}
          onClick={() => setCurrentSlideIndex(prev => prev - 1)}
          className="cursor-pointer disabled:hidden"
        >
          <span className="text-4xl sm:text-6xl md:text-9xl text-white text-shadow-lg">&lsaquo;</span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          disabled={currentSlideIndex === slides.length - 1}
          onClick={() => setCurrentSlideIndex(prev => prev + 1)}
          className="ml-auto cursor-pointer disabled:hidden"
        >
          <span className="text-4xl sm:text-6xl md:text-9xl text-white text-shadow-lg">&rsaquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </div>
      {slides.length > 1 && (
        <div className="absolute bottom-0 z-10 w-full p-4 flex flex-row flex-nowrap justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              disabled={currentSlideIndex === i}
              onClick={() => setCurrentSlideIndex(i)}
              className="block w-4 h-4 rounded-full bg-white shadow cursor-pointer disabled:bg-[var(--blue)] disabled:cursor-default"
            >
              <span className="sr-only">{`Slide ${i + 1}`}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
