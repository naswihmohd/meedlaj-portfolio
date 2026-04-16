"use client";

import aboutImg from "@/asset/about-img.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { motion, useReducedMotion } from "framer-motion";

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function AboutMe() {
  const isDarkMode = false;
  const reduceMotion = useReducedMotion();
  const bodyTextClass = isDarkMode ? "text-zinc-300" : "text-zinc-700";

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: easeInOut,
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  } as const;

  const textVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0 : 0.45, ease: easeInOut },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98, rotate: -2 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: easeInOut },
    },
  } as const;

  return (
    <section
      className={`${isDarkMode ? "bg-dark text-white" : "bg-white text-black"}`}
      aria-labelledby="about-heading"
    >
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="mx-auto w-full max-w-[420px] lg:max-w-[460px]"
          variants={imageVariants}
          {...(reduceMotion
            ? {}
            : {
                whileHover: { scale: 1.03, rotate: 0.5 },
                whileTap: { scale: 0.98 },
              })}
        >
          <img
            src={aboutImg.src}
            alt="Mohammed Midilaj portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="mx-auto w-full max-w-xl">
          <motion.h2
            id="about-heading"
            className="text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
            variants={textVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className={`mt-5 text-base leading-relaxed  ${bodyTextClass}`}
            variants={textVariants}
          >
            I&apos;m Mohammed Midilaj, a UI/UX Designer and Web Designer with
            hands-on experience in designing web and mobile applications. I
            specialize in user-centered design, wireframing, prototyping, and
            building clean visual systems that solve real user problems.
          </motion.p>

          <motion.p
            className={`mt-4 text-base leading-relaxed  ${bodyTextClass}`}
            variants={textVariants}
          >
            Alongside design, I&apos;m also a mobile videographer and video
            editor, which helps me bring strong storytelling and visual depth
            into my digital work.
          </motion.p>

          <motion.div
            className={`mt-6 flex items-center gap-2 text-sm font-medium ${bodyTextClass}`}
            variants={textVariants}
            {...(reduceMotion
              ? {}
              : {
                  whileHover: { y: -2 },
                  whileTap: { scale: 0.98 },
                })}
          >
            <HiOutlineMapPin className="h-5 w-5 text-primary" aria-hidden />
            <span>Malappuram, Kerala</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
