const TerminalCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>

        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-4 text-sm text-slate-400">Terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="space-y-6 p-6 font-mono text-sm">
        <div>
          <p className="text-green-400">ashok@kali:~$ whoami</p>

          <p className="mt-2 text-white">Ashok Tamata</p>
        </div>

        <div>
          <p className="text-green-400">ashok@kali:~$ role</p>

          <p className="mt-2 text-white">Penetration Testing | Web Security</p>
        </div>

        <div>
          <p className="text-green-400">ashok@kali:~$ focus</p>

          <ul className="mt-2 space-y-2 text-slate-300">
            <li>• Web Application Security</li>
            <li>• Network Penetration Testing</li>
            <li>• Secure Web Development</li>
          </ul>
        </div>

        <div>
          <p className="text-green-400">
            ashok@kali:~$
            <span className="animate-pulse">█</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
