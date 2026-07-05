const TimelineItem = ({ item, isLast }) => {
  return (
    <div className="relative flex gap-8">
      {/* Left Side */}
      <div className="flex flex-col items-center">
        {/* Circle */}
        <div className="h-5 w-5 rounded-full border-4 border-green-400 bg-slate-950"></div>

        {/* Line */}
        {!isLast && <div className="mt-2 h-full w-[2px] bg-slate-700"></div>}
      </div>

      {/* Right Side */}
      <div className="pb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
          {item.year}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>

        <p className="mt-3 max-w-2xl leading-8 text-slate-400">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
