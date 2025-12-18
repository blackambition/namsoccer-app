
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Haaland', goals: 12 },
  { name: 'Salah', goals: 8 },
  { name: 'Palmer', goals: 7 },
  { name: 'Jackson', goals: 6 },
  { name: 'Mbeumo', goals: 6 },
];

const Statistics: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 pb-12">
      <h2 className="text-3xl font-black italic tracking-tighter uppercase">Season Stats</h2>

      <div className="glass-card rounded-3xl p-6 border border-white/5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4ff00]"></span>
          Top Scorers
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#8e8e93" fontSize={12} width={80} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{backgroundColor: '#1a1d23', borderRadius: '12px', border: '1px solid #333'}}
              />
              <Bar dataKey="goals" fill="#d4ff00" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Team Goals Avg</span>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-black italic">2.4</span>
            <span className="text-xs text-green-400 font-bold mb-1">+12%</span>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Possession High</span>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-black italic">68%</span>
            <span className="text-xs text-gray-400 font-bold mb-1">MCI</span>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Match Heatmap Area</h3>
        <div className="aspect-video bg-white/5 rounded-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pitch/800/450')] bg-cover opacity-20 grayscale"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Visualizing Data Streams...</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
