import Container from "../common/Container";
import ReportsHero from "./ReportsHero";
import ReportsStats from "./ReportsStats";
import ReportsFilter from "./ReportsFilter";
import ReportsGrid from "./ReportsGrid";

const ReportsPageContent = () => {
  return (
    <>
      <ReportsHero />

      <section className="bg-slate-950 py-20">
        <Container>
          <ReportsStats />

          <ReportsFilter />

          <ReportsGrid />
        </Container>
      </section>
    </>
  );
};

export default ReportsPageContent;
