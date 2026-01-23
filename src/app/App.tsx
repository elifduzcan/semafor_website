import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { FeaturedProjects } from "@/app/components/FeaturedProjects";
import { ClientLogos } from "@/app/components/ClientLogos";
import { CTABanner } from "@/app/components/CTABanner";
import { Footer } from "@/app/components/Footer";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <ClientLogos />
      <CTABanner />
      <Footer />
      <Chatbot />
    </div>
  );
}
