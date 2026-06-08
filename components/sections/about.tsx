import {
  FaShieldAlt,
  FaGem,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
const values = [
  {
    icon: FaShieldAlt,
    title: "Reliability",
    description:
      "Building solutions people can depend on, with stability, security, and long-term value at the core.",
  },
  {
    icon: FaGem,
    title: "Craftsmanship",
    description:
      "Attention to detail in every experience we create, from design and development to performance and usability.",
  },
  {
    icon: FaRocket,
    title: "Scalability",
    description:
      "Designed to grow alongside individuals, brands, startups, and organizations as their needs evolve.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Leveraging modern technologies to solve meaningful problems and create lasting digital impact.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container-width">
        <div className="max-w-6xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#818CF8]">
            About OdeyForge
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-4xl">
            Technology Built With Purpose.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              Technology is at its best when it solves real problems,
              creates opportunities, and helps people move forward.
            </p>

            <p>
              OdeyForge was founded with a simple belief: digital
              products should be practical, reliable, and built to
              make a meaningful impact. From personal portfolio
              websites and startup platforms to business software
              and scalable web applications, every solution we
              create is designed with purpose and long-term value
              in mind.
            </p>

            <p>
             Behind every project is a commitment to thoughtful design, clean engineering, and attention to detail. We believe technology should not only work well today but continue creating value as people, brands, and businesses grow.
            </p>

            <p>
              At OdeyForge, our goal is not simply to build websites
              or software. It is to create technology that helps
              people grow, connect, and succeed in a digital world.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {values.map((value) => {
  const Icon = value.icon;

  return (
    <div
      key={value.title}
      className="
        group
        h-full
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#4F46E5]/40
        hover:shadow-[0_20px_60px_rgba(79,70,229,0.18)]
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#818CF8]">
        <Icon size={22} />
      </div>

      <h3 className="relative mb-3 inline-block text-xl font-semibold text-white">
        {value.title}

        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
      </h3>

      <p className="text-sm leading-relaxed text-zinc-400">
        {value.description}
      </p>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}