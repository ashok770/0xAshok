const stats = [
  {
    number: "15+",
    label: "Security Labs",
  },
  {
    number: "5+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Writeups",
  },
  {
    number: "100+",
    label: "Learning Hours",
  },
];

const HeroStats = () => {
  return (
    <section className="border-t border-slate-800 py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h2 className="text-4xl font-bold text-green-400">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
