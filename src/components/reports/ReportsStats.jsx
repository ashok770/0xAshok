const stats = [
  { value: "12+", label: "Reports" },
  { value: "5", label: "Categories" },
  { value: "4", label: "Platforms" },
  { value: "100+", label: "Pages Written" },
];

const ReportsStats = () => {
  return (
    <div className="grid gap-6 py-12 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center"
        >
          <h2 className="text-4xl font-bold text-green-400">{item.value}</h2>

          <p className="mt-3 text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportsStats;
