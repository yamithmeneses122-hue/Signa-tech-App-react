import Hero from "../components/Hero";
import Statistics from "../components/stadistics";
import TechnologySection from "../components/TechnologySection";
import DownloadPanel from "../components/DownloadPanel";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";

export default function HomeView() {
    return (
        <>
            <Hero />

            <Statistics />

            <TechnologySection />

            <DownloadPanel />

            <FeatureCard />

            <HowItWorks />
        </>
    );
}