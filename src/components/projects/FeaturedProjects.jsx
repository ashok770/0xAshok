import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import Button from "../common/Button";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <Container>
        <SectionTitle subtitle="My Work" title="Featured Projects" />

        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          A collection of cybersecurity and full-stack projects that demonstrate
          practical problem-solving, secure development, and hands-on technical
          skills.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button>View All Projects →</Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
