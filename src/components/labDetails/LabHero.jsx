import { Link } from "react-router-dom";

const LabHero = ({ lab }) => {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Link
          to="/labs"
          className="mb-8 inline-flex items-center text-sm text-green-400 hover:text-green-300"
        >
          ← Back to Labs
        </Link>

        <div className="flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-green-500 px-4 py-1 text-sm text-green-400">
            {lab.category}
          </span>

          <span className="rounded-full border border-yellow-500 px-4 py-1 text-sm text-yellow-400">
            {lab.difficulty}
          </span>

          <span className="rounded-full border border-blue-500 px-4 py-1 text-sm text-blue-400">
            {lab.platform}
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-bold text-white">{lab.title}</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {lab.objective}
        </p>
      </div>
    </section>
  );
};

export default LabHero;
