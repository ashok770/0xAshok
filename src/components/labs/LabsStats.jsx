const stats = [
  {
    value: "15+",
    label: "Labs Completed",
  },
  {
    value: "10+",
    label: "Security Tools",
  },
  {
    value: "5",
    label: "Platforms",
  },
  {
    value: "100+",
    label: "Learning Hours",
  },
];

const LabsStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center"
        >
          <h3 className="text-5xl font-bold text-green-400">{item.value}</h3>

          <p className="mt-4 text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default LabsStats;
