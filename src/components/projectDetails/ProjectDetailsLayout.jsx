import ProjectHero from "./ProjectHero";
import ProjectCover from "./ProjectCover";
import ProjectOverview from "./ProjectOverview";
import TechStack from "./TechStack";
import ProjectFeatures from "./ProjectFeatures";
import ProjectChallenges from "./ProjectChallenges";
import ProjectLearning from "./ProjectLearning";

const ProjectDetailsLayout = ({ project }) => {
  return (
    <main className="bg-slate-950 min-h-screen">
      <ProjectHero project={project} />

      <ProjectCover project={project} />

      <ProjectOverview project={project} />

      <TechStack project={project} />

      <ProjectFeatures project={project} />

      <ProjectChallenges project={project} />

      <ProjectLearning project={project} />
    </main>
  );
};

export default ProjectDetailsLayout;
