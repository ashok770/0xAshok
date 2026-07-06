import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import LabCard from "./LabCard";
import { labs } from "../../data/labs";

const FeaturedLabs = () => {
  const featuredLabs = labs.filter((lab) => lab.featured);

  return (
    <section id="labs" className="py-24 bg-slate-950">
      <Container>
        <SectionTitle
          subtitle="Hands-on Practice"
          title="Featured Security Labs"
        />

        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Practical cybersecurity labs completed in controlled environments to
          strengthen offensive security, network analysis, and web application
          testing skills.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredLabs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/labs">View All Labs →</Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedLabs;
