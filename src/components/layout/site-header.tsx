"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import { SiteContainer } from "@/components/layout/site-container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const normalizeHashHref = (href: string) => {
    if (!href.startsWith("/#")) {
      return href;
    }

    const sectionId = href.slice(2).split("#")[0]?.trim();

    if (!sectionId) {
      return "/";
    }

    return `/#${sectionId}`;
  };

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false);

    const normalizedHref = normalizeHashHref(href);

    if (!normalizedHref.startsWith("/#")) {
      return;
    }

    const sectionId = normalizedHref.slice(2);

    if (pathname !== "/") {
      event.preventDefault();
      router.push(normalizedHref);
      return;
    }

    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", normalizedHref);
      return;
    }

    router.push(normalizedHref);
  };

  const isHomeTop = pathname === "/" && !isScrolled;
  const useLightHeader = isHomeTop && !isMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        useLightHeader
          ? "border-transparent bg-transparent text-white"
          : "border-b border-zinc-200/80 bg-white/95 text-zinc-900 backdrop-blur-xl"
      )}
    >
      <SiteContainer className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "text-base font-semibold tracking-[0.16em] transition-colors",
            useLightHeader ? "text-white" : "text-zinc-900"
          )}
          aria-label="Go to homepage"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center justify-center gap-2 md:flex md:gap-3"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={cn(
                "group relative rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 md:text-lg",
                useLightHeader
                  ? "text-white/85 hover:text-white"
                  : "text-zinc-700 hover:text-zinc-950"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
                  useLightHeader ? "bg-white" : "bg-zinc-900"
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.cta.href}
          onClick={(event) => handleNavClick(event, siteConfig.cta.href)}
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "hidden h-10 px-5 md:inline-flex",
            useLightHeader && "border-white/90 bg-white text-zinc-900 hover:bg-zinc-100"
          )}
        >
          {siteConfig.cta.label}
        </Link>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors md:hidden",
            useLightHeader
              ? "border-white/60 text-white hover:bg-white/15"
              : "border-zinc-300 text-zinc-900 hover:bg-zinc-100"
          )}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </SiteContainer>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-zinc-200/80 bg-white/95 px-4 pb-5 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          isMenuOpen ? "max-h-105 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
      >
        <SiteContainer className="px-0">
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile primary">
            {siteConfig.nav.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.cta.href}
            onClick={(event) => handleNavClick(event, siteConfig.cta.href)}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-1 inline-flex h-11 w-full border-zinc-300 text-sm tracking-[0.08em] uppercase"
            )}
          >
            {siteConfig.cta.label}
          </Link>
        </SiteContainer>
      </div>
    </header>
  );
}
