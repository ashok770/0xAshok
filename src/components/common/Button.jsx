import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to }) => {
  const styles = {
    primary: "bg-green-500 hover:bg-green-400 text-black",
    secondary: "border border-green-500 text-green-400 hover:bg-green-500/10",
  };

  const className = `px-5 py-2 rounded-lg font-semibold transition ${styles[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
