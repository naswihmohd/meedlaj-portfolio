"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

const easeInOut = [0.42, 0, 0.58, 1] as const;

const skillCards = [
  {
    title: "UI & UX Design",
    description:
      "I design intuitive, user-centered digital experiences through research, wireframing, and modern interfaces focused on usability and accessibility.",
    Icon: HiOutlinePencilSquare,
  },
  {
    title: "Logo Design",
    description:
      "I create impactful brand identities and memorable logos that clearly express a brand's vision and values.",
    Icon: MdOutlineDesignServices,
  },
  {
    title: "Videography & Editing",
    description:
      "I create cinematic video content with strong storytelling, smooth editing, and social-media-ready visuals.",
    Icon: RiMovie2Line,
  },
];

export default function Skills() {
  const isDarkMode = false;
  const reduceMotion = useReducedMotion();
  const cardClassName = isDarkMode
    ? "rounded-sm bg-zinc-900 p-6"
    : "rounded-sm bg-white p-6";
  const cardShadow = isDarkMode
    ? "0px 4px 60px 0px rgba(0, 0, 0, 0.45)"
    : "0px 4px 60px 0px #0000001A";

  const containerVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: easeInOut,
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: easeInOut,
      },
    },
  } as const;

  return (
    <section
      className={`${isDarkMode ? "bg-dark text-white" : "bg-white text-black"}`}
      aria-labelledby="skills-heading"
    >
      <motion.div
        className="mx-auto max-w-7xl px-5 pt-8 pb-20 sm:px-8 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <motion.p className="text-sm font-semibold text-primary" variants={itemVariants}>
          Skills
        </motion.p>
        <motion.h2
          id="skills-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-4xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          variants={itemVariants}
        >
          My Expertise
        </motion.h2>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {skillCards.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              className={cardClassName}
              style={{ boxShadow: cardShadow }}
              variants={itemVariants}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3
                className={`mt-5 text-[1.65rem] font-bold leading-tight ${
                  isDarkMode ? "text-white" : "text-secondary"
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-3 text-base leading-relaxed ${
                  isDarkMode ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
