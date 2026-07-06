const LabEnvironment = ({ lab }) => {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Lab Environment</h2>

        <p className="mt-8 leading-8 text-slate-400">{lab.environment}</p>
      </div>
    </section>
  );
};

export default LabEnvironment;
