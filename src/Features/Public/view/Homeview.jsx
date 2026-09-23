import Hero from "../components/Hero.jsx";
import Statistics from "../components/Statistics.jsx";
import ProblemSection from "../components/ProblemSection.jsx";
import CommunicationFlow from "../components/CommunicationFlow.jsx";
import TechnologySection from "../components/TechnologySection.jsx";
import ProductPreview from "../components/ProductPreview.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import UseCases from "../components/UseCases.jsx";
import TrustSection from "../components/TrustSection.jsx";
import FAQ from "../components/FAQ.jsx";
import DownloadPanel from "../components/DownloadPanel.jsx";
import FinalCTA from "../components/FinalCTA.jsx";

export default function HomeView() {
    return (
        <>
            <Hero />
            <Statistics />
            <ProblemSection />
            <CommunicationFlow />
            <TechnologySection />
            <ProductPreview />
            <FeatureCard />
            <HowItWorks />
            <UseCases />
            <TrustSection />
            <FAQ />
            <DownloadPanel />
            <FinalCTA />
        </>
    );
}