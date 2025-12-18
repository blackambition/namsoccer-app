
import React, { useState } from 'react';
import { ShopItem } from '../types';

const MOCK_ITEMS: ShopItem[] = [
  { id: 's1', name: 'RMA Elite Home 24/25', price: 120, image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=400&auto=format&fit=crop', team: 'REAL MADRID', category: 'jersey' },
  { id: 's2', name: 'FCB Catalan Scarf', price: 35, image: 'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=400&auto=format&fit=crop', team: 'BARCELONA', category: 'scarf' },
  { id: 's3', name: 'UCL Pro Match Ball', price: 150, image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop', team: 'LEAGUE', category: 'ball' },
  { id: 's4', name: 'MCI Training Top', price: 75, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop', team: 'MAN CITY', category: 'jersey' },
  { id: 's5', name: 'LIV Heritage Jacket', price: 110, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop', team: 'LIVERPOOL', category: 'accessory' },
  { id: 's6', name: 'Elite Pitch Boots', price: 240, image: 'https://images.unsplash.com/photo-1556476272-b523069a23b9?q=80&w=400&auto=format&fit=crop', team: 'PRO', category: 'accessory' },
  { id: 's7', name: 'PSG Away Kit 24/25', price: 120, image: 'https://picsum.photos/seed/psgkit/400/400', team: 'PARIS SG', category: 'jersey' },
  { id: 's8', name: 'Bayern Stealth Scarf', price: 30, image: 'https://picsum.photos/seed/bayernscarf/400/400', team: 'BAYERN', category: 'scarf' },
  { id: 's9', name: 'INT Third Jersey', price: 95, image: 'https://picsum.photos/seed/inter/400/400', team: 'INTER MILAN', category: 'jersey' },
  { id: 's10', name: 'CHE Pre-Match Kit', price: 65, image: 'https://picsum.photos/seed/chelsea/400/400', team: 'CHELSEA', category: 'jersey' },
];

const Shop: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const hotDrops = MOCK_ITEMS.slice(0, 5);
  const jerseys = MOCK_ITEMS.filter(item => item.category === 'jersey');
  const accessories = MOCK_ITEMS.filter(item => item.category !== 'jersey');

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-1000 pb-24">
      <header className="flex justify-between items-end px-1">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Arena Shop</h2>
          <p className="text-[10px] font-black text-[#00d4ff] uppercase tracking-[0.3em] mt-2 italic">Official Marketplace</p>
        </div>
        <button className="relative w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-all active:scale-90 hover:bg-[#00d4ff]/10 group">
          <svg className="w-6 h-6 text-white group-hover:text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00d4ff] text-black text-[10px] font-black rounded-lg flex items-center justify-center shadow-[0_4px_10px_rgba(0,212,255,0.4)] animate-in zoom-in duration-300">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* SECTION 1: HOT DROPS (Horizontal Swipe) - Verified Fixed Swiping */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Trending Now</h3>
          <span className="text-[9px] font-black uppercase text-[#00d4ff] tracking-widest flex items-center gap-2">
            Swipe <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6 snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing">
          {hotDrops.map((item) => (
            <div 
              key={item.id} 
              className="snap-start flex-shrink-0 w-72 glass-card rounded-[3.5rem] overflow-hidden border border-white/10 group shadow-2xl relative transition-all active:scale-[0.98]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#161b22]">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] grayscale group-hover:grayscale-0" alt={item.name} />
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <span className="bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl text-[10px] font-black text-[#00d4ff] tracking-widest uppercase shadow-lg italic">
                    {item.team}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black italic uppercase tracking-tighter leading-none mb-5 group-hover:text-[#00d4ff] transition-colors line-clamp-1">{item.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black italic text-white/90 leading-none">${item.price}</span>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="w-12 h-12 rounded-2xl bg-[#00d4ff] flex items-center justify-center text-black shadow-[0_10px_25px_rgba(0,212,255,0.4)] transition-all active:scale-90"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: CLUB JERSEYS (Horizontal Swipe) - Verified Fixed Swiping */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 px-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Club Armor</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6 snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing">
          {jerseys.map(item => (
            <div 
              key={item.id} 
              className="snap-start flex-shrink-0 w-52 glass-card rounded-[3rem] overflow-hidden border border-white/5 group shadow-xl transition-all active:scale-95"
            >
              <div className="relative aspect-square overflow-hidden bg-[#161b22] p-5">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-6">
                <span className="text-[8px] font-black text-[#00d4ff] uppercase tracking-widest mb-1.5 block italic">{item.team}</span>
                <h3 className="text-xs font-black tracking-tight mb-5 uppercase italic text-white/90 truncate">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black italic text-white leading-none">${item.price}</span>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ACCESSORIES (Horizontal Swipe) - Verified Fixed Swiping */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 px-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Fan Gear</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6 snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing">
          {accessories.map(item => (
            <div 
              key={item.id} 
              className="snap-start flex-shrink-0 w-48 glass-card rounded-[2.5rem] overflow-hidden border border-white/5 group shadow-lg transition-all active:scale-95"
            >
              <div className="relative aspect-square overflow-hidden bg-[#161b22] p-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-[2rem]" />
              </div>
              <div className="p-5 pt-1">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 truncate italic">{item.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-black italic text-[#00d4ff] leading-none">${item.price}</span>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)} 
                    className="text-[10px] font-black uppercase text-white/20 hover:text-[#00d4ff] transition-colors italic tracking-widest"
                  >
                    Get Drop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="p-10 rounded-[4rem] bg-gradient-to-br from-[#161b22] to-[#0a0c10] border border-[#00d4ff]/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#00d4ff]/10 blur-3xl rounded-full"></div>
        <div className="relative z-10 text-center">
          <h4 className="text-white font-black italic uppercase text-3xl tracking-tighter leading-none mb-3">Arena Elite</h4>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-10 italic">Early Access to Season 25 Drops</p>
          <button className="w-full py-4.5 bg-[#00d4ff] text-black rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,212,255,0.2)] active:scale-95 transition-transform italic">
            Upgrade Membership
          </button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
