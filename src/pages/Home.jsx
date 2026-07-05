import Hero from "../components/hero/Hero";
import HeroStats from "../components/hero/HeroStats";
import FeaturedLabs from "../components/labs/FeaturedLabs";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import SkillsSection from "../components/skills/SkillsSection";
import AboutSection from "../components/about/AboutSection";
import TimelineSection from "../components/timeline/TimelineSection";
import WriteupsSection from "../components/writeups/WriteupsSection";
import ContactSection from "../components/contact/ContactSection";
const Home = () => {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeaturedProjects />
      <FeaturedLabs />
      <SkillsSection />
      <AboutSection />
      <TimelineSection />
      <WriteupsSection />
      <ContactSection />
    </>
  );
};

export default Home;
