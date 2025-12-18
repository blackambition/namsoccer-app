
import React from 'react';
import { NewsItem } from '../types';

const MOCK_NEWS: NewsItem[] = [
  { id: 'n1', title: 'Tactical Analysis: How Amorim will fix Manchester United', summary: 'A deep dive into the Portuguese tactician\'s system and what it means for Bruno Fernandes.', image: 'https://picsum.photos/seed/news1/600/400', date: '2h ago', category: 'ANALYSIS' },
  { id: 'n2', title: 'Mbappe Breaks Silence on Real Madrid Start', summary: 'The French superstar discusses his adaptation to life in La Liga and his relationship with Vinicius Jr.', image: 'https://picsum.photos/seed/news2/600/400', date: '5h ago', category: 'INTERVIEW' },
  { id: 'n3', title: 'Top 5 Talents to Watch in the Next Transfer Window', summary: 'Scouting reports on the wonderkids destined for big moves this January.', image: 'https://picsum.photos/seed/news3/600/400', date: '1d ago', category: 'SCOUTING' },
];

const News: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 pb-12">
      <h2 className="text-3xl font-black italic tracking-tighter uppercase">Global News</h2>
      
      <div className="space-y-6">
        {MOCK_NEWS.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card mb-4 border border-white/5">
              <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute top-4 left-4">
                <span className="bg-[#d4ff00] text-black text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <span>Football Pro Exclusive</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight uppercase leading-tight group-hover:text-[#d4ff00] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
