export interface Trader {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  experienceYears?: number;
  specialties?: string[];
  riskLevel: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' | 'VERY_AGGRESSIVE';
  profitPercentage: number;
  winRate: number;
  maxDrawdown: number;
  followers: number;
  isVerified: boolean;
  signalCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Signal {
  id: string;
  traderId: string;
  strategyId?: string;
  pair: string;
  direction: 'LONG' | 'SHORT';
  entryPrice: number;
  targetPrice?: number;
  stopLossPrice?: number;
  leverage: number;
  timeframe: string;
  confidence?: number;
  notes?: string;
  status: 'ACTIVE' | 'CLOSED_WIN' | 'CLOSED_LOSS' | 'CANCELLED';
  closedPrice?: number;
  profitPercentage?: number;
  createdAt: Date;
  updatedAt: Date;
  trader?: Trader;
}

export interface TraderStatistics {
  totalSignals: number;
  winningSignals: number;
  losingSignals: number;
  averageProfit: number;
  averageLoss: number;
  profitFactor: number;
  bestTrade: number;
  worstTrade: number;
  averageHoldingTime: number; // In hours
  mostTradedPairs: { pair: string; count: number }[];
}

export interface FollowSettings {
  capitalPercentage: number;
  useCustomLeverage: boolean;
  customLeverage?: number;
  enableStopLoss: boolean;
  customStopLoss?: number;
  copyAll: boolean;
  selectedPairs?: string[];
  selectedStrategies?: string[];
  minimumConfidence?: number;
} 