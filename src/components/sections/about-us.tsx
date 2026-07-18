import { SiteContainer } from "@/components/layout/site-container";

type AboutPoint = {
  title: string;
  description: string;
};

const aboutPoints: AboutPoint[] = [
  {
    title: "Mission",
    description:
      "To make work that outlasts the campaign - films that hold up on the tenth watch, not just the first.",
  },
  {
    title: "Approach",
    description:
      "Every frame is intentional: thoughtful casting, tactile production design, and post decisions that serve the story, not trends.",
  },
  {
    title: "Process",
    description:
      "From first treatment to final grade, one core team leads the entire pipeline so ideas stay sharp and execution stays seamless.",
  },
  {
    title: "Standard",
    description:
      "We prefer fewer projects done deeply, with measured craft, clear communication, and an obsession with detail at every step.",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <SiteContainer>
        <div className="max-w-4xl">
          <p className="text-subtitle text-yellow-600">About Nova Seven</p>
          <h2
            className="text-title mt-3 text-zinc-950"
            style={
              {
                "--title-size": "clamp(2rem, 4.2vw, 4.1rem)",
                "--title-leading": "1.05",
                "--title-tracking": "0.01em",
              } as React.CSSProperties
            }
          >
            A studio built on taste, craft, and quiet obsession.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:pr-8">
            <p
              className="text-subtitle max-w-xl text-zinc-600"
              style={
                {
                  "--subtitle-size": "clamp(1rem, 1.3vw, 1.25rem)",
                  "--subtitle-leading": "1.85",
                  "--subtitle-tracking": "0.01em",
                } as React.CSSProperties
              }
            >
              We started Nova Seven in a two-room studio in 2016 with a simple
              idea: that great production and great post belong under one roof,
              guided by the same taste.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-5"
              >
                <p className="text-subtitle text-yellow-600">{point.title}</p>
                <p
                  className="text-subtitle mt-3 text-zinc-700"
                  style={
                    {
                      "--subtitle-size": "0.98rem",
                      "--subtitle-leading": "1.7",
                      "--subtitle-tracking": "0.01em",
                    } as React.CSSProperties
                  }
                >
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
