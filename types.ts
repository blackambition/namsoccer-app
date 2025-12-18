
export enum AppSection {
  HOME = 'home',
  MATCHES = 'matches',
  TABLE = 'table',
  STATISTICS = 'statistics',
  NEWS = 'news',
  TRANSFERS = 'transfers',
  INJURIES = 'injuries',
  TEAMS = 'teams',
  SHOP = 'shop'
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  time: string;
  date: string;
  venue: string;
  score?: string;
  isLive?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  image: string;
  summary: string;
  date: string;
  category: string;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  country: string;
  image: string;
  position: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
  };
}

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  image: string;
  team: string;
  category: 'jersey' | 'scarf' | 'ball' | 'accessory';
}
