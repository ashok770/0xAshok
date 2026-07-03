import Badge from "../common/Badge";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500 transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-green-400 text-sm font-semibold">{project.category}</p>

      <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>

      <p className="text-slate-400 mt-4 leading-7">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <Button>View Details</Button>
        <Button variant="secondary">GitHub</Button>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
