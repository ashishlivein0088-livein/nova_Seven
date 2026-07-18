"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";

type ServiceItem = {
  title: string;
  blurb: string;
  image: string;
  accent: string;
};

const services: ServiceItem[] = [
  {
    title: "Creative Direction",
    blurb: "Narrative framing, mood development, and visual language systems.",
    image: "/services/service-01.svg",
    accent: "#f8d584",
  },
  {
    title: "Brand Films",
    blurb: "Cinematic campaigns designed for product launches and global audiences.",
    image: "/services/service-02.svg",
    accent: "#7cf7d4",
  },
  {
    title: "Music Videos",
    blurb: "Concept-first music storytelling with editorial and performance balance.",
    image: "/services/service-03.svg",
    accent: "#ff7de6",
  },
  {
    title: "Photography",
    blurb: "Campaign stills, key art, and social-first image sets with polish.",
    image: "/services/service-04.svg",
    accent: "#95ff9f",
  },
  {
    title: "Set Design",
    blurb: "Spatial styling and physical environments tailored to each production.",
    image: "/services/service-05.svg",
    accent: "#ffcf8b",
  },
  {
    title: "Production",
    blurb: "Line producing, crew orchestration, scheduling, and budget management.",
    image: "/services/service-06.svg",
    accent: "#9ec8ff",
  },
  {
    title: "Post Production",
    blurb: "Edit, color, mix, and finishing pipelines tuned for platform delivery.",
    image: "/services/service-01.svg",
    accent: "#f8d584",
  },
  {
    title: "VFX & Motion",
    blurb: "Compositing, CG augmentation, motion design, and title systems.",
    image: "/services/service-02.svg",
    accent: "#7cf7d4",
  },
  {
    title: "Sound Design",
    blurb: "Sonic identities, atmospheres, and final mixes with emotional weight.",
    image: "/services/service-03.svg",
    accent: "#ff7de6",
  },
  {
    title: "Mastering",
    blurb: "Final QC, formatting, and delivery packages for broadcast and digital.",
    image: "/services/service-04.svg",
    accent: "#95ff9f",
  },
];

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileListRef = useRef<HTMLOListElement>(null);
  const mobileItemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const activeService = services[activeIndex];

  useEffect(() => {
    const list = mobileListRef.current;
    if (!list) {
      return;
    }

    let raf = 0;

    const updateActiveByPosition = () => {
      if (window.innerWidth >= 768) {
        return;
      }

      const listRect = list.getBoundingClientRect();
      const centerX = listRect.left + listRect.width / 2;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      mobileItemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(itemCenter - centerX);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === nearestIndex ? prev : nearestIndex));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveByPosition);
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveByPosition);
    };

    updateActiveByPosition();
    list.addEventListener("scroll", onScroll, { passive: true });
    list.addEventListener("touchmove", onScroll, { passive: true });
    list.addEventListener("pointermove", onScroll, { passive: true });
    list.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      list.removeEventListener("scroll", onScroll);
      list.removeEventListener("touchmove", onScroll);
      list.removeEventListener("pointermove", onScroll);
      list.removeEventListener("wheel", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <SiteContainer>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
          <div>
            <p className="text-subtitle text-yellow-600">What we do</p>
            <h2
              className="text-title mt-3 text-zinc-950"
              style={{
                "--title-size": "clamp(2rem, 4vw, 4rem)",
                "--title-leading": "1.06",
                "--title-tracking": "0.01em",
              } as React.CSSProperties}
            >
              Full-service production, from first concept to final master.
            </h2>
          </div>

          <p
            className="text-subtitle max-w-xl text-zinc-500 lg:justify-self-end"
            style={{
              "--subtitle-size": "clamp(0.9rem, 1.15vw, 1.05rem)",
              "--subtitle-leading": "1.6",
              "--subtitle-tracking": "0.02em",
            } as React.CSSProperties}
          >
            One studio, one taste - ten disciplines under a single roof. Hover an
            index to preview the craft.
          </p>
        </div>

        <div className="relative mt-12 h-168 overflow-hidden rounded-[2rem] border border-zinc-300/40 bg-zinc-950 shadow-[0_35px_95px_-30px_rgba(15,23,42,0.55)] sm:h-176 lg:h-184">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeService.image}
              initial={{ opacity: 0, scale: 1.08, x: 36 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.04, x: -36 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_46%)]" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/78 via-zinc-950/38 to-zinc-950/60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black/60 to-transparent" />

          <aside className="absolute inset-x-0 top-0 z-10 w-full md:left-0 md:h-full md:max-w-88 lg:max-w-104">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 via-black/34 to-transparent md:bg-linear-to-r md:from-black/48 md:via-black/22 md:to-transparent" />
            <div className="flex h-auto flex-col p-4 sm:p-5 md:h-full">
              <div className="mb-4 flex items-end justify-between gap-4">
                <p
                  className="text-subtitle text-white/75"
                  style={{
                    "--subtitle-size": "0.84rem",
                    "--subtitle-tracking": "0.16em",
                  } as React.CSSProperties}
                >
                  Nova Seven Services
                </p>
                <span
                  className="h-2.5 w-2.5 rounded-full shadow-[0_0_0_8px_rgba(255,255,255,0.13)]"
                  style={{ backgroundColor: activeService.accent }}
                />
              </div>

              <div className="relative z-10 md:flex-1">
                <div className="pointer-events-none absolute top-2 left-1/2 z-20 -translate-x-1/2 md:hidden">
                  <div className="relative h-8 w-[60vw] max-w-72">
                    <span className="absolute inset-y-0 left-0 w-px bg-white/85" />
                    <span className="absolute inset-y-0 right-0 w-px bg-white/85" />
                  </div>
                </div>

                <ol
                  ref={mobileListRef}
                  className="scrollbar-none flex snap-x snap-mandatory gap-1 overflow-x-auto pb-2 md:flex-1 md:flex-col md:gap-0 md:overflow-y-auto md:overflow-x-hidden md:pb-0 md:pr-1"
                >
                  {services.map((service, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <li
                        ref={(node) => {
                          mobileItemRefs.current[index] = node;
                        }}
                        key={service.title}
                        className="shrink-0 w-[56vw] max-w-72 snap-center first:ml-[22vw] last:mr-[22vw] md:w-auto md:max-w-none md:first:ml-0 md:last:mr-0 md:rounded-none md:bg-transparent md:px-0 md:shrink md:border-b md:border-white/12 md:last:border-b-0"
                      >
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIndex(index)}
                          onFocus={() => setActiveIndex(index)}
                          className={cn(
                            "group relative flex h-12 w-full items-center justify-center px-3 text-center transition-all duration-300 md:h-auto md:items-center md:justify-start md:py-4 md:pl-6 md:pr-0 md:text-left",
                            isActive ? "md:translate-x-1" : "md:hover:translate-x-1"
                          )}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="service-active-outline"
                                className="pointer-events-none absolute inset-y-3 left-0 hidden w-1 rounded-full bg-white md:block"
                              transition={{ type: "spring", stiffness: 370, damping: 34 }}
                            />
                          )}

                          <h3
                            className={cn(
                              "relative z-10 whitespace-nowrap font-semibold uppercase tracking-[0.08em] md:whitespace-normal md:normal-case md:tracking-[0.02em] text-[clamp(1.2rem,4.6vw,1.9rem)] md:text-[clamp(1rem,1.2vw,1.35rem)]",
                              isActive ? "text-white" : "text-white/56 group-hover:text-white"
                            )}
                            style={{ lineHeight: 1.1 }}
                          >
                            {service.title}
                          </h3>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </aside>

          <div className="absolute right-0 bottom-0 z-10 w-full max-w-xl p-6 sm:p-8">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border border-white/20 bg-black/35 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-5">
                <p
                  className="text-subtitle text-white/70"
                  style={{
                    "--subtitle-size": "0.8rem",
                    "--subtitle-tracking": "0.16em",
                  } as React.CSSProperties}
                >
                  Craft Preview
                </p>
                <span
                  className="h-2.5 w-2.5 rounded-full shadow-[0_0_0_10px_rgba(255,255,255,0.08)]"
                  style={{ backgroundColor: activeService.accent }}
                />
              </div>

              <h3
                className="text-title text-white"
                style={{
                  "--title-size": "clamp(1.5rem, 2.4vw, 2.35rem)",
                  "--title-leading": "1.12",
                  "--title-tracking": "0.02em",
                } as React.CSSProperties}
              >
                {activeService.title}
              </h3>
              <p
                className="text-subtitle mt-3 text-white/80"
                style={{
                  "--subtitle-size": "clamp(0.95rem, 1.25vw, 1.08rem)",
                  "--subtitle-leading": "1.72",
                  "--subtitle-tracking": "0.02em",
                } as React.CSSProperties}
              >
                {activeService.blurb}
              </p>
            </motion.div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
