import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
