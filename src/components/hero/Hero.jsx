import Container from "../common/Container";
import HeroContent from "./HeroContent";
import TerminalCard from "./TerminalCard";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-slate-950">
      <Container className="grid lg:grid-cols-2 gap-20 items-center">
        <HeroContent />

        <TerminalCard />
      </Container>
    </section>
  );
};

export default Hero;
