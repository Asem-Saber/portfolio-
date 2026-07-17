import Hero from "./_components/Hero";
import About from "./_components/About";
import TechStack from "./_components/TechStack";
import ProjectList from "./_components/ProjectList";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <ProjectList />
      <Experience />
      <Contact />
    </>
  );
}
