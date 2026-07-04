import { profile } from "../../data/profile";
import Button from "../common/Button";

const AboutContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-white">{profile.about.heading}</h2>

      <p className="leading-8 text-slate-400">{profile.about.description}</p>

      <p className="leading-8 text-slate-400">{profile.about.experience}</p>

      <p className="leading-8 text-slate-400">{profile.about.goal}</p>

      <Button>Download Resume</Button>
    </div>
  );
};

export default AboutContent;
