import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between">
        <a href="/" aria-label="OdeyForge Home">
          <Image
            src="/wordmark6.png"
            alt="OdeyForge"
            width={300}
            height={80}
            priority
            className="h-auto w-[260px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-16 md:flex">
          <a
            href="#"
            className="text-sm font-bold text-[#4F46E5]"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
          >
            Services
          </a>

          <a
            href="#stack"
            className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
          >
            Tech Stack
          </a>

          <a
            href="#about"
            className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-2 w-2 items-center justify-center rounded-lg border border-white/10 text-4xl text-white transition-all duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5] md:hidden"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}