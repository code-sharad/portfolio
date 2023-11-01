import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skill";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills/>
      <Experience/>
    </main>
  );
}
