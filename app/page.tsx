import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skill";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-full flex-col items-center justify-between p-4 sm:p-24 overflow-x-hidden">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
