import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trader } from '@/types/trader';

interface TraderCardProps {
  trader: Trader;
  showFollowButton?: boolean;
}

const TraderCard: React.FC<TraderCardProps> = ({ 
  trader, 
  showFollowButton = true 
}) => {
  return (
    <div className="card flex flex-col overflow-hidden">
      <div className="flex items-center space-x-4 p-4">
        <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          {trader.avatar ? (
            <Image 
              src={trader.avatar} 
              alt={`${trader.name} avatar`}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary-100 text-primary-600">
              {trader.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {trader.name}
          </h3>
          <div className="mt-1 flex items-center space-x-2">
            <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${getRiskLevelStyles(trader.riskLevel)}`}>
              {getRiskLevelText(trader.riskLevel)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {trader.followers} 人跟单
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow space-y-4 p-4 pt-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">总收益率</p>
            <p className={`text-xl font-bold ${trader.profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trader.profitPercentage >= 0 ? '+' : ''}{trader.profitPercentage.toFixed(2)}%
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">胜率</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {trader.winRate.toFixed(0)}%
            </p>
          </div>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">最大回撤</p>
            <p className="text-sm font-medium text-red-600">-{trader.maxDrawdown.toFixed(2)}%</p>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
            <div 
              className="h-full rounded-full bg-red-500" 
              style={{ width: `${Math.min(trader.maxDrawdown, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {trader.specialties && trader.specialties.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {trader.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-200"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex space-x-3">
          <Link 
            href={`/traders/${trader.id}`} 
            className="flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            查看详情
          </Link>
          {showFollowButton && (
            <button 
              className="flex-grow rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-primary-700"
            >
              关注
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 辅助函数
function getRiskLevelText(riskLevel: string): string {
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

function getRiskLevelStyles(riskLevel: string): string {
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

export default TraderCard; 