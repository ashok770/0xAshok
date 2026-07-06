const ProjectOverview = ({ project }) => {
  return (
    <section className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Project Overview</h2>

        <p className="mt-6 text-slate-400 leading-8">{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectOverview;
