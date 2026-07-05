import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import WriteupCard from "./WriteupCard";
import { writeups } from "../../data/writeups";

const WriteupsSection = () => {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle subtitle="Knowledge Sharing" title="Latest Writeups" />

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          I document my learning, practical labs, and cybersecurity concepts
          through concise technical writeups. These articles help reinforce my
          understanding while sharing knowledge with the community.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {writeups.map((writeup) => (
            <WriteupCard key={writeup.id} writeup={writeup} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button>View All Writeups →</Button>
        </div>
      </Container>
    </section>
  );
};

export default WriteupsSection;
