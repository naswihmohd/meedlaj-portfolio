"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { getTheme } from "./ThemeToggle";

export type SidebarNavLink = { readonly href: string; readonly label: string };

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  links: readonly SidebarNavLink[];
}

export default function Sidebar({
  isOpen,
  onClose,
  pathname,
  links,
}: SidebarProps) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const isDarkMode = getTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  const sidebarTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, damping: 30, stiffness: 320 };

  const overlayTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28 };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            key="nav-overlay"
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-60 bg-black/45 backdrop-blur-[2px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            onClick={onClose}
          />
          <motion.aside
            key="nav-sidebar"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{
              backgroundColor: isDarkMode ? "black" : "white",
              color: isDarkMode ? "white" : "black",
            }}
            className="fixed inset-y-0 right-0 z-70 flex w-[min(100vw-3rem,20rem)] flex-col shadow-2xl md:hidden"
            initial={reduceMotion ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? { x: 0 } : { x: "100%" }}
            transition={sidebarTransition}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex items-center justify-between border-b px-5 py-4 ${
                isDarkMode ? "border-zinc-800" : "border-zinc-200"
              }`}
            >
              <span className="text-lg font-black tracking-tight text-violet-600">
                MJ
              </span>
              <motion.button
                type="button"
                onClick={onClose}
                className={`rounded-md p-2 ${
                  isDarkMode
                    ? "text-white hover:bg-white/8"
                    : "text-black hover:bg-black/6"
                }`}
                aria-label="Close menu"
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Close</span>
                <HiXMark className="h-5 w-5" aria-hidden />
              </motion.button>
            </div>
            <motion.nav
              className="flex flex-1 flex-col gap-1 px-4 py-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.06,
                    delayChildren: reduceMotion ? 0 : 0.05,
                  },
                },
              }}
            >
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <motion.div
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: 16 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: reduceMotion ? 0 : 0.28 },
                      },
                    }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-3 text-lg font-medium transition-colors ${
                        active
                          ? isDarkMode
                            ? "bg-blue-950/50 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                          : isDarkMode
                            ? "text-white hover:bg-white/8"
                            : "text-black hover:bg-black/6"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: reduceMotion ? 0 : 0.28 },
                  },
                }}
                className="mt-4 px-3"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/#contact"
                    onClick={onClose}
                    className={`flex w-full items-center justify-center rounded-md border-2 py-3 text-base font-semibold transition-colors hover:text-white ${
                      isDarkMode
                        ? "border-violet-400 text-violet-400 hover:bg-violet-500"
                        : "border-violet-600 text-violet-600 hover:bg-violet-600"
                    }`}
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
