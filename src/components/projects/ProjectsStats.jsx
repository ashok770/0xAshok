const stats = [
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "5",
    label: "Categories",
  },
  {
    value: "3",
    label: "Live Deployments",
  },
  {
    value: "100+",
    label: "Git Commits",
  },
];

const ProjectsStats = () => {
  return (
    <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-green-500"
        >
          <h2 className="text-4xl font-bold text-green-400">{item.value}</h2>

          <p className="mt-3 text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsStats;
