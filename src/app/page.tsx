import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Services from "@/components/services/Services";
import TechStrip from "@/components/technology/TechStrip";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <TechStrip />
      <Services />
      <Footer />
    </main>
  );
}