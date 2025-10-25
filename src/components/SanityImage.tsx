import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";
import { ProjectImage } from "@/sanity/types/sanity.types";

interface SanityImageProps {
  asset: ProjectImage["asset"];
  alt: ProjectImage["altText"];
}

export default function SanityImage({ asset, alt }: SanityImageProps) {
  if (!asset) return null;

  const dims = getImageDimensions(asset);

  return (
    <Image
      src={urlFor(asset).url()}
      alt={alt || ""}
      width={dims.width}
      height={dims.height}
      className="pointer-events-auto"
    />
  );
}
