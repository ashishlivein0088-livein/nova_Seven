"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { SiteContainer } from "@/components/layout/site-container";
import { VideoModal } from "@/components/ui/video-modal";
import { cn } from "@/lib/utils";

type WorkItem = {
  id: string;
  kind: string;
  title: string;
  client: string;
  description: string;
  videoUrl: string;
  posterSrc: string;
};

const workItems: WorkItem[] = [
  {
    id: "01",
    kind: "Commercial",
    title: "In the Long Light",
    client: "Aurelia Watches",
    description:
      "A minute-long brand film shot across Iceland's southern coast - anamorphic lenses, real weather, no CG. Delivered in 6K for global rollout across broadcast and social.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterSrc: "/services/service-01.svg",
  },
  {
    id: "02",
    kind: "Music",
    title: "Nocturne Signals",
    client: "Midnight Sound",
    description:
      "A music-driven campaign built around practical lighting and long-lens city movement. Released as a hero cut plus six social adaptations in under three weeks.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    posterSrc: "/services/service-03.svg",
  },
  {
    id: "03",
    kind: "Documentary",
    title: "Where the River Turns",
    client: "Field Notes Documentary",
    description:
      "A short documentary portrait crafted for festival and digital release, combining on-location interviews, atmospheric B-roll, and a restrained archival treatment.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterSrc: "/services/service-04.svg",
  },
  {
    id: "04",
    kind: "Fashion",
    title: "Second Skin",
    client: "Monolith Atelier",
    description:
      "A tactile fashion piece captured on 16mm-inspired digital textures, balancing stillness and movement for global launch edits and store installations.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4",
    posterSrc: "/services/service-05.svg",
  },
  {
    id: "05",
    kind: "Branded Story",
    title: "After the Rain",
    client: "Northline Electric",
    description:
      "A human-centered brand story built from real customer voices, blending documentary interviews with cinematic product visuals across a five-market rollout.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    posterSrc: "/services/service-06.svg",
  },
];

export function WorkOverview() {
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="bg-white pt-28 pb-16 sm:pt-32 sm:pb-24">
      <SiteContainer>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
          <div>
            <p className="text-subtitle text-yellow-600">All work</p>
            <h1
              className="text-title mt-3 text-zinc-950"
              style={
                {
                  "--title-size": "clamp(2rem, 4.2vw, 4.2rem)",
                  "--title-leading": "1.04",
                  "--title-tracking": "0.01em",
                } as React.CSSProperties
              }
            >
              Five selected projects.
            </h1>
          </div>

          <p
            className="text-subtitle max-w-xl text-zinc-500 lg:justify-self-end"
            style={
              {
                "--subtitle-size": "clamp(0.92rem, 1.18vw, 1.08rem)",
                "--subtitle-leading": "1.65",
                "--subtitle-tracking": "0.02em",
              } as React.CSSProperties
            }
          >
            A broader look at our recent body of work across commercial,
            documentary, fashion, and music projects.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {workItems.map((item, index) => {
            const isEvenRow = index % 2 === 1;

            return (
            <article
              key={item.id}
              className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-black",
                  isEvenRow && "lg:order-2"
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  aria-label={`Play ${item.title}`}
                  className="block w-full text-left"
                >
                  <video
                    className="aspect-video h-full w-full object-cover"
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    playsInline
                    poster={item.posterSrc}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                </button>

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/20" />

                <span className="absolute top-5 left-5 rounded-full border border-white/45 bg-black/30 px-4 py-1 text-xs tracking-[0.16em] text-white/95 uppercase backdrop-blur-sm">
                  {item.kind}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  aria-label={`Play ${item.title}`}
                  className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
                >
                  <Play className="size-8 fill-current pl-0.5" />
                </button>
              </div>

              <div
                className={cn(
                  "flex flex-col justify-between py-1 lg:max-w-2xl",
                  isEvenRow && "lg:order-1"
                )}
              >
                <div>
                  <p
                    className="text-subtitle text-yellow-700"
                    style={
                      {
                        "--subtitle-size": "0.88rem",
                        "--subtitle-tracking": "0.2em",
                      } as React.CSSProperties
                    }
                  >
                    Featured · {item.id}
                  </p>

                  <h2
                    className="mt-4 font-serif text-zinc-950"
                    style={
                      {
                        fontSize: "clamp(2.1rem, 4.1vw, 4rem)",
                        lineHeight: 1.04,
                        letterSpacing: "-0.01em",
                      } as React.CSSProperties
                    }
                  >
                    {item.title}
                  </h2>

                  <p
                    className="text-subtitle mt-1.5 text-zinc-700"
                    style={
                      {
                        "--subtitle-size": "clamp(1.1rem, 1.5vw, 1.45rem)",
                        "--subtitle-tracking": "0.08em",
                      } as React.CSSProperties
                    }
                  >
                    {item.client}
                  </p>

                  <p
                    className="text-subtitle mt-4 max-w-xl text-zinc-600"
                    style={
                      {
                        "--subtitle-size": "clamp(1rem, 1.25vw, 1.28rem)",
                        "--subtitle-leading": "1.7",
                        "--subtitle-tracking": "0.01em",
                      } as React.CSSProperties
                    }
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            </article>
            );
          })}
        </div>
      </SiteContainer>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title ?? ""}
        videoUrl={activeVideo?.videoUrl ?? ""}
      />
    </section>
  );
}
