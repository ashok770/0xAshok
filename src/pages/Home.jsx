import Hero from "../components/hero/Hero";
import HeroStats from "../components/hero/HeroStats";
import FeaturedProjects from "../components/projects/FeaturedProjects";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeaturedProjects />
    </>
  );
};

export default Home;
