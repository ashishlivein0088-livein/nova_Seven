import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { SiteContainer } from "@/components/layout/site-container";

const contactItems = [
  {
    label: "Email",
    value: "hello@novaseven.studio",
    href: "mailto:hello@novaseven.studio",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 98100 12476",
    href: "tel:+919810012476",
    icon: Phone,
  },
  {
    label: "Studio",
    value: "Mumbai, India",
    href: "https://maps.google.com",
    icon: MapPin,
  },
] as const;

export function ContactUs() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="text-subtitle text-yellow-600">Contact us</p>
            <h2
              className="text-title mt-3 text-zinc-950"
              style={
                {
                  "--title-size": "clamp(2rem, 4vw, 3.8rem)",
                  "--title-leading": "1.06",
                  "--title-tracking": "0.01em",
                } as React.CSSProperties
              }
            >
              Let&apos;s make something that feels timeless.
            </h2>
            <p
              className="text-subtitle mt-5 max-w-xl text-zinc-600"
              style={
                {
                  "--subtitle-size": "clamp(0.98rem, 1.22vw, 1.18rem)",
                  "--subtitle-leading": "1.75",
                  "--subtitle-tracking": "0.01em",
                } as React.CSSProperties
              }
            >
              Share your brief, timeline, and ambition. We usually reply within
              one business day with next steps and availability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Studio" ? "_blank" : undefined}
                    rel={item.label === "Studio" ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 transition-colors hover:border-zinc-900"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-subtitle text-yellow-700">{item.label}</p>
                        <p className="text-sm font-medium text-zinc-800">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-zinc-400 transition-colors group-hover:text-zinc-900" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8">
            <p className="text-subtitle text-yellow-700">Project enquiry</p>
            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-zinc-800">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-900"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-zinc-800">Email</span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-900"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800">Project type</span>
                <input
                  type="text"
                  placeholder="Brand film, campaign, documentary..."
                  className="h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-900"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800">Brief</span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and budget range..."
                  className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-900"
                />
              </label>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-900 px-7 text-sm font-semibold tracking-[0.04em] text-zinc-900 uppercase transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
