import type { Metadata } from "next";

import { WorkOverview } from "@/components/sections/work-overview";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Nova Seven's selected projects across commercial, documentary, fashion, and music production.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `${siteConfig.name} | Work`,
    description:
      "Explore Nova Seven's selected projects across commercial, documentary, fashion, and music production.",
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return <WorkOverview />;
}
