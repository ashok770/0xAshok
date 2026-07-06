const LabLearning = ({ lab }) => {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Key Learnings</h2>

        <div className="mt-10 space-y-4">
          {lab.learning.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabLearning;
