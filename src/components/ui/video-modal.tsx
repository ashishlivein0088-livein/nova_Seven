"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl: string;
};

type EmbedInfo =
  | {
      kind: "youtube" | "vimeo";
      src: string;
    }
  | {
      kind: "direct";
      src: string;
    };

function getEmbedInfo(videoUrl: string): EmbedInfo {
  const youtubeMatch = videoUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/
  );

  if (youtubeMatch) {
    return {
      kind: "youtube",
      src: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  const vimeoMatch = videoUrl.match(/vimeo\.com\/(\d+)/);

  if (vimeoMatch) {
    return {
      kind: "vimeo",
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    };
  }

  return {
    kind: "direct",
    src: videoUrl,
  };
}

export function VideoModal({ isOpen, onClose, title, videoUrl }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const embedInfo = getEmbedInfo(videoUrl);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl",
          "ring-1 ring-white/10"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/85 px-4 py-3 sm:px-5">
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] text-yellow-400 uppercase">
              Now Playing
            </p>
            <h3 className="mt-1 text-sm font-medium text-white sm:text-base">{title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            aria-label="Close video modal"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          {embedInfo.kind === "direct" ? (
            <video
              className="h-full w-full"
              src={embedInfo.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <iframe
              className="h-full w-full"
              src={embedInfo.src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
