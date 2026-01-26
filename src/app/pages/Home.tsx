import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { FeaturedProjects } from "../components/FeaturedProjects";
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
            <Footer />
            <Chatbot />
        </>
    );
}
