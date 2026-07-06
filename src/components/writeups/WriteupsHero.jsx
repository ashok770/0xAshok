import Container from "../common/Container";

const WriteupsHero = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Knowledge Base
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">
          Technical Writeups
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A collection of technical articles, walkthroughs, notes, and
          cybersecurity concepts that document my continuous learning journey.
        </p>
      </Container>
    </section>
  );
};

export default WriteupsHero;
