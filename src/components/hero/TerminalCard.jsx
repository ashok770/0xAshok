const TerminalCard = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <p className="text-green-400">ashok@kali:~$ whoami</p>

      <p className="text-white mt-2">Ashok Tamata</p>

      <br />

      <p className="text-green-400">ashok@kali:~$ role</p>

      <p className="text-white mt-2">Aspiring Penetration Tester</p>

      <br />

      <p className="text-green-400">ashok@kali:~$ focus</p>

      <ul className="text-slate-300 mt-2 space-y-2">
        <li>• Web Application Security</li>
        <li>• Network Security</li>
        <li>• Secure Development</li>
      </ul>
    </div>
  );
};

export default TerminalCard;
