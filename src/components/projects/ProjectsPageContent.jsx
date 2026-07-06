import Container from "../common/Container";
import ProjectsHero from "./ProjectsHero";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsStats from "./ProjectsStats";

const ProjectsPageContent = () => {
  return (
    <>
      <ProjectsHero />

      <section className="bg-slate-950 py-20">
        <Container>
          <ProjectsStats />
          <ProjectsFilter />
          <ProjectsGrid />
        </Container>
      </section>
    </>
  );
};

export default ProjectsPageContent;
