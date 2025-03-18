import React from 'react';
import { StrategyType } from '@/types/strategy';

// 策略类型名称映射
export function getStrategyTypeName(type: StrategyType): string {
  const typeMap: Record<StrategyType, string> = {
    MARTINGALE: '马丁格尔',
    GRID_TRADING: '网格交易',
    TREND_FOLLOWING: '趋势跟踪',
    BREAKOUT: '突破策略',
    MEAN_REVERSION: '均值回归',
    ARBITRAGE: '套利策略',
    CUSTOM: '自定义策略'
  };

  return typeMap[type] || '未知策略';
}

// 风险等级名称
export function getRiskLevelText(riskLevel: string): string {
  switch (riskLevel) {
    case 'CONSERVATIVE':
      return '保守型';
    case 'MODERATE':
      return '稳健型';
    case 'AGGRESSIVE':
      return '进取型';
    case 'VERY_AGGRESSIVE':
      return '激进型';
    default:
      return '未知';
  }
}

// 风险等级样式
export function getRiskLevelStyles(riskLevel: string): string {
  switch (riskLevel) {
    case 'CONSERVATIVE':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    case 'MODERATE':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    case 'AGGRESSIVE':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    case 'VERY_AGGRESSIVE':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
  }
}

// 风险等级徽章
export function getRiskLevelBadge(riskLevel: string): React.ReactNode {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getRiskLevelStyles(riskLevel)}`}>
      {getRiskLevelText(riskLevel)}
    </span>
  );
}

// 时间格式化
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 简短时间格式化
export function formatShortDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    month: 'numeric',
    day: 'numeric'
  });
}

// 金额格式化
export function formatCurrency(amount: number, currency: string = 'USDT'): string {
  return `${amount.toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} ${currency}`;
}

// 百分比格式化
export function formatPercentage(percentage: number, includeSign: boolean = true): string {
  const formatted = percentage.toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  if (includeSign) {
    return percentage >= 0 ? `+${formatted}%` : `${formatted}%`;
  }
  
  return `${formatted}%`;
}

// 数字简化（如 1000 -> 1k）
export function formatCompactNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }
  
  const formatter = new Intl.NumberFormat('zh-CN', {
    notation: 'compact',
    compactDisplay: 'short'
  });
  
  return formatter.format(num);
}

// 获取交易方向的样式和文本
export function getDirectionInfo(direction: 'LONG' | 'SHORT'): { text: string; className: string } {
  if (direction === 'LONG') {
    return {
      text: '做多',
      className: 'text-green-600 dark:text-green-400'
    };
  }
  
  return {
    text: '做空',
    className: 'text-red-600 dark:text-red-400'
  };
}

// 获取交易状态的样式和文本
export function getSignalStatusInfo(status: string): { text: string; className: string } {
  switch (status) {
    case 'ACTIVE':
      return {
        text: '进行中',
        className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
      };
    case 'CLOSED_WIN':
      return {
        text: '盈利平仓',
        className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
      };
    case 'CLOSED_LOSS':
      return {
        text: '亏损平仓',
        className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
      };
    case 'CANCELLED':
      return {
        text: '已取消',
        className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
      };
    default:
      return {
        text: '未知',
        className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
      };
  }
} 