const categories = [
  "All",
  "Penetration Testing",
  "Vulnerability Assessment",
  "SOC",
  "Network Security",
  "Web Security",
];

const ReportsFilter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full border px-6 py-2 text-sm transition
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

export default ReportsFilter;
