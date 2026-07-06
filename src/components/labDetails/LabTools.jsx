const LabTools = ({ lab }) => {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Tools Used</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {lab.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-green-500 px-5 py-2 text-green-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabTools;
