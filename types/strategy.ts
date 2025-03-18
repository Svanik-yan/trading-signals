import { Trader } from './trader';

export interface Strategy {
  id: string;
  name: string;
  description: string;
  traderId: string;
  type: StrategyType;
  riskLevel: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' | 'VERY_AGGRESSIVE';
  profitability?: number;
  drawdown?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  trader?: Trader;
  settings?: StrategySettings;
  followers?: number;
  signalCount?: number;
}

export type StrategyType = 
  | 'MARTINGALE' 
  | 'GRID_TRADING' 
  | 'TREND_FOLLOWING' 
  | 'BREAKOUT' 
  | 'MEAN_REVERSION' 
  | 'ARBITRAGE' 
  | 'CUSTOM';

export interface StrategySettings {
  id: string;
  strategyId: string;
  leverageMin: number;
  leverageMax: number;
  stopLoss?: number;
  takeProfit?: number;
  tradingPairs: string[];
  timeframe: string;
  customParams?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface StrategyStatistics {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  profitFactor: number;
  averageProfit: number;
  averageLoss: number;
  bestTrade: number;
  worstTrade: number;
  sharpeRatio?: number;
  sortinoRatio?: number;
  maxConsecutiveWins: number;
  maxConsecutiveLosses: number;
  performance: { date: string; value: number }[];
}

export interface StrategyPreset {
  id: string;
  name: string;
  description: string;
  type: StrategyType;
  riskLevel: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' | 'VERY_AGGRESSIVE';
  defaultSettings: Partial<StrategySettings>;
  usersCount: number;
  averageProfitability: number;
} 