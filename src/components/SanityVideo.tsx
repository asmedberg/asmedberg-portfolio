import { urlForFile } from "@/sanity/lib/file";
import { ProjectVideo } from "@/sanity/types/sanity.types";

interface SanityVideoProps {
  asset: ProjectVideo["asset"];
}

export default function SanityVideo({ asset }: SanityVideoProps) {
  if (!asset) return null;

  return (
    <video
      src={urlForFile(asset)}
      autoPlay={false}
      loop={false}
      muted={false}
      playsInline={false}
      controls={true}
      poster={""}
      className="w-full h-full object-contain pointer-events-auto"
    />
  );
}
