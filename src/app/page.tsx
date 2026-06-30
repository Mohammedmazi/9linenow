import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Services from "@/components/services/Services";
import TechStrip from "@/components/technology/TechStrip";
import Solutions from "@/components/solutions/Solution";
import CTASection from "@/components/cta/CTASection";
import Process from "@/components/process/Process";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FlagshipSolution from "@/components/showcase/FlagshipSolution";

export default function Home() {
  return (
    <main className="bg-(--background)">
      <Navbar />
      <Hero />
      <TechStrip />
      <FlagshipSolution />
      <AboutSection />
      <WhyChooseUs />
      <Solutions />
      <Process />
      <Services />
      <CTASection />
      <Footer />
    </main>
  );
}