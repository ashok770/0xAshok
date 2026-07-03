const Button = ({ children, onClick, variant = "primary" }) => {
  const variants = {
    primary: "bg-green-500 hover:bg-green-400 text-black",

    secondary: "border border-green-500 text-green-400 hover:bg-green-500/10",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
