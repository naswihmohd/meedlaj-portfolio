"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import NavLink from "./components/NavLink";
import Sidebar from "./components/Sidebar";
import ThemeToggle, { getTheme } from "./components/ThemeToggle";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Constants } from "@/general/constans";
import Headroom from "react-headroom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/projects", label: "Projects" },
] as const;

const logoTransition = { type: "spring" as const, stiffness: 380, damping: 28 };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const isDarkMode = getTheme();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
     <Headroom
        style={{ zIndex: 700 }}
        className={`transition-all duration-300 ease-in-out`}
      >
        <header
          className={`sticky top-0 z-50 w-full backdrop-blur-md ${isDarkMode
              ? "bg-dark text-white"
              : "bg-white text-black"
            }`}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12"
            aria-label="Main"
          >
            <Link href="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
              <img src={Constants.LOGO} alt={Constants.LOGO_TEXT} className="w-6" />
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden items-center gap-8 md:flex md:gap-10">
                {navLinks.map(({ href, label }) => (
                  <NavLink
                    key={href}
                    href={href}
                    label={label}
                    active={pathname === href}
                  />
                ))}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-md border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
              <ThemeToggle />
              <motion.button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                {open ? (
                  <HiXMark className="h-6 w-6" aria-hidden />
                ) : (
                  <HiBars3 className="h-6 w-6" aria-hidden />
                )}
              </motion.button>
            </div>
          </nav>
        </header>

      </Headroom>

      <Sidebar
        isOpen={open}
        onClose={close}
        pathname={pathname}
        links={navLinks}
      />
    </>
  );
}
