
import React from 'react';

const Injuries: React.FC = () => {
  const injuries = [
    { id: 1, player: 'Rodri', team: 'Man City', injury: 'ACL Rupture', return: 'Sept 2025', status: 'CRITICAL' },
    { id: 2, player: 'Dani Carvajal', team: 'Real Madrid', injury: 'Knee Injury', return: 'August 2025', status: 'CRITICAL' },
    { id: 3, player: 'Bukayo Saka', team: 'Arsenal', injury: 'Muscle Strain', return: 'Next Week', status: 'MINOR' },
    { id: 4, player: 'Lamine Yamal', team: 'Barcelona', injury: 'Ankle Strain', return: 'Dec 2024', status: 'MODERATE' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 pb-12">
      <h2 className="text-3xl font-black italic tracking-tighter uppercase">Medical Report</h2>
      
      <div className="space-y-3">
        {injuries.map(i => (
          <div key={i.id} className="p-5 glass-card rounded-2xl border border-white/5 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className={`w-1 h-12 rounded-full ${
                i.status === 'CRITICAL' ? 'bg-red-500' :
                i.status === 'MODERATE' ? 'bg-orange-500' : 'bg-[#d4ff00]'
              }`}></div>
              <div>
                <h3 className="font-bold text-sm tracking-tight uppercase">{i.player}</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase">{i.team} • {i.injury}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-black uppercase text-gray-600 mb-1">Return</span>
              <span className={`text-xs font-bold ${i.status === 'CRITICAL' ? 'text-red-400' : 'text-gray-200'}`}>
                {i.return}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 glass-card rounded-3xl bg-red-950/20 border border-red-500/20">
         <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
           </svg>
           Critical Alert
         </h4>
         <p className="text-sm text-gray-300">Manchester City confirms that Rodri will be sidelined for the remainder of the season. Huge blow for the title race.</p>
      </div>
    </div>
  );
};

export default Injuries;
