export const siteConfig = {
  name: "Nova Seven",
  url: "https://novaseven.studio",
  description:
    "Nova Seven is a production and post studio creating cinematic commercials, branded films, music visuals, and documentary storytelling.",
  seo: {
    keywords: [
      "video production studio",
      "post production studio",
      "commercial film production",
      "branded content studio",
      "documentary production",
      "music video production",
      "color grading",
      "film editing studio",
      "mumbai production house",
      "nova seven",
    ],
    ogImage: "/services/service-01.svg",
    locale: "en_US",
  },
  contact: {
    email: "hello@novaseven.studio",
    phone: "+91 98100 12476",
    city: "Mumbai",
    country: "IN",
  },
  nav: [
    { href: "/#services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
  cta: {
    href: "/#contact",
    label: "Book a Call",
  },
} as const;
