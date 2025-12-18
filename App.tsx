
import React, { useState } from 'react';
import { AppSection } from './types';
import { NAVIGATION_ICONS, COLORS } from './constants';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Table from './pages/Table';
import Statistics from './pages/Statistics';
import News from './pages/News';
import Transfers from './pages/Transfers';
import Injuries from './pages/Injuries';
import Teams from './pages/Teams';
import Shop from './pages/Shop';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.HOME: return <Home onNavigate={setActiveSection} />;
      case AppSection.MATCHES: return <Matches />;
      case AppSection.TABLE: return <Table />;
      case AppSection.STATISTICS: return <Statistics />;
      case AppSection.NEWS: return <News />;
      case AppSection.TRANSFERS: return <Transfers />;
      case AppSection.INJURIES: return <Injuries />;
      case AppSection.TEAMS: return <Teams />;
      case AppSection.SHOP: return <Shop />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  const bottomNavItems = [
    { section: AppSection.HOME, label: 'Feed' },
    { section: AppSection.MATCHES, label: 'Live' },
    { section: AppSection.TABLE, label: 'League' },
    { section: AppSection.NEWS, label: 'News' },
    { section: AppSection.TEAMS, label: 'Teams' }
  ];

  return (
    <div className="h-full flex flex-col bg-[#0a0c10] relative overflow-hidden text-white">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* App Bar */}
      <header className="flex-none px-6 pt-12 pb-4 bg-[#0a0c10]/90 backdrop-blur-3xl flex justify-between items-center border-b border-white/5 z-50">
        <div className="flex items-center gap-3 cursor-pointer active:scale-95 transition-transform" onClick={() => setActiveSection(AppSection.HOME)}>
          <div className="w-10 h-10 rounded-2xl bg-[#00d4ff] flex items-center justify-center shadow-[0_10px_25px_rgba(0,212,255,0.2)]">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic leading-none">ProLive</h1>
            <p className="text-[8px] font-black text-[#00d4ff] uppercase tracking-widest mt-0.5 italic">Arena 2025</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveSection(AppSection.SHOP)}
            className={`w-11 h-11 flex items-center justify-center rounded-2xl transition-all relative ${activeSection === AppSection.SHOP ? 'bg-[#00d4ff] text-black shadow-[0_10px_20px_rgba(0,212,255,0.3)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
          >
            {NAVIGATION_ICONS.shop}
          </button>
          <button className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 relative active:scale-90 transition-transform hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
          </button>
        </div>
      </header>

      {/* App Body - overflow-x-hidden is key to keep swiping contained */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden app-content no-scrollbar px-6 py-8 relative z-10">
        {renderSection()}
      </main>

      {/* Tab Bar */}
      <nav className="flex-none bg-[#0a0c10]/95 backdrop-blur-3xl border-t border-white/5 px-6 pb-12 pt-4 flex justify-between items-center z-50">
        {bottomNavItems.map((item) => (
          <button
            key={item.section}
            onClick={() => setActiveSection(item.section)}
            className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 relative ${
              activeSection === item.section ? 'text-[#00d4ff]' : 'text-white/20'
            }`}
          >
            <div className={`transition-all duration-500 ${activeSection === item.section ? 'scale-110 -translate-y-1' : ''}`}>
              {React.cloneElement(NAVIGATION_ICONS[item.section] as React.ReactElement, {
                className: `w-6 h-6 ${activeSection === item.section ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`
              })}
            </div>
            <span className={`text-[8px] font-black uppercase tracking-widest transition-all ${
              activeSection === item.section ? 'opacity-100 translate-y-0.5' : 'opacity-40'
            }`}>
              {item.label}
            </span>
            {activeSection === item.section && (
              <div className="absolute -top-1 w-1 h-1 bg-[#00d4ff] rounded-full shadow-[0_0_10px_#00d4ff]"></div>
            )}
          </button>
        ))}
      </nav>

      {/* Notch & Indicators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#0a0c10]/40 backdrop-blur-md rounded-b-[2rem] z-[100] border-x border-b border-white/5 pointer-events-none"></div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/10 rounded-full z-[100] pointer-events-none"></div>
    </div>
  );
};

export default App;
