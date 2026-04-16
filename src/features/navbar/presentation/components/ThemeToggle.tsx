"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";
import { Constants } from "@/general/constans";


export const getTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(Constants.THEME_STORAGE_KEY);
  return storedTheme === "dark" ? true : false;
};

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = getTheme();
    setDark(storedTheme);
  }, []);

  const toggle = () => {
    if (dark === null) {
      return;
    }

    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem(
      Constants.THEME_STORAGE_KEY,
      nextDark ? "dark" : "light"
    );
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={
        dark === null
          ? "Toggle color theme"
          : dark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-secondary transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      whileTap={{ scale: 0.95 }}
    >
      {dark === null ? (
        <span className="h-5 w-5" aria-hidden />
      ) : dark ? (
        <HiSun className="h-5 w-5" aria-hidden />
      ) : (
        <HiMoon className="h-5 w-5" aria-hidden />
      )}
    </motion.button>
  );
}
