import { FaGithub, FaLinkedin } from "react-icons/fa";

import { HiOutlineEnvelope } from "react-icons/hi2";

import Container from "../common/Container";
import { profile } from "../../data/profile";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left */}

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-green-400">0xAshok</h2>

            <p className="mt-2 text-slate-400">Aspiring Penetration Tester</p>
          </div>

          {/* Center */}

          <div className="flex items-center gap-6 text-2xl">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-green-400"
            >
              <FaGithub />
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-green-400"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${profile.contact.email}`}
              className="text-slate-400 transition hover:text-green-400"
            >
              <HiOutlineEnvelope />
            </a>
          </div>

          {/* Right */}

          <div className="text-center md:text-right">
            <p className="text-slate-500">© {year} Ashok Tamata</p>

            <p className="mt-1 text-sm text-slate-600">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
