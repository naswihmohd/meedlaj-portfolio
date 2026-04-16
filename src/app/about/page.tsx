import AboutMe from "@/features/home/presentation/components/AboutMe";
import Skills from "@/features/home/presentation/components/Skills";
import Home from "@/features/home/presentation/Home";

export default function Page() {
  return <>
  <main className="flex flex-1 flex-col">
    <AboutMe />
    <Skills />
  </main>
  </>;
}
