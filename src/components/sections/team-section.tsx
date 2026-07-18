import { SiteContainer } from "@/components/layout/site-container";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Ava Moreno",
    role: "Founder & Executive Producer",
    bio: "Fifteen years across broadcast, streaming, and brand - Ava keeps every project on budget and above the line.",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jonas Halberg",
    role: "Co-Founder & Director",
    bio: "A director whose commercial reel spans four continents and whose short films have played Cannes and TIFF.",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rin Takeda",
    role: "Creative Director",
    bio: "Rin translates strategy into image - she&apos;s led campaigns for global fashion, tech, and hospitality brands.",
    imageSrc: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Marcus Ade",
    role: "Head of Post",
    bio: "Colorist and finishing lead. Marcus has graded features for A24 and campaigns for the world&apos;s top houses.",
    imageSrc: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-16 sm:py-24">
      <SiteContainer>
        <div className="max-w-4xl">
          <p className="text-subtitle text-yellow-600">Team</p>
          <h2
            className="text-title mt-3 text-zinc-950"
            style={
              {
                "--title-size": "clamp(2rem, 4vw, 4rem)",
                "--title-leading": "1.06",
                "--title-tracking": "0.01em",
              } as React.CSSProperties
            }
          >
            The people behind the frames.
          </h2>
          <p
            className="text-subtitle mt-5 max-w-2xl text-zinc-600"
            style={
              {
                "--subtitle-size": "clamp(0.98rem, 1.2vw, 1.18rem)",
                "--subtitle-leading": "1.75",
                "--subtitle-tracking": "0.01em",
              } as React.CSSProperties
            }
          >
            A compact senior team that stays close to every decision, from the
            first treatment to final delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group">
              <div className="relative aspect-3/4 overflow-hidden bg-zinc-200">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <h3 className="mt-5 text-4xl leading-none font-semibold tracking-tight text-zinc-950">
                {member.name}
              </h3>
              <p
                className="text-subtitle mt-2 text-yellow-700 uppercase"
                style={
                  {
                    "--subtitle-size": "0.84rem",
                    "--subtitle-tracking": "0.2em",
                  } as React.CSSProperties
                }
              >
                {member.role}
              </p>
              <p
                className="text-subtitle mt-4 text-zinc-600"
                style={
                  {
                    "--subtitle-size": "clamp(1.02rem, 1.2vw, 1.08rem)",
                    "--subtitle-leading": "1.7",
                    "--subtitle-tracking": "0.01em",
                  } as React.CSSProperties
                }
              >
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
