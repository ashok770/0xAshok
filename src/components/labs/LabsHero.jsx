import Container from "../common/Container";

const LabsHero = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Practical Security
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">Security Labs</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Hands-on penetration testing, vulnerability assessment, enumeration,
          exploitation, and defensive security labs completed in controlled
          environments.
        </p>
      </Container>
    </section>
  );
};

export default LabsHero;
