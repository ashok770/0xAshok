import Hero from "../components/hero/Hero";
import HeroStats from "../components/hero/HeroStats";
import FeaturedLabs from "../components/labs/FeaturedLabs";
import FeaturedProjects from "../components/projects/FeaturedProjects";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeaturedProjects />
      <FeaturedLabs />
    </>
  );
};

export default Home;
