import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import Accessibility from "@/components/Accessibility";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Trust />
        <Experience />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyButton />
      <Accessibility />
    </>
  );
}
