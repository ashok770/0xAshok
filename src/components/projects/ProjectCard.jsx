import Badge from "../common/Badge";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
      {/* Project Cover */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-8 w-full">
          <div className="flex-1">
            <Button>View Details</Button>
          </div>
          <div className="flex-1">
            <Button variant="secondary">GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
