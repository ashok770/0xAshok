const LabCover = ({ lab }) => {
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <img
          src={lab.image}
          alt={lab.title}
          className="h-[500px] w-full rounded-2xl border border-slate-800 object-cover"
        />
      </div>
    </section>
  );
};

export default LabCover;
