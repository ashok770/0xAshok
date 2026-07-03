import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import Container from "../common/Container";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-400 hover:text-green-300 transition"
        >
          0xAshok
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 font-medium"
                  : "text-slate-300 hover:text-white transition"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Resume Button */}
        <Button>Resume</Button>
      </Container>
    </nav>
  );
};

export default Navbar;
