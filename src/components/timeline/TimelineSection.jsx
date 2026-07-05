import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TimelineItem from "./TimelineItem";
import { timeline } from "../../data/timeline";

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          subtitle="My Journey"
          title="Learning & Career Timeline"
        />

        <p className="mx-auto mb-16 max-w-3xl text-center text-slate-400">
          Every project, lab, and internship has helped me grow from a
          full-stack developer into an aspiring penetration tester. This
          timeline highlights the key milestones of my technical journey.
        </p>

        <div className="mx-auto max-w-4xl">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TimelineSection;
