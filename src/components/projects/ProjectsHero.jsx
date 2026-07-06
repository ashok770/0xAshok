import Container from "../common/Container";

const ProjectsHero = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            My Portfolio
          </p>

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Projects
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of cybersecurity, MERN stack, AI/ML, and software
            engineering projects that showcase my technical skills,
            problem-solving ability, and hands-on development experience.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsHero;
