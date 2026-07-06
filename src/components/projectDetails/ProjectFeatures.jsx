import { CheckCircle } from "lucide-react";

const ProjectFeatures = ({ project }) => {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <CheckCircle className="mt-1 text-green-400" size={22} />

              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
