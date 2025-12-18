
import React from 'react';
import { Match } from '../types';

const MOCK_MATCHES: Match[] = [
  { 
    id: 'live-1', 
    homeTeam: 'REAL MADRID', 
    awayTeam: 'BARCELONA', 
    homeLogo: 'https://images.unsplash.com/photo-1628108422470-363625732168?q=80&w=100&auto=format&fit=crop', 
    awayLogo: 'https://images.unsplash.com/photo-1628108422470-363625732168?q=80&w=100&auto=format&fit=crop', 
    time: '82\'', 
    date: 'LIVE', 
    venue: 'Santiago Bernabéu', 
    isLive: true, 
    score: '3 - 2' 
  },
  { 
    id: '2', 
    homeTeam: 'MAN CITY', 
    awayTeam: 'ARSENAL', 
    homeLogo: 'https://picsum.photos/seed/mci/100/100', 
    awayLogo: 'https://picsum.photos/seed/ars/100/100', 
    time: '19:45', 
    date: 'SAT, 07 DEC', 
    venue: 'Etihad Stadium' 
  },
  { 
    id: '3', 
    homeTeam: 'BAYERN', 
    awayTeam: 'PSG', 
    homeLogo: 'https://picsum.photos/seed/bay/100/100', 
    awayLogo: 'https://picsum.photos/seed/psg/100/100', 
    time: '21:00', 
    date: 'TUE, 10 DEC', 
    venue: 'Allianz Arena' 
  },
];

const Matches: React.FC = () => {
  const liveMatch = MOCK_MATCHES.find(m => m.isLive);
  const upcomingMatches = MOCK_MATCHES.filter(m => !m.isLive);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-6 duration-1000 pb-12">
      {/* Featured Broadcast Segment */}
      {liveMatch && (
        <section className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4ff00] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-ping"></span>
              Live Broadcast
            </h2>
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">La Liga • R15</span>
            </div>
          </div>
          
          <div className="relative p-10 rounded-[3.5rem] glass-card border border-[#d4ff00]/40 overflow-hidden shadow-[0_30px_60px_rgba(212,255,0,0.1)]">
            {/* Dynamic Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative flex justify-between items-center z-10">
              {/* Home Team */}
              <div className="flex flex-col items-center gap-4 flex-1">
                <div className="w-24 h-24 rounded-full bg-white/5 p-4 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-700">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-300 p-2 flex items-center justify-center shadow-lg">
                     <span className="text-black font-black text-2xl italic">RM</span>
                   </div>
                </div>
                <span className="text-xs font-black tracking-widest text-center uppercase leading-none">{liveMatch.homeTeam}</span>
              </div>

              {/* Central Scoreboard */}
              <div className="flex flex-col items-center px-4">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-[#d4ff00]/10 text-[#d4ff00] text-[9px] font-black rounded-lg border border-[#d4ff00]/20 tracking-widest">{liveMatch.time}</span>
                </div>
                <span className="text-6xl font-black italic tracking-tighter text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.4)]">
                  {liveMatch.score}
                </span>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mt-2">Aggregate 4-4</span>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center gap-4 flex-1">
                <div className="w-24 h-24 rounded-full bg-white/5 p-4 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-700">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-700 to-red-600 p-2 flex items-center justify-center shadow-lg border-2 border-yellow-500/30">
                     <span className="text-white font-black text-2xl italic">FCB</span>
                   </div>
                </div>
                <span className="text-xs font-black tracking-widest text-center uppercase leading-none">{liveMatch.awayTeam}</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex justify-between items-center text-[9px] font-black text-white/40 uppercase tracking-widest px-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2"/></svg>
                  {liveMatch.venue}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Watch Live
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fixture Schedule */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 px-1">Upcoming Fixtures</h3>
        <div className="space-y-4">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="p-6 rounded-[2.5rem] glass-card border border-white/5 flex items-center active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer group shadow-lg">
              <div className="flex items-center justify-end flex-1 gap-4">
                <span className="text-xs font-black uppercase tracking-tight group-hover:text-[#d4ff00] transition-colors">{match.homeTeam}</span>
                <div className="w-11 h-11 rounded-2xl bg-white/5 p-2.5 border border-white/10 flex items-center justify-center">
                   <span className="text-[10px] font-black text-white/40">{match.homeTeam[0]}</span>
                </div>
              </div>

              <div className="flex flex-col items-center px-8 min-w-[100px]">
                <span className="text-xs font-black italic text-[#d4ff00] tracking-widest">{match.time}</span>
                <span className="text-[8px] font-black text-white/20 uppercase mt-1 tracking-widest">{match.date}</span>
              </div>

              <div className="flex items-center justify-start flex-1 gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/5 p-2.5 border border-white/10 flex items-center justify-center">
                   <span className="text-[10px] font-black text-white/40">{match.awayTeam[0]}</span>
                </div>
                <span className="text-xs font-black uppercase tracking-tight group-hover:text-[#d4ff00] transition-colors">{match.awayTeam}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Matches;
