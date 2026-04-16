import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
    </main>
  );
}
