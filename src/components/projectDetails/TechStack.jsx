const TechStack = ({ project }) => {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Technologies Used</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-green-500 px-5 py-2 text-green-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
