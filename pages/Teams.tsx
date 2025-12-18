
import React, { useState } from 'react';
import { Player } from '../types';

interface Manager {
  name: string;
  image: string;
  nationality: string;
  role: string;
}

interface SquadPlayer extends Player {
  number: string;
  status: 'starting' | 'sub' | 'reserve';
  role?: string; 
}

interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  stadium: string;
  image: string;
  formation: string;
  manager: Manager;
  colors: { primary: string; secondary: string };
  squad: SquadPlayer[];
}

const TEAMS_DATA: Team[] = [
  {
    id: 'rm',
    name: 'Real Madrid',
    shortName: 'RMA',
    logo: 'RM',
    stadium: 'Santiago Bernabéu',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop',
    formation: '4-3-3',
    manager: {
      name: 'Carlo Ancelotti',
      role: 'Head Coach',
      nationality: 'Italy',
      image: 'https://picsum.photos/seed/ancelotti/400/400'
    },
    colors: { primary: '#ffffff', secondary: '#0a0c10' },
    squad: [
      { id: 'rm-1', name: 'Courtois', number: '1', team: 'Real Madrid', country: 'Belgium', image: 'https://picsum.photos/seed/courtois/400/400', position: 'Goalkeeper', status: 'starting', role: 'GK', stats: { games: 59, goals: 0, assists: 0 } },
      { id: 'rm-2', name: 'Carvajal', number: '2', team: 'Real Madrid', country: 'Spain', position: 'Defender', image: 'https://picsum.photos/seed/carvajal/400/400', status: 'starting', role: 'RB', stats: { games: 45, goals: 2, assists: 8 } },
      { id: 'rm-3', name: 'Militão', number: '3', team: 'Real Madrid', country: 'Brazil', position: 'Defender', image: 'https://picsum.photos/seed/militao/400/400', status: 'starting', role: 'RCB', stats: { games: 30, goals: 1, assists: 0 } },
      { id: 'rm-22', name: 'Rüdiger', number: '22', team: 'Real Madrid', country: 'Germany', position: 'Defender', image: 'https://picsum.photos/seed/rudiger/400/400', status: 'starting', role: 'LCB', stats: { games: 48, goals: 3, assists: 1 } },
      { id: 'rm-23', name: 'Mendy', number: '23', team: 'Real Madrid', country: 'France', position: 'Defender', image: 'https://picsum.photos/seed/mendy/400/400', status: 'starting', role: 'LB', stats: { games: 35, goals: 0, assists: 2 } },
      { id: 'rm-14', name: 'Camavinga', number: '14', team: 'Real Madrid', country: 'France', position: 'Midfielder', image: 'https://picsum.photos/seed/cama/400/400', status: 'starting', role: 'CDM', stats: { games: 38, goals: 2, assists: 4 } },
      { id: 'rm-8', name: 'Valverde', number: '8', team: 'Real Madrid', country: 'Uruguay', position: 'Midfielder', image: 'https://picsum.photos/seed/valverde/400/400', status: 'starting', role: 'RCM', stats: { games: 50, goals: 10, assists: 8 } },
      { id: 'rm-5', name: 'Bellingham', number: '5', team: 'Real Madrid', country: 'England', position: 'Midfielder', image: 'https://picsum.photos/seed/jude/400/400', status: 'starting', role: 'LCM', stats: { games: 42, goals: 20, assists: 12 } },
      { id: 'rm-11', name: 'Rodrygo', number: '11', team: 'Real Madrid', country: 'Brazil', position: 'Forward', image: 'https://picsum.photos/seed/rodry/400/400', status: 'starting', role: 'RW', stats: { games: 48, goals: 18, assists: 14 } },
      { id: 'rm-9', name: 'Mbappé', number: '9', team: 'Real Madrid', country: 'France', position: 'Forward', image: 'https://picsum.photos/seed/mbappe/400/400', status: 'starting', role: 'ST', stats: { games: 59, goals: 42, assists: 18 } },
      { id: 'rm-7', name: 'Vini Jr.', number: '7', team: 'Real Madrid', country: 'Brazil', position: 'Forward', image: 'https://picsum.photos/seed/vini/400/400', status: 'starting', role: 'LW', stats: { games: 55, goals: 28, assists: 22 } },
      { id: 'rm-sub1', name: 'Lunin', number: '13', team: 'Real Madrid', country: 'Ukraine', image: 'https://picsum.photos/seed/lunin/400/400', position: 'Goalkeeper', status: 'sub', stats: { games: 15, goals: 0, assists: 0 } },
      { id: 'rm-sub2', name: 'Modrić', number: '10', team: 'Real Madrid', country: 'Croatia', position: 'Midfielder', image: 'https://picsum.photos/seed/modric/400/400', status: 'sub', stats: { games: 40, goals: 3, assists: 6 } },
      { id: 'rm-sub3', name: 'Endrick', number: '16', team: 'Real Madrid', country: 'Brazil', position: 'Forward', image: 'https://picsum.photos/seed/endrick/400/400', status: 'sub', stats: { games: 10, goals: 4, assists: 0 } },
    ]
  },
  {
    id: 'fcb',
    name: 'Barcelona',
    shortName: 'BAR',
    logo: 'FCB',
    stadium: 'Spotify Camp Nou',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    formation: '4-3-3',
    manager: {
      name: 'Hansi Flick',
      role: 'Head Coach',
      nationality: 'Germany',
      image: 'https://picsum.photos/seed/flick/400/400'
    },
    colors: { primary: '#a50044', secondary: '#004d98' },
    squad: [
      { id: 'fcb-1', name: 'Ter Stegen', number: '1', team: 'Barcelona', country: 'Germany', image: 'https://picsum.photos/seed/ter/400/400', position: 'Goalkeeper', status: 'starting', role: 'GK', stats: { games: 35, goals: 0, assists: 0 } },
      { id: 'fcb-2', name: 'Koundé', number: '23', team: 'Barcelona', country: 'France', image: 'https://picsum.photos/seed/kounde/400/400', position: 'Defender', status: 'starting', role: 'RB', stats: { games: 38, goals: 2, assists: 4 } },
      { id: 'fcb-3', name: 'Cubarsí', number: '2', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/cubarsi/400/400', position: 'Defender', status: 'starting', role: 'RCB', stats: { games: 25, goals: 0, assists: 1 } },
      { id: 'fcb-4', name: 'Íñigo M.', number: '5', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/inigo/400/400', position: 'Defender', status: 'starting', role: 'LCB', stats: { games: 30, goals: 1, assists: 0 } },
      { id: 'fcb-5', name: 'Balde', number: '3', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/balde/400/400', position: 'Defender', status: 'starting', role: 'LB', stats: { games: 34, goals: 1, assists: 6 } },
      { id: 'fcb-6', name: 'Casadó', number: '17', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/casado/400/400', position: 'Midfielder', status: 'starting', role: 'CDM', stats: { games: 22, goals: 0, assists: 3 } },
      { id: 'fcb-7', name: 'Pedri', number: '8', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/pedri/400/400', position: 'Midfielder', status: 'starting', role: 'LCM', stats: { games: 28, goals: 5, assists: 8 } },
      { id: 'fcb-8', name: 'Dani Olmo', number: '20', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/olmo/400/400', position: 'Midfielder', status: 'starting', role: 'RCM', stats: { games: 18, goals: 8, assists: 4 } },
      { id: 'fcb-9', name: 'Yamal', number: '19', team: 'Barcelona', country: 'Spain', position: 'Forward', image: 'https://picsum.photos/seed/yamal/400/400', status: 'starting', role: 'RW', stats: { games: 30, goals: 12, assists: 14 } },
      { id: 'fcb-10', name: 'Lewandowski', number: '9', team: 'Barcelona', country: 'Poland', position: 'Forward', image: 'https://picsum.photos/seed/lewa/400/400', status: 'starting', role: 'ST', stats: { games: 32, goals: 25, assists: 5 } },
      { id: 'fcb-11', name: 'Raphinha', number: '11', team: 'Barcelona', country: 'Brazil', image: 'https://picsum.photos/seed/rapha/400/400', position: 'Forward', status: 'starting', role: 'LW', stats: { games: 35, goals: 15, assists: 15 } },
      { id: 'fcb-sub1', name: 'Gavi', number: '6', team: 'Barcelona', country: 'Spain', image: 'https://picsum.photos/seed/gavi/400/400', position: 'Midfielder', status: 'sub', stats: { games: 5, goals: 0, assists: 0 } },
    ]
  },
  {
    id: 'int',
    name: 'Inter Milan',
    shortName: 'INT',
    logo: 'INT',
    stadium: 'San Siro',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    formation: '3-5-2',
    manager: {
      name: 'Simone Inzaghi',
      role: 'Manager',
      nationality: 'Italy',
      image: 'https://picsum.photos/seed/inzaghi/400/400'
    },
    colors: { primary: '#0062ab', secondary: '#000000' },
    squad: [
      { id: 'int-1', name: 'Sommer', number: '1', team: 'Inter Milan', country: 'Switzerland', image: 'https://picsum.photos/seed/sommer/400/400', position: 'Goalkeeper', status: 'starting', role: 'GK', stats: { games: 38, goals: 0, assists: 0 } },
      { id: 'int-2', name: 'Bastoni', number: '95', team: 'Inter Milan', country: 'Italy', image: 'https://picsum.photos/seed/bastoni/400/400', position: 'Defender', status: 'starting', role: 'LCB', stats: { games: 35, goals: 1, assists: 3 } },
      { id: 'int-3', name: 'Lautaro', number: '10', team: 'Inter Milan', country: 'Argentina', image: 'https://picsum.photos/seed/lautaro/400/400', position: 'Forward', status: 'starting', role: 'ST', stats: { games: 40, goals: 28, assists: 5 } },
    ]
  },
  {
    id: 'che',
    name: 'Chelsea',
    shortName: 'CHE',
    logo: 'CHE',
    stadium: 'Stamford Bridge',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    formation: '4-2-3-1',
    manager: {
      name: 'Enzo Maresca',
      role: 'Manager',
      nationality: 'Italy',
      image: 'https://picsum.photos/seed/maresca/400/400'
    },
    colors: { primary: '#034694', secondary: '#ffffff' },
    squad: [
      { id: 'che-1', name: 'Sánchez', number: '1', team: 'Chelsea', country: 'Spain', image: 'https://picsum.photos/seed/sanchez/400/400', position: 'Goalkeeper', status: 'starting', role: 'GK', stats: { games: 30, goals: 0, assists: 0 } },
      { id: 'che-2', name: 'Palmer', number: '20', team: 'Chelsea', country: 'England', image: 'https://picsum.photos/seed/palmer/400/400', position: 'Midfielder', status: 'starting', role: 'RW', stats: { games: 42, goals: 25, assists: 15 } },
      { id: 'che-3', name: 'Jackson', number: '15', team: 'Chelsea', country: 'Senegal', image: 'https://picsum.photos/seed/jackson/400/400', position: 'Forward', status: 'starting', role: 'ST', stats: { games: 38, goals: 14, assists: 6 } },
    ]
  },
  {
    id: 'mun',
    name: 'Man United',
    shortName: 'MUN',
    logo: 'MUN',
    stadium: 'Old Trafford',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    formation: '4-3-3',
    manager: {
      name: 'Ruben Amorim',
      role: 'Manager',
      nationality: 'Portugal',
      image: 'https://picsum.photos/seed/amorim/400/400'
    },
    colors: { primary: '#da291c', secondary: '#000000' },
    squad: [
      { id: 'mun-1', name: 'Onana', number: '24', team: 'Man Utd', country: 'Cameroon', image: 'https://picsum.photos/seed/onana/400/400', position: 'Goalkeeper', status: 'starting', role: 'GK', stats: { games: 45, goals: 0, assists: 1 } },
      { id: 'mun-2', name: 'Fernandes', number: '8', team: 'Man Utd', country: 'Portugal', image: 'https://picsum.photos/seed/bruno/400/400', position: 'Midfielder', status: 'starting', role: 'RCM', stats: { games: 48, goals: 15, assists: 12 } },
      { id: 'mun-3', name: 'Rashford', number: '10', team: 'Man Utd', country: 'England', image: 'https://picsum.photos/seed/rashford/400/400', position: 'Forward', status: 'starting', role: 'LW', stats: { games: 40, goals: 12, assists: 5 } },
    ]
  }
];

const Teams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<SquadPlayer | null>(null);

  const getTacticalPos = (role: string) => {
    switch (role) {
      case 'GK': return { top: '88%', left: '50%' };
      case 'RB': return { top: '72%', left: '85%' };
      case 'RCB': return { top: '72%', left: '62%' };
      case 'LCB': return { top: '72%', left: '38%' };
      case 'LB': return { top: '72%', left: '15%' };
      case 'RCM': return { top: '48%', left: '72%' };
      case 'CDM': return { top: '51%', left: '50%' };
      case 'LCM': return { top: '48%', left: '28%' };
      case 'RW': return { top: '22%', left: '82%' };
      case 'ST': return { top: '15%', left: '50%' };
      case 'LW': return { top: '22%', left: '18%' };
      default: return { top: '50%', left: '50%' };
    }
  };

  if (selectedPlayer) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#0a0c10] animate-in fade-in slide-in-from-bottom-10 duration-500 overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src={selectedPlayer.image} className="w-full h-full object-cover opacity-60" alt={selectedPlayer.name} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10]/40 via-transparent to-[#0a0c10] shadow-inner"></div>
        </div>
        <header className="relative z-10 px-6 pt-14 flex justify-between items-center">
          <button onClick={() => setSelectedPlayer(null)} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-1">Performance</p>
             <h2 className="text-2xl font-black italic uppercase tracking-tighter leading-none">{selectedPlayer.name}</h2>
          </div>
          <div className="w-10"></div>
        </header>
        <div className="mt-auto px-6 pb-20 relative z-10">
          <div className="grid grid-cols-2 gap-3 mb-10">
            {[
              { label: 'Matches', value: selectedPlayer.stats.games },
              { label: 'Goals', value: selectedPlayer.stats.goals },
              { label: 'Assists', value: selectedPlayer.stats.assists },
              { label: 'Rating', value: '8.4' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-5 rounded-[2rem] flex flex-col justify-between h-28 shadow-xl">
                <span className="text-3xl font-black italic tracking-tighter text-[#00d4ff]">{stat.value}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-4 bg-[#00d4ff] rounded-3xl flex items-center justify-center text-black font-black uppercase tracking-[0.2em] italic text-xs shadow-[0_15px_40px_rgba(0,212,255,0.3)] active:scale-95 transition-transform">
            View Analytics Hub
          </button>
        </div>
      </div>
    );
  }

  if (selectedTeam) {
    const startingXI = selectedTeam.squad.filter(p => p.status === 'starting');
    const subs = selectedTeam.squad.filter(p => p.status === 'sub');
    const reserves = selectedTeam.squad.filter(p => p.status === 'reserve');

    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-500 pb-24">
        <header className="flex justify-between items-center px-1">
          <button onClick={() => setSelectedTeam(null)} className="flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Arena Roster</h2>
          </button>
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] font-black text-[#00d4ff] uppercase tracking-widest leading-none mb-1">{selectedTeam.formation}</span>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none truncate max-w-[100px]">{selectedTeam.name}</span>
          </div>
        </header>

        <section className="space-y-4">
           <div className="flex items-center gap-4 px-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Technical Lead</h3>
              <div className="flex-1 h-px bg-white/5"></div>
           </div>
           <div className="p-5 glass-card rounded-[2.5rem] border border-white/10 flex items-center gap-5 shadow-xl">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                <img src={selectedTeam.manager.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Manager" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black italic uppercase tracking-tighter leading-none">{selectedTeam.manager.name}</h4>
                <p className="text-[9px] font-black text-[#00d4ff] uppercase tracking-widest mt-1.5">{selectedTeam.manager.role} • {selectedTeam.manager.nationality}</p>
              </div>
           </div>
        </section>

        <section className="relative aspect-[3/4.8] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0c10]">
          <div className="absolute inset-4 border border-white/10 rounded-[2.8rem]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1/6 border-x border-b border-white/10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1/6 border-x border-t border-white/10"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-white/10 rounded-full"></div>
          </div>
          
          <div className="absolute inset-0 p-6">
            {startingXI.map((p) => {
              const pos = getTacticalPos(p.role || '');
              return (
                <button 
                  key={p.id}
                  onClick={() => setSelectedPlayer(p)}
                  className="absolute flex flex-col items-center gap-1.5 group active:scale-90 transition-all"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                >
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full border-2 border-[#00d4ff] overflow-hidden shadow-[0_0_15px_rgba(0,212,255,0.3)] bg-[#161b22] transition-transform group-hover:scale-110">
                      <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center">
                       <span className="text-[7px] font-black text-[#00d4ff]">{p.number}</span>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-black/80 backdrop-blur-md rounded-md border border-white/10 shadow-xl">
                    <span className="text-[6px] font-black text-white/90 uppercase tracking-[0.1em] whitespace-nowrap">{p.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
             <div className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
                <span className="text-[9px] font-black uppercase text-white/40 tracking-[0.3em] leading-none">Starting XI</span>
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_#00d4ff]"></div>
             </div>
          </div>
        </section>

        {subs.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-4 px-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Bench</h3>
              <div className="flex-1 h-px bg-white/5"></div>
            </div>
            <div className="grid grid-cols-6 gap-2 px-1">
              {subs.map((p) => (
                <PlayerCardUltraCompact key={p.id} player={p} onClick={() => setSelectedPlayer(p)} />
              ))}
            </div>
          </section>
        )}

        {reserves.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-4 px-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Reserves</h3>
              <div className="flex-1 h-px bg-white/5"></div>
            </div>
            <div className="grid grid-cols-6 gap-2 px-1">
              {reserves.map((p) => (
                <PlayerCardUltraCompact key={p.id} player={p} onClick={() => setSelectedPlayer(p)} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-16">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase">Clubs</h2>
        <span className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase italic">Season 25/26</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {TEAMS_DATA.map((team) => (
          <button
            key={team.id}
            onClick={() => setSelectedTeam(team)}
            className="w-full relative h-36 rounded-[2.5rem] overflow-hidden glass-card border border-white/10 group active:scale-[0.98] transition-all shadow-xl"
          >
            <img src={team.image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" alt={team.name} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/40 to-transparent p-6 flex flex-col justify-center items-start text-left">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                   <span className="text-sm font-black italic text-white">{team.shortName}</span>
                 </div>
                 <div>
                    <h3 className="text-lg font-black italic uppercase tracking-tighter leading-none">{team.name}</h3>
                    <p className="text-[8px] font-black text-[#00d4ff] uppercase tracking-[0.2em] mt-1">{team.stadium}</p>
                 </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const PlayerCardUltraCompact: React.FC<{ player: SquadPlayer; onClick: () => void }> = ({ player, onClick }) => (
  <button
    onClick={onClick}
    className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 shadow-md transition-all active:scale-95 bg-white/5"
  >
    <img src={player.image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={player.name} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    <div className="absolute bottom-0 inset-x-0 p-0.5 bg-black/70 backdrop-blur-sm">
      <span className="text-[6px] font-black text-white/90 uppercase truncate block text-center leading-none mb-0.5">{player.name.split(' ').pop()}</span>
      <span className="text-[5px] font-black text-[#00d4ff] block text-center">#{player.number}</span>
    </div>
  </button>
);

export default Teams;
