import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import AboutContent from "./AboutContent";
import { profile } from "../../data/profile";

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <Container>
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col items-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="h-72 w-72 rounded-2xl border-4 border-green-500 object-cover"
            />

            <div className="mt-8 w-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="space-y-5">
                <div>
                  <h4 className="text-green-400 font-semibold">🎓 Education</h4>

                  <p className="text-slate-300">B.E. Computer Science</p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold">
                    🎯 Career Goal
                  </h4>

                  <p className="text-slate-300">Junior Penetration Tester</p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold">🐧 Platforms</h4>

                  <p className="text-slate-300">Kali Linux • Ubuntu</p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold">📍 Location</h4>

                  <p className="text-slate-300">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <AboutContent />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
