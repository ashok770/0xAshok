import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SkillCategory from "./SkillCategory";
import { skills } from "../../data/skills";

const SkillsSection = () => {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Technical Skills"
          title="Skills & Technologies"
        />

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          Technologies, security tools, operating systems, and programming
          languages that I use while building applications and performing
          hands-on cybersecurity practice.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCategory
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
