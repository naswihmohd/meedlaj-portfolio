import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About me" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#d9d0fb]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-secondary transition-colors hover:text-primary"
            aria-label="Go to home"
          >
            <HiMiniUser className="h-6 w-6" aria-hidden />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-secondary">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 text-secondary">
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-primary"
            >
              <FaFacebookF className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-primary"
            >
              <FaInstagram className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition-colors hover:text-primary"
            >
              <FaTwitter className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <hr className="my-8 border-black/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-secondary/90 sm:flex-row">
          <p>Made with by Midlaj</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
