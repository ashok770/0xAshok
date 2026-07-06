const ReportCard = ({ report }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
      {/* Report Cover */}
      <div className="overflow-hidden">
        <img
          src={report.cover}
          alt={report.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
          {report.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">{report.title}</h3>

        <p className="mt-2 text-sm text-slate-400">{report.date}</p>

        <p className="mt-4 leading-7 text-slate-400">{report.description}</p>

        <div className="mt-auto flex gap-3 pt-8 w-full">
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-green-500 bg-green-500 px-4 py-3 text-center text-sm font-medium text-black transition hover:bg-green-400"
          >
            View PDF
          </a>

          <a
            href={report.downloadUrl}
            download
            className="flex-1 rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-center text-sm font-medium text-slate-300 transition hover:border-green-500 hover:text-green-400"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
