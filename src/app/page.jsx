import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function MainPage() {
  return (
    <div className="bg-beige text-gray-900 scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <nav className="fixed top-0 w-full p-4 bg-white shadow-md flex justify-center gap-6 text-lg font-semibold z-50">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
