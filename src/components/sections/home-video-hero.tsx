import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeVideoHero() {
  return (
    <section className="relative h-dvh min-h-[40rem] w-full overflow-hidden bg-zinc-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-end px-6 pb-10 sm:px-10 sm:pb-14">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-medium tracking-[0.18em] text-white/80 uppercase">
            Creative Studio
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            Make a memorable first impression.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Video-led storytelling for brands that value clarity, craft, and
            performance.
          </p>
          <div className="mt-8">
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "gap-2 bg-white text-zinc-900 hover:bg-zinc-100"
              )}
            >
              Explore Services
              <ArrowDownRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
