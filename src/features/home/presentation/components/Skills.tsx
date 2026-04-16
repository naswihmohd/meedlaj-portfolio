"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

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
  const cardClassName = isDarkMode
    ? "rounded-sm bg-zinc-900 p-6"
    : "rounded-sm bg-white p-6";
  const cardShadow = isDarkMode
    ? "0px 4px 60px 0px rgba(0, 0, 0, 0.45)"
    : "0px 4px 60px 0px #0000001A";

  return (
    <section
      className={`${isDarkMode ? "bg-dark text-white" : "bg-white text-black"}`}
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-20 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold text-primary">Skills</p>
        <h2
          id="skills-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-4xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          My Expertise
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className={cardClassName}
              style={{ boxShadow: cardShadow }}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
