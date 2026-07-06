import { GraduationCap } from "lucide-react";

const ProjectLearning = ({ project }) => {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">What I Learned</h2>

        <div className="mt-10 space-y-5">
          {project.learning.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <GraduationCap className="mt-1 text-green-400" size={22} />
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLearning;
