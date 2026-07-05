import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ContactCard from "./ContactCard";
import Button from "../common/Button";
import { profile } from "../../data/profile";

import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Let's Connect" />

        <p className="mx-auto mb-14 max-w-3xl text-center text-slate-400">
          I'm currently looking for opportunities in cybersecurity, penetration
          testing, and secure software development. If you'd like to discuss
          projects, internships, or collaboration, I'd be happy to connect.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <ContactCard
            icon={<HiOutlineEnvelope />}
            title="Email"
            value={profile.contact.email}
            link={`mailto:${profile.contact.email}`}
          />

          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/ashok770"
            link={profile.contact.github}
          />

          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="Connect with me"
            link={profile.contact.linkedin}
          />

          <ContactCard
            icon={<HiOutlineMapPin />}
            title="Location"
            value={profile.contact.location}
            link="https://maps.google.com"
          />
        </div>

        {/* CTA */}

        <div className="mt-16 rounded-2xl border border-green-500/20 bg-slate-900 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">Currently Seeking</h3>

          <p className="mt-4 text-slate-400">
            Junior Penetration Tester • Cybersecurity Internship • Security
            Research Opportunities
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button>Download Resume</Button>

            <Button variant="secondary">Email Me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
