import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-white/[0.01]">
      <div className="container-width py-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
  <div className="h-[24px] flex items-center">
    <Image
      src="/wordmark6.png"
      alt="OdeyForge - Technology Built With Purpose"
      width={260}
      height={48}
      className="h-auto w-[260px]"
    />
  </div>

  <p className="mt-8 text-zinc-400 leading-relaxed">
    Technology Built With Purpose.
  </p>

  <p className="mt-4 text-zinc-500 leading-relaxed">
    Building modern websites,
    business software, and
    digital products.
  </p>
  <a
  href="mailto:info@odeyforge.com"
  className="mt-6 inline-block text-[#4F46E5] transition hover:text-white"
>
  info@odeyforge.com
</a>
</div>
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-zinc-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#stack"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Tech Stack
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="text-zinc-400">
                Web Development
              </li>

              <li className="text-zinc-400">
                Business Software
              </li>

              <li className="text-zinc-400">
                Portfolio Websites
              </li>

              <li className="text-zinc-400">
                Digital Solutions
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://github.com/odeyforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 transition hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 transition hover:text-white"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/odeyforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 transition hover:text-white"
                >
                  <FaInstagram size={18} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-16 border-t border-white/4 pt-5">
          <p className="text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} OdeyForge Technologies.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}