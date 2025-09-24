"use client";
import { useEffect } from "react";

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ImageDialog({ isOpen, onClose, children }: ImageDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Close dialog"
      />
      <div className="relative w-full max-h-[90vh] max-w-[90vw] md:max-w-[50vw] overflow-auto rounded-lg bg-white p-4 dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}
