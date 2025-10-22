import { urlForFile } from "@/sanity/lib/video";

export interface SanityVideoProps {
  _key: string;
  _type: "projectVideo";
  description: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export default function SanityVideo(props: SanityVideoProps) {
  const source = props?.asset?._ref ? urlForFile(props.asset._ref) : undefined;

  return (
    <video
      src={source}
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
