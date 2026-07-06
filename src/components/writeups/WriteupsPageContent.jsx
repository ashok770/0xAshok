import Container from "../common/Container";
import WriteupsHero from "./WriteupsHero";
import WriteupsStats from "./WriteupsStats";
import WriteupsFilter from "./WriteupsFilter";
import WriteupsGrid from "./WriteupsGrid";

const WriteupsPageContent = () => {
  return (
    <>
      <WriteupsHero />

      <section className="bg-slate-950 py-20">
        <Container>
          <WriteupsStats />

          <WriteupsFilter />

          <WriteupsGrid />
        </Container>
      </section>
    </>
  );
};

export default WriteupsPageContent;
