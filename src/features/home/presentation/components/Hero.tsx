"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Constants } from "@/general/constans";
import heroProf from "@/asset/hero-img.png";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const isDarkMode = false;
  return (
    <section
      className={`relative overflow-hidden ${isDarkMode ? "bg-dark text-white" : "bg-white text-black"
        }`}
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">
        <motion.div
          className="flex max-w-xl flex-col gap-6 lg:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]  sm:text-sm"
          >
            Hey, I am Mohammed Midilaj
          </p>

          <h1
            id="hero-heading"
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.15] tracking-tight"
          >
            <span className="font- text-primary uppercase">
              UI/UX Designer
            </span>{" "}
            <span className="">
              crafting user-centered digital products and brand experiences.
            </span>
          </h1>

          <p className="max-w-md text-base leading-relaxed  sm:text-lg">
            I help startups and businesses turn ideas into intuitive, visually
            engaging digital experiences through thoughtful UI/UX design.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={Constants.GET_STARTED_LINK}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="/cv.pdf"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-900 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full justify-center lg:mx-0 lg:max-w-none lg:justify-end"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
        >
          <img className="w-full h-full max-w-[400px] object-cover" src={heroProf.src} alt="Mohammed Midilaj" />
        </motion.div>
      </div>

      {!isDarkMode && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-black/50 via-black/5 to-transparent" />
          <div className="pointer-events-none z-40 absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white via-white/70 to-transparent" />
        </>
      )}
    </section>
  );
}
