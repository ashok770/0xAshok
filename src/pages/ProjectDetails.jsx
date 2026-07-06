import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

import ProjectDetailsLayout from "../components/projectDetails/ProjectDetailsLayout";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return <h1 className="text-center text-white py-20">Project not found.</h1>;
  }

  return <ProjectDetailsLayout project={project} />;
};

export default ProjectDetails;
