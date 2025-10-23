import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Overlay({ closeOverlay, children }: { closeOverlay: () => void; children: React.ReactNode }) {
  return (
    <>
      <div onClick={closeOverlay} className="fixed inset-0 z-10 bg-black/50" />
      <button
        onClick={closeOverlay}
        className="fixed top-4 right-4 z-30 rounded-full p-2 bg-white text-black shadow-md shadow-black cursor-pointer"
      >
        <XMarkIcon className="w-6 h-6" />
        <span className="sr-only">Close</span>
      </button>
      <div className="fixed inset-0 z-20 p-0 sm:p-4 md:p-8 flex items-start justify-center overflow-y-scroll pointer-events-none">
        {children}
      </div>
    </>
  );
}
