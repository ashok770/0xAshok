import Container from "../common/Container";

const ReportsHero = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Documentation
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">Security Reports</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Collection of penetration testing reports, vulnerability assessments,
          lab reports, and technical documentation.
        </p>
      </Container>
    </section>
  );
};

export default ReportsHero;
