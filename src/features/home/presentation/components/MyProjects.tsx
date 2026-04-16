import projectPreview from "@/asset/project-image.png";

const projectCards = [
  {
    title: "CRM",
    category: "UI/UX Design",
    image: projectPreview.src,
    href: "#",
  },
  {
    title: "CRM",
    category: "UI/UX Design",
    image: projectPreview.src,
    href: "#",
  },
  {
    title: "CRM",
    category: "UI/UX Design",
    image: projectPreview.src,
    href: "#",
  },
];

export default function MyProjects() {
  const isDarkMode = false;
  const cardClassName = isDarkMode ? "bg-zinc-900" : "bg-white";
  const cardShadow = isDarkMode
    ? "0px 4px 60px 0px rgba(0, 0, 0, 0.45)"
    : "0px 4px 60px 0px #0000001A";

  return (
    <section
      className={`${isDarkMode ? "bg-dark text-white" : "bg-white text-black"}`}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-20 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">Projects</p>
            <h2
              id="projects-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-4xl"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              My Works
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-primary transition-colors hover:text-[#4a2fbb]"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className={`overflow-hidden rounded-sm ${cardClassName}`}
              style={{ boxShadow: cardShadow }}
            >
              <div className="h-[260px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-4">
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-secondary"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-1 text-sm font-medium ${
                    isDarkMode ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
