const WriteupCard = ({ writeup }) => {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400">
      {/* Category */}
      <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
        {writeup.category}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
        {writeup.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-400">{writeup.description}</p>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
          {writeup.readTime}
        </span>

        <button className="font-semibold text-green-400 transition hover:text-white">
          Read Article →
        </button>
      </div>
    </div>
  );
};

export default WriteupCard;
