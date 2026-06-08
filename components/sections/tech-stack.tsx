import Image from "next/image";

const technologies = [
  {
  name: "Next.js",
  image: "/tech/nextjs.png",
  invert: true,

    description: "Production-grade React framework for modern web applications.",
  },
  {
    name: "React",
    image: "/tech/react.png",
    description: "Component-driven UI architecture for scalable interfaces.",
  },
  {
    name: "TypeScript",
    image: "/tech/typescript.png",
    description: "Type-safe development for reliability and maintainability.",
  },
  {
    name: "Tailwind CSS",
    image: "/tech/tailwind.png",
    description: "Utility-first styling for rapid and consistent development.",
  },
  {
    name: "Node.js",
    image: "/tech/nodejs2.png",
    description: "Fast and scalable server-side JavaScript runtime.",
  },
  {
    name: "PostgreSQL",
    image: "/tech/postgresql.png",
    description: "Robust relational database built for modern applications.",
  },
  {
    name: "Supabase",
    image: "/tech/supabase.png",
    description: "Backend infrastructure with authentication and database tools.",
  },
  {
    name: "Vercel",
    image: "/tech/vercel.png",
    invert: true,
    description: "Global deployment platform optimized for modern web apps.",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-32">
      <div className="container-width">
        <div className="mb-20 max-w-4xl">
  <span className="text-sm font-bold uppercase tracking-wider text-[#818CF8]">
    Technology Stack
  </span>

  <h2 className="mt-4 text-4xl font-bold text-white md:text-4xl">
    Powered By Industry-Leading Technologies.
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
    We build modern websites, business software, and scalable digital
    products using proven technologies trusted by leading companies.
  </p>
</div>
        

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl border border-white/15 bg-white/[0.02] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/50"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
               <Image
  src={tech.image}
  alt={tech.name}
  width={48}
  height={48}
  className={`h-20 w-20 object-contain ${
  tech.invert ? "invert" : ""
}`}
/>
              </div>

              <h3 className="relative mb-3 inline-block text-xl font-semibold text-white">
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
                {tech.name}
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}