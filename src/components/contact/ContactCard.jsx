const ContactCard = ({ icon, title, value, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
    >
      <div className="mb-4 text-3xl text-green-400">{icon}</div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-2 break-all text-slate-400 group-hover:text-slate-200 transition-colors">
        {value}
      </p>
    </a>
  );
};

export default ContactCard;
