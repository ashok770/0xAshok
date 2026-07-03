const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-green-500 hover:bg-green-400 text-black",
    secondary: "border border-green-500 text-green-400 hover:bg-green-500/10",
  };

  return (
    <button
      className={`px-5 py-2 rounded-lg font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
