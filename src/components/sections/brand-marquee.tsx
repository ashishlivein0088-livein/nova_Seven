import { SiteContainer } from "@/components/layout/site-container";

const brands = [
  "Universal Music",
  "A24",
  "Netflix",
  "Sony Pictures",
  "Warner Music",
  "Apple Studios",
  "Ninja Tune",
  "VICE",
  "Rolling Stone",
  "Atlantic Records",
] as const;

export function BrandMarquee() {
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="border-y border-zinc-200/70 bg-white py-14 sm:py-16">
      <SiteContainer className="max-w-none px-2 sm:px-4 lg:px-6">
        <h2
          className="text-title text-center text-zinc-500"
          style={{
            "--title-size": "clamp(1.2rem, 1.5vw, 1.65rem)",
            "--title-leading": "1.75",
            "--title-tracking": "0.2em",
          } as React.CSSProperties}
        >
          Trusted by studios, brands, and artists worldwide
        </h2>

        <div className="pause-on-hover relative mx-auto mt-8 w-[96vw] overflow-hidden sm:mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <div className="group animate-marquee flex w-max items-center gap-7 pr-7 sm:gap-10 sm:pr-10">
            {loopedBrands.map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="text-subtitle cursor-default text-zinc-400 uppercase transition-colors duration-200 group-hover:text-zinc-300 hover:!text-zinc-950"
                style={{
                  "--subtitle-size": "clamp(1rem, 1.6vw, 1.5rem)",
                  "--subtitle-tracking": "0.1em",
                } as React.CSSProperties}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
