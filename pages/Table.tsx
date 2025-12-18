
import React from 'react';

const Table: React.FC = () => {
  const standings = [
    { pos: 1, team: 'Liverpool', p: 12, w: 9, d: 2, l: 1, pts: 29, logo: 'https://picsum.photos/seed/liv/40/40' },
    { pos: 2, team: 'Man City', p: 12, w: 8, d: 3, l: 1, pts: 27, logo: 'https://picsum.photos/seed/mci/40/40' },
    { pos: 3, team: 'Arsenal', p: 12, w: 7, d: 4, l: 1, pts: 25, logo: 'https://picsum.photos/seed/ars/40/40' },
    { pos: 4, team: 'Chelsea', p: 12, w: 6, d: 4, l: 2, pts: 22, logo: 'https://picsum.photos/seed/che/40/40' },
    { pos: 5, team: 'Aston Villa', p: 12, w: 6, d: 4, l: 2, pts: 22, logo: 'https://picsum.photos/seed/avl/40/40' },
    { pos: 6, team: 'Tottenham', p: 12, w: 6, d: 1, l: 5, pts: 19, logo: 'https://picsum.photos/seed/tot/40/40' },
    { pos: 7, team: 'Newcastle', p: 12, w: 5, d: 3, l: 4, pts: 18, logo: 'https://picsum.photos/seed/new/40/40' },
    { pos: 8, team: 'Man Utd', p: 12, w: 5, d: 2, l: 5, pts: 17, logo: 'https://picsum.photos/seed/mun/40/40' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 pb-12">
      <h2 className="text-3xl font-black italic tracking-tighter uppercase">League Table</h2>
      
      <div className="glass-card rounded-3xl overflow-hidden border border-white/5">
        <div className="grid grid-cols-12 bg-white/5 py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="col-span-1 text-center">POS</div>
          <div className="col-span-5 px-4">TEAM</div>
          <div className="col-span-1 text-center">P</div>
          <div className="col-span-1 text-center">W</div>
          <div className="col-span-1 text-center">D</div>
          <div className="col-span-1 text-center">L</div>
          <div className="col-span-2 text-center text-[#d4ff00]">PTS</div>
        </div>
        
        {standings.map((s, idx) => (
          <div key={s.team} className={`grid grid-cols-12 py-5 px-4 items-center border-t border-white/5 transition-colors hover:bg-white/5 ${idx < 4 ? 'border-l-4 border-l-[#d4ff00]' : ''}`}>
            <div className="col-span-1 text-center font-bold text-sm">{s.pos}</div>
            <div className="col-span-5 px-4 flex items-center gap-3">
              <img src={s.logo} className="w-8 h-8 rounded-full bg-white/5 p-1" alt={s.team} />
              <span className="font-bold text-sm tracking-tighter truncate uppercase">{s.team}</span>
            </div>
            <div className="col-span-1 text-center text-xs font-medium text-gray-400">{s.p}</div>
            <div className="col-span-1 text-center text-xs font-medium text-gray-400">{s.w}</div>
            <div className="col-span-1 text-center text-xs font-medium text-gray-400">{s.d}</div>
            <div className="col-span-1 text-center text-xs font-medium text-gray-400">{s.l}</div>
            <div className="col-span-2 text-center font-black text-sm text-[#d4ff00]">{s.pts}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
