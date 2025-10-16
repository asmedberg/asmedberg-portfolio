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
  return (
    <div className="aspect-video overflow-hidden">
      <div className="relative w-full h-full flex flex-row flex-nowrap overflow-scroll-y bg-dark dark:bg-light">
        {slides?.map((slide, i) => (
          <div key={i} className="w-full h-auto shrink-0 grow-1 basis-full flex justify-center items-start">
            {renderSlide(slide)}
          </div>
        ))}
      </div>
    </div>
  );
}
