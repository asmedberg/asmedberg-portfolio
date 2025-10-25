import { XMarkIcon } from "@heroicons/react/24/outline";
import SanityImage from "./SanityImage";
import SanityVideo from "./SanityVideo";
import { ProjectImage, ProjectVideo } from "@/sanity/types/sanity.types";

interface OverlayProps {
  open: boolean;
  close: () => void;
  asset: ProjectImage | ProjectVideo;
}

export default function Overlay({ open, close, asset }: OverlayProps) {
  if (!asset || !open) return null;
  return (
    <>
      <div onClick={close} className="fixed inset-0 z-10 bg-black/50" />
      <button
        onClick={close}
        className="fixed top-4 right-4 z-30 rounded-full p-2 bg-white text-black shadow-md shadow-black cursor-pointer"
      >
        <XMarkIcon className="w-6 h-6" />
        <span className="sr-only">Close</span>
      </button>
      <div className="fixed inset-0 z-20 p-0 sm:p-4 md:p-8 flex items-start justify-center overflow-y-scroll pointer-events-none">
        {asset._type === "projectImage" && <SanityImage asset={asset.asset} alt={asset.altText} />}
        {asset._type === "projectVideo" && <SanityVideo asset={asset.asset} />}
      </div>
    </>
  );
}
