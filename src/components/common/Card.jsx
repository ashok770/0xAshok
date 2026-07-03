const Card = ({ children }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
      {children}
    </div>
  );
};

export default Card;
