import type { Metadata } from "next";

import { BrandMarquee } from "@/components/sections/brand-marquee";
import { AboutUs } from "@/components/sections/about-us";
import { ContactUs } from "@/components/sections/contact-us";
import { FeaturedWork } from "@/components/sections/featured-work";
import { HomeVideoHero } from "@/components/sections/home-video-hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { TeamSection } from "@/components/sections/team-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Production and Post Studio",
  description:
    "Cinematic production and post for commercials, music visuals, and documentaries, crafted end-to-end by Nova Seven.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Production and Post Studio`,
    description:
      "Cinematic production and post for commercials, music visuals, and documentaries, crafted end-to-end by Nova Seven.",
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <HomeVideoHero />
      <BrandMarquee />
      <ServicesShowcase />
      <FeaturedWork />
      <AboutUs />
      <TeamSection />
      <ContactUs />
    </>
  );
}
