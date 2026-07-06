const categories = [
  "All",
  "Enumeration",
  "Web",
  "Privilege Escalation",
  "Networking",
];

const LabsFilter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300
            ${
              category === "All"
                ? "border-green-500 bg-green-500 text-black"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-green-500 hover:text-green-400"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default LabsFilter;
