"use client";

import Image from "next/image";
import { useState } from "react";

import Section from "@/components/layout/Section";
import Intro from "@/components/sections/Intro";
import ImageDialog from "@/components/ImageDialog";

import fgcoHomeHero from "@/assets/fgco-home-hero.png";
import fgcoDame from "@/assets/fgco-mobile-fullpage-dame-dedication.png";
import fgcoSinfire from "@/assets/fgco-fullpage-sinfire.png";

interface ImageContainerProps {
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  children: React.ReactNode;
  onClick?: () => void;
}

const ImageContainer = ({ colSpan = 1, rowSpan = 1, children, onClick }: ImageContainerProps) => {
  const colSpans = colSpan === 2 ? "sm:col-span-2" : "";
  const rowSpans = rowSpan === 2 ? "sm:row-span-2" : "";
  return (
    <div
      className={`relative max-h-[100vh] overflow-hidden outline outline-dotted outline-gray-600 sm:max-h-none ${colSpans} ${rowSpans} cursor-pointer transition-transform hover:scale-[1.02]`.trim()}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: typeof fgcoHomeHero; alt: string } | null>(null);

  return (
    <main>
      <Intro />
      <Section>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="grow grid grid-col-1 gap-4 sm:aspect-[3/2] sm:grid-cols-3 sm:grid-rows-2">
            <ImageDialog isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)}>
              {selectedImage && (
                <Image src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" sizes="90vw" />
              )}
            </ImageDialog>
            <ImageContainer
              colSpan={2}
              onClick={() => setSelectedImage({ src: fgcoHomeHero, alt: "For Good & Company - Hero Video Screenshot" })}
            >
              <Image
                src={fgcoHomeHero}
                alt="For Good & Company - Hero Video Screenshot"
                className="absolute inset-0 h-auto w-full"
                sizes="(min-width: 640px) 66vw, 100vw"
              />
            </ImageContainer>
            <ImageContainer
              rowSpan={2}
              onClick={() =>
                setSelectedImage({ src: fgcoDame, alt: "For Good & Company - Fullpage Dame Dedication Screenshot" })
              }
            >
              <Image
                src={fgcoDame}
                alt="For Good & Company - Fullpage Dame Dedication Screenshot"
                className="absolute inset-0 h-auto w-full"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </ImageContainer>
            <ImageContainer
              colSpan={2}
              onClick={() =>
                setSelectedImage({ src: fgcoSinfire, alt: "For Good & Company - Fullpage Sinfire Screenshot" })
              }
            >
              <Image
                src={fgcoSinfire}
                alt="For Good & Company - Fullpage Sinfire Screenshot"
                className="absolute inset-0 h-auto w-full"
                sizes="(min-width: 640px) 66vw, 100vw"
              />
            </ImageContainer>
          </div>
          <div className="basis-1/3">
            <div className="sticky top-0">
              <h1>For Good &amp; Company - Website</h1>
              <p>
                This is an agency site to showcase their work and services. I worked closely with the creative team to
                on the design and development of the site. Creative handed off Figma designs for the look and feel and
                components for the site. I chose to use Next.js
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
