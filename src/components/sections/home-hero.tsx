"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { SiteContainer } from "@/components/layout/site-container";
import { buttonVariants } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GridPattern
        width={48}
        height={48}
        x={-1}
        y={-1}
        className="mask-[radial-gradient(circle_at_center,white,transparent_75%)]"
      />

      <SiteContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5" />
            Structured Next.js starter
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Build faster with a clean app foundation.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            This project ships with route structure, reusable layout building
            blocks, and the core UI libraries you requested.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/work"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              View Work Page
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Next.js Docs
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-6 text-left sm:grid-cols-2">
          <article id="about" className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">About</h2>
            <p className="mt-3 text-muted-foreground">
              We build polished interfaces, conversion-driven landing pages, and
              production-grade frontend systems.
            </p>
          </article>

          <article id="contact" className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
            <p className="mt-3 text-muted-foreground">
              Ready to collaborate? Let&apos;s discuss your next product launch and
              design direction.
            </p>
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: "outline" }), "mt-5 inline-flex")}
            >
              Book a Call
            </Link>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}
