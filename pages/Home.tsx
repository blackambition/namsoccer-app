
import React from 'react';
import { AppSection } from '../types';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const visualLinks = [
    { title: 'Live Matchday', section: AppSection.MATCHES, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop', wide: true, tag: 'LIVE NOW' },
    { title: 'Market', section: AppSection.TRANSFERS, image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=400&auto=format&fit=crop', wide: false, tag: 'HOT' },
    { title: 'Analytics', section: AppSection.STATISTICS, image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop', wide: false, tag: 'NEW' },
    { title: 'Injury Lab', section: AppSection.INJURIES, image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=400&auto=format&fit=crop', wide: false, tag: 'UPDATE' },
    { title: 'Fan Club', section: AppSection.TEAMS, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop', wide: false, tag: 'PRO' },
  ];

  const sponsoredAd = {
    title: 'Precision Force 5',
    brand: 'ADIDAS X PRO',
    image: 'https://images.unsplash.com/photo-1556476272-b523069a23b9?q=80&w=1200&auto=format&fit=crop',
    cta: 'Explore Collection'
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Search Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-white/20 group-focus-within:text-[#00d4ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Search Arena..." 
          className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-4.5 pl-14 pr-6 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#00d4ff]/20 transition-all placeholder:text-white/20 backdrop-blur-md uppercase tracking-widest"
        />
      </div>

      {/* Hero Sponsored Ad */}
      <section className="relative h-64 rounded-[3.5rem] overflow-hidden border border-white/5 group shadow-2xl">
        <img 
          src={sponsoredAd.image} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" 
          alt="Ad" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent p-10 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#00d4ff] text-black text-[9px] font-black px-3.5 py-1 rounded-lg tracking-[0.2em] uppercase italic shadow-[0_0_20px_rgba(0,212,255,0.4)]">Sponsored</span>
            <span className="text-[10px] font-black text-white/40 tracking-widest uppercase italic">{sponsoredAd.brand}</span>
          </div>
          <h2 className="text-3xl font-black italic tracking-tighter leading-none mb-6 uppercase text-white drop-shadow-lg">{sponsoredAd.title}</h2>
          <button className="w-fit px-8 py-3.5 bg-[#00d4ff] text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all shadow-xl italic">
            {sponsoredAd.cta}
          </button>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Arena Hubs</h4>
          <span className="w-12 h-px bg-white/10"></span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {visualLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => onNavigate(link.section)}
              className={`relative rounded-[3rem] overflow-hidden glass-card group border border-white/5 transition-all active:scale-95 shadow-xl ${link.wide ? 'col-span-2 h-52' : 'col-span-1 h-48'}`}
            >
              <img src={link.image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt={link.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[9px] font-black text-[#00d4ff] tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase italic">{link.tag}</span>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none group-hover:translate-x-1 transition-transform">{link.title}</h3>
              </div>
              <div className="absolute top-8 right-8 w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#00d4ff] group-hover:text-black transition-all shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Merch Highlights (Horizontal Swipe) - Fixed Swiping Logic */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00d4ff]">Shop Drops</h4>
          <button onClick={() => onNavigate(AppSection.SHOP)} className="text-[9px] font-black uppercase text-white/30 tracking-widest hover:text-white transition-colors">View All</button>
        </div>
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6 snap-x snap-mandatory touch-pan-x">
          {[
            { name: 'Elite Jersey', price: '$89', img: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=400&auto=format&fit=crop' },
            { name: 'Training Pro', price: '$64', img: 'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=400&auto=format&fit=crop' },
            { name: 'Squad Ball', price: '$120', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop' },
            { name: 'Pitch Scarf', price: '$35', img: 'https://picsum.photos/seed/scarf2/400/400' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate(AppSection.SHOP)}
              className="snap-start flex-shrink-0 w-52 glass-card rounded-[3rem] overflow-hidden border border-white/5 group active:scale-[0.98] transition-all shadow-2xl relative cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-[#161b22] p-5">
                <img src={item.img} className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700" alt={item.name} />
                <div className="absolute top-7 right-7 bg-[#0a0c10] px-3.5 py-1.5 rounded-2xl shadow-lg border border-white/10">
                  <span className="text-[11px] font-black text-[#00d4ff] italic">{item.price}</span>
                </div>
              </div>
              <div className="p-7 pt-2">
                <h5 className="text-sm font-black uppercase tracking-tight text-white/90 truncate italic">{item.name}</h5>
                <p className="text-[9px] font-bold text-white/20 uppercase mt-1 tracking-widest italic">Official Drop</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Segment */}
      <section className="space-y-6 pb-12">
        <div className="flex items-center gap-3 px-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Arena TV</h4>
          <span className="flex-1 h-px bg-white/5"></span>
        </div>
        <div className="aspect-video rounded-[3.5rem] overflow-hidden border border-white/5 relative group cursor-pointer shadow-2xl">
          <img src="https://images.unsplash.com/photo-1575361204480-aadea2d1d7b3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt="Video" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#00d4ff]/20 backdrop-blur-2xl flex items-center justify-center border border-[#00d4ff]/30 group-hover:scale-110 group-hover:bg-[#00d4ff] transition-all group-hover:text-black group-hover:shadow-[0_0_50px_rgba(0,212,255,0.4)]">
              <svg className="h-12 w-12 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-[#0a0c10]/80 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-black italic text-2xl uppercase tracking-tighter leading-none mb-1">Tunnel Cam Uncut</h5>
                <p className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase italic">Behind the scenes at the Bernabéu</p>
              </div>
              <span className="bg-red-600 text-[9px] font-black px-3.5 py-1.5 rounded-lg text-white shadow-xl animate-pulse">LIVE EXCLUSIVE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
