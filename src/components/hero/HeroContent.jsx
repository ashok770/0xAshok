import Button from "../common/Button";
import { profile } from "../../data/profile";

const HeroContent = () => {
  return (
    <div className="space-y-6">
      <p className="text-green-400 font-semibold">{profile.greeting}</p>

      <h1 className="text-6xl font-bold text-white">{profile.name}</h1>

      <div>
        <h2 className="text-2xl text-slate-300">{profile.title}</h2>

        <p className="text-green-400 mt-2">{profile.subtitle}</p>
      </div>

      <p className="text-slate-400 leading-8 max-w-xl">{profile.description}</p>

      <div className="flex gap-4">
        <Button>{profile.buttons.primary}</Button>

        <Button variant="secondary">{profile.buttons.secondary}</Button>
      </div>
    </div>
  );
};

export default HeroContent;
