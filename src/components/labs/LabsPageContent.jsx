import Container from "../common/Container";

import LabsHero from "./LabsHero";
import LabsStats from "./LabsStats";
import LabsFilter from "./LabsFilter";
import LabsGrid from "./LabsGrid";

const LabsPageContent = () => {
  return (
    <>
      <LabsHero />

      <section className="bg-slate-950 py-20">
        <Container>
          <LabsStats />

          <LabsFilter />

          <LabsGrid />
        </Container>
      </section>
    </>
  );
};

export default LabsPageContent;
