import Hero from "../components/hero/Hero";
import HeroStats from "../components/hero/HeroStats";
import FeaturedLabs from "../components/labs/FeaturedLabs";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import SkillsSection from "../components/skills/SkillsSection";
import AboutSection from "../components/about/AboutSection";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeaturedProjects />
      <FeaturedLabs />
      <SkillsSection />
      <AboutSection />
    </>
  );
};

export default Home;
