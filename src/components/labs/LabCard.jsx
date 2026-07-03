import Badge from "../common/Badge";
import Button from "../common/Button";

const difficultyColor = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

const LabCard = ({ lab }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
      {/* Title */}
      <h3 className="text-2xl font-bold text-white">{lab.title}</h3>

      {/* Difficulty & Platform */}
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Difficulty
          </p>

          <p
            className={`mt-1 font-semibold ${difficultyColor[lab.difficulty]}`}
          >
            {lab.difficulty}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Platform
          </p>

          <p className="mt-1 text-green-400 font-semibold">{lab.platform}</p>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white mb-3">Tools Used</h4>

        <div className="flex flex-wrap gap-2">
          {lab.tools.map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      </div>

      {/* Learned */}
      <div className="mt-6 flex-1">
        <h4 className="text-sm font-semibold text-white mb-3">Key Learnings</h4>

        <ul className="space-y-2 text-slate-400">
          {lab.learned.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <Button>Read Lab</Button>

        <span className="text-green-400 font-semibold">{lab.status} ✓</span>
      </div>
    </div>
  );
};

export default LabCard;
