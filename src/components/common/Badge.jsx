const Badge = ({ children }) => {
  return (
    <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm">
      {children}
    </span>
  );
};

export default Badge;
