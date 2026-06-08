import { submitProjectInquiry } from "@/actions/project-action";

export default function StartProjectPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#4F46E5]/20 blur-[180px]" />

      <section className="container-width relative py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#818CF8]">
            Start a Project
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Let's Build Something Great Together.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Tell us about your project and we'll review your requirements
            and get back to you within 24 hours.
          </p>

          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_80px_rgba(79,70,229,0.08)] md:p-12">
            <form action={submitProjectInquiry} className="space-y-8">

              {/* Honeypot */}

              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Company / Organization
                  </label>

                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Project Type *
                  </label>

                  <select
                    name="projectType"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  >
                    <option value="">Select Project Type</option>
                    <option>Portfolio Website</option>
                    <option>Business Website</option>
                    <option>E-commerce Website</option>
                    <option>NGO Website</option>
                    <option>Web Application</option>
                    <option>Business Software</option>
                    <option>Custom Solution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Budget Range *
                  </label>

                  <select
                    name="budget"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                  >
                    <option value="">Select Budget Range</option>
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Business</option>
                    <option>Enterprise</option>
                    <option>Let's Discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Timeline
                </label>

                <input
                  name="timeline"
                  type="text"
                  placeholder="e.g. 2 Weeks, 1 Month"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Project Description *
                </label>

                <textarea
                  name="description"
                  required
                  rows={8}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition focus:border-[#4F46E5]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-fit rounded-xl bg-[#4F46E5] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,70,229,0.35)]"
                >
                  Submit Project Inquiry
                </button>

                <p className="text-sm text-zinc-500">
                  Typical response time: within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}