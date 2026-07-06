import LabCard from "./LabCard";
import { labs } from "../../data/labs";

const LabsGrid = () => {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {labs.map((lab) => (
        <LabCard key={lab.id} lab={lab} />
      ))}
    </div>
  );
};

export default LabsGrid;
