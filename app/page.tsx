import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import TechStack from "@/components/sections/tech-stack";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}