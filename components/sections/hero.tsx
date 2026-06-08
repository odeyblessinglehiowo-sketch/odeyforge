"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#4F46E5]/20 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-width py-20 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/10 px-4 py-2 text-sm text-[#818CF8]">
            Technology Company
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Engineering Digital Products That Move Businesses Forward.
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            OdeyForge builds modern websites, business software, and
            scalable digital solutions for organizations that demand
            reliability, performance, and growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-[#4F46E5] px-20 py-3 font-medium text-white shadow-lg shadow-[#4F46E5]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4F46E5]/30"
            >
              Start a Project
            </a>

            <a
              href="#services"
              className="rounded-xl border border-white/10 px-20 py-3 font-medium text-white transition-all duration-300 hover:border-[#4F46E5]/40 hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}