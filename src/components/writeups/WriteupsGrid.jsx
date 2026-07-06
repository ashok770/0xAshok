import WriteupCard from "./WriteupCard";
import { writeups } from "../../data/writeups";

const WriteupsGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {writeups.map((writeup) => (
        <WriteupCard key={writeup.id} writeup={writeup} />
      ))}
    </div>
  );
};

export default WriteupsGrid;
