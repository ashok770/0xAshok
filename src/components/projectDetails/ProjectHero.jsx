import { Link } from "react-router-dom";

const ProjectHero = ({ project }) => {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Back Button */}
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center text-sm text-green-400 hover:text-green-300"
        >
          ← Back to Projects
        </Link>

        {/* Category */}
        <span className="inline-block rounded-full border border-green-500 px-4 py-1 text-sm text-green-400">
          {project.category}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-bold text-white">{project.title}</h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl leading-8 text-slate-400">
          {project.shortDescription}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-500 hover:text-black"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
