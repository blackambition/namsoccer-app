
import React from 'react';

const Transfers: React.FC = () => {
  const transfers = [
    { id: 1, player: 'Viktor Gyökeres', from: 'Sporting', to: 'Man Utd', fee: '€85M', status: 'CONFIRMED' },
    { id: 2, player: 'Trent Alexander-Arnold', from: 'Liverpool', to: 'Real Madrid', fee: 'Free', status: 'RUMOR' },
    { id: 3, player: 'Florian Wirtz', from: 'Leverkusen', to: 'Man City', fee: '€120M', status: 'NEGOTIATION' },
    { id: 4, player: 'Alphonso Davies', from: 'Bayern', to: 'Barcelona', fee: 'Free', status: 'RUMOR' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 pb-12">
      <h2 className="text-3xl font-black italic tracking-tighter uppercase">Transfer Market</h2>
      
      <div className="space-y-4">
        {transfers.map(t => (
          <div key={t.id} className="glass-card rounded-3xl p-6 border border-white/5 relative group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded tracking-widest w-fit mb-2 ${
                  t.status === 'CONFIRMED' ? 'bg-green-500 text-black' : 
                  t.status === 'RUMOR' ? 'bg-orange-500 text-black' : 'bg-blue-500 text-black'
                }`}>
                  {t.status}
                </span>
                <h3 className="text-xl font-bold italic uppercase tracking-tight">{t.player}</h3>
              </div>
              <span className="text-lg font-black italic text-[#d4ff00]">{t.fee}</span>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold">{t.from[0]}</div>
                 <span className="text-sm font-bold text-gray-400 truncate max-w-[80px]">{t.from}</span>
              </div>
              <div className="flex flex-col items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-bold text-white truncate max-w-[80px]">{t.to}</span>
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border border-[#d4ff00]/30">{t.to[0]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transfers;
