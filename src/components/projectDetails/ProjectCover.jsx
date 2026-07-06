const ProjectCover = ({ project }) => {
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <img
          src={project.image}
          alt={project.title}
          className="h-[500px] w-full rounded-2xl border border-slate-800 object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default ProjectCover;
