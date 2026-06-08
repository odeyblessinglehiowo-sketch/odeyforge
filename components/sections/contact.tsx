export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-30">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F46E5]/15 blur-[180px]" />

      <div className="container-width relative">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-24 text-center md:px-16">
          
          {/* Top Glow */}

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#4F46E5]/30 blur-[80px]" />

          <span className="relative text-sm font-semibold uppercase tracking-[0.2em] text-[#818CF8]">
            Let's Build Something Great
          </span>

          <h2 className="relative mx-auto mt-6 max-w-5xl text-4xl font-bold text-white md:text-6xl">
            Ready To Bring Your Idea To Life?
          </h2>

          <p className="relative mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Whether you're launching a personal portfolio,
            building a startup, or modernizing an existing
            business, OdeyForge can help transform your vision
            into a reliable, scalable, and impactful digital product.
          </p>

          <div className="relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/start-project"
              className="rounded-xl bg-[#4F46E5] px-20 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,70,229,0.35)]"
            >
              Start a Project
            </a>

            <a
              href="mailto:info@odeyforge.com"
              className="rounded-xl border border-white/10 px-20 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Send an Email
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
  Typical response time: within 24 hours.
</p>
        </div>
      </div>
    </section>
  );
}