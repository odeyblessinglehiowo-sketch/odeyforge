export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern websites, web applications, and digital experiences engineered for performance, security, accessibility, and growth.",
    },
    {
      title: "Business Software",
      description:
        "Custom dashboards, portals, management systems, and internal tools tailored to business operations.",
    },
    {
      title: "Technology Solutions",
      description:
        "Strategic technology implementation, automation, and scalable digital infrastructure for modern organizations.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container-width">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#818CF8]">
            WHAT WE DO
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Technology Solutions Built For Growth.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            We help organizations build reliable software,
            modern digital experiences, and scalable systems
            that support long-term success.
          </p>
        </div>

       <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {services.map((service) => (
            <div
              key={service.title}
className="
group
rounded-3xl
border border-white/5
bg-white/[0.03]
p-8
transition-all duration-300
hover:-translate-y-1
hover:border-[#4F46E5]/30
hover:shadow-[0_20px_60px_rgba(79,70,229,0.18)]
"            >
              <h3 className="relative mb-5 inline-block text-xl font-semibold text-white">
                {service.title}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}