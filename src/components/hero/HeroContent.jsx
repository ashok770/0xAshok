import Button from "../common/Button";
import { profile } from "../../data/profile";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="space-y-8">
      <p className="text-green-400 font-semibold tracking-wide">
        {profile.greeting}
      </p>

      <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">
        {profile.name}
      </h1>

      <div>
        <h2 className="text-3xl text-white font-semibold">{profile.title}</h2>

        <p className="mt-3 text-green-400 text-lg">
          Penetration Testing • Web Application Security • Secure Development
        </p>
      </div>

      <p className="text-slate-400 text-lg leading-8 max-w-xl">
        {profile.description}
      </p>

      <div className="flex gap-4">
        <Button>{profile.buttons.primary}</Button>

        <Button variant="secondary">{profile.buttons.secondary}</Button>
      </div>

      <div className="flex items-center gap-6 pt-2">
        <a
          href={profile.social.github}
          className="text-slate-400 hover:text-green-400 transition text-2xl"
        >
          <FaGithub />
        </a>

        <a
          href={profile.social.linkedin}
          className="text-slate-400 hover:text-green-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href={profile.social.email}
          className="text-slate-400 hover:text-green-400 transition text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
