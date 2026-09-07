import { useEffect } from "react";

import type { Photo } from "@/lib/work";

type LightboxProps = {
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!photo) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-foreground/94 p-4 backdrop-blur-sm animate-fade-in sm:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-xs tracking-[0.3em] text-background/70 uppercase transition-colors hover:text-background"
      >
        Close
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photograph"
        className="absolute left-4 text-xs tracking-[0.3em] text-background/60 uppercase transition-colors hover:text-background sm:left-8"
      >
        Prev
      </button>
      <img
        src={photo.src}
        alt={photo.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-full object-contain"
      />
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next photograph"
        className="absolute right-4 text-xs tracking-[0.3em] text-background/60 uppercase transition-colors hover:text-background sm:right-8"
      >
        Next
      </button>
    </div>
  );
}
