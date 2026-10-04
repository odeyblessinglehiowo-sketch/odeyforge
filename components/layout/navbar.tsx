"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between">
        
        {/* Logo */}
        <a href="/" aria-label="OdeyForge Home">
          <Image
            src="/wordmark6.png"
            alt="OdeyForge"
            width={300}
            height={80}
            priority
            className="h-auto w-[180px] sm:w-[220px] md:w-[260px]"
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
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-2xl text-white transition-all duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5] md:hidden"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-white/5 bg-[#030712]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6">
            <a
              href="#"
              onClick={closeMenu}
              className="text-sm font-bold text-[#4F46E5]"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
            >
              Services
            </a>

            <a
              href="#stack"
              onClick={closeMenu}
              className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
            >
              Tech Stack
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm font-bold text-zinc-300 transition-colors duration-300 hover:text-[#4F46E5]"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}