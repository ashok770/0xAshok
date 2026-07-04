import Badge from "../common/Badge";

const SkillCategory = ({ category, items }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl">
      {/* Category Title */}
      <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
