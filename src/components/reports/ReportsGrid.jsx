import ReportCard from "./ReportCard";
import { reports } from "../../data/reports";

const ReportsGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default ReportsGrid;
