import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export interface SanityImageProps {
  _key: string;
  _type: "projectImage";
  altText: string;
  asset: {
    metadata: {
      lqip: string;
      dimensions: {
        aspectRatio: number;
        height: number;
        width: number;
      };
    };
  };
}

export default function SanityImage(props: SanityImageProps) {
  return (
    <Image
      src={urlFor(props.asset).url()}
      alt={props.altText || ""}
      width={props.asset.metadata.dimensions.width}
      height={props.asset.metadata.dimensions.height}
      className="pointer-events-auto"
    />
  );
}
