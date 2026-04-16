import aboutImg from "@/asset/about-img.png"
import { HiOutlineMapPin } from "react-icons/hi2";

const AboutMe = () => {
  const isDarkMode = false;
  const bodyTextClass = isDarkMode ? "text-zinc-300" : "text-zinc-700";

  return (
    <section
      className={`${
        isDarkMode ? "bg-dark text-white" : "bg-white text-black"
      }`}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[420px] lg:max-w-[460px]">
          <img
            src={aboutImg.src}
            alt="Mohammed Midilaj portrait"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto w-full max-w-xl">
          <h2
            id="about-heading"
            className="text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
          >
            About Me
          </h2>

          <p className={`mt-5 text-base leading-relaxed  ${bodyTextClass}`}>
            I&apos;m Mohammed Midilaj, a UI/UX Designer and Web Designer with
            hands-on experience in designing web and mobile applications. I
            specialize in user-centered design, wireframing, prototyping, and
            building clean visual systems that solve real user problems.
          </p>

          <p className={`mt-4 text-base leading-relaxed  ${bodyTextClass}`}>
            Alongside design, I&apos;m also a mobile videographer and video
            editor, which helps me bring strong storytelling and visual depth
            into my digital work.
          </p>

          <div className={`mt-6 flex items-center gap-2 text-sm font-medium ${bodyTextClass}`}>
            <HiOutlineMapPin className="h-5 w-5 text-primary" aria-hidden />
            <span>Malappuram, Kerala</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe
