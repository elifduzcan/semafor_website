import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";
import { Chatbot } from "../components/Chatbot";

export function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <CTABanner />
            <Footer />
            <Chatbot />
        </>
    );
}
