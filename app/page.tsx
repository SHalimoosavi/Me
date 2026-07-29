import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Skills from "@/components/sections/Skills";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Milestones from "@/components/sections/Milestones";
import Certificates from "@/components/sections/Certificates";
import Testimonials from "@/components/sections/Testimonials";
import Ecosystem from "@/components/sections/Ecosystem";
import Updates from "@/components/sections/Updates";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Skills />
        <GitHubActivity />
        <Milestones />
        <Certificates />
        <Testimonials />
        <Ecosystem />
        <Updates />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
