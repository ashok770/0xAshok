import LabHero from "./LabHero";
import LabCover from "./LabCover";
import LabObjective from "./LabObjective";
import LabEnvironment from "./LabEnvironment";
import LabTools from "./LabTools";
import InfoSection from "../common/InfoSection";

const LabDetailsLayout = ({ lab }) => {
  return (
    <main className="min-h-screen bg-slate-950">
      <LabHero lab={lab} />

      <LabCover lab={lab} />

      <LabObjective lab={lab} />

      <LabEnvironment lab={lab} />

      <LabTools lab={lab} />

      <InfoSection title="Methodology" items={lab.methodology} />

      <InfoSection title="Findings" items={lab.findings} />

      <InfoSection title="Mitigation" items={lab.mitigation} />

      <InfoSection title="Key Learnings" items={lab.learning} />
    </main>
  );
};

export default LabDetailsLayout;
