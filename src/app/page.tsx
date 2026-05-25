import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSection } from "@/components/ProblemSection";
import { PhotoDivider } from "@/components/PhotoDivider";
import { ServicesSection } from "@/components/ServicesSection";
import { NextSteps } from "@/components/NextSteps";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <ProblemSection />
        <PhotoDivider />
        <ServicesSection />
<TestimonialsSection />
        <NextSteps />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
