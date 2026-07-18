import { SiteContainer } from "@/components/layout/site-container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/70 py-12 sm:py-14">
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,0.6fr)] lg:gap-12">
          <div>
            <p className="text-subtitle text-yellow-600">Nova Seven</p>
            <p
              className="text-subtitle mt-4 max-w-xl text-zinc-600"
              style={
                {
                  "--subtitle-size": "0.96rem",
                  "--subtitle-leading": "1.7",
                  "--subtitle-tracking": "0.01em",
                } as React.CSSProperties
              }
            >
              A production and post studio crafting films with taste, craft,
              and quiet obsession.
            </p>
          </div>

          <div>
            <p className="text-subtitle text-yellow-700">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-subtitle text-yellow-700">Reach</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@novaseven.studio"
                  className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  hello@novaseven.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+919810012476"
                  className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  +91 98100 12476
                </a>
              </li>
              <li>
                <span className="text-sm font-medium text-zinc-700">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-5 text-xs text-zinc-500">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
