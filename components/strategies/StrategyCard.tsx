import React from 'react';
import Link from 'next/link';
import { Strategy } from '@/types/strategy';
import { getRiskLevelBadge, getStrategyTypeName } from '@/utils/formatters';

interface StrategyCardProps {
  strategy: Strategy;
  showSubscribeButton?: boolean;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ 
  strategy, 
  showSubscribeButton = true
}) => {
  return (
    <div className="card flex flex-col overflow-hidden">
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
            {getStrategyTypeName(strategy.type)}
          </span>
          {getRiskLevelBadge(strategy.riskLevel)}
        </div>
        
        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
          {strategy.name}
        </h3>
        
        {strategy.trader && (
          <div className="mt-1 flex items-center">
            <div className="h-5 w-5 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-full bg-gray-300"></div>
            </div>
            <span className="ml-1.5 text-sm text-gray-500 dark:text-gray-400">
              {strategy.trader.name}
              {strategy.trader.isVerified && (
                <svg className="ml-1 inline-block h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </div>
        )}
        
        <p className="mt-3 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {strategy.description}
        </p>
      </div>
      
      <div className="flex-grow space-y-4 p-4 pt-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">年化收益率</p>
            <p className={`text-xl font-bold ${strategy.profitability && strategy.profitability >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {strategy.profitability ? (
                <>
                  {strategy.profitability >= 0 ? '+' : ''}
                  {strategy.profitability.toFixed(2)}%
                </>
              ) : (
                '---'
              )}
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">信号数量</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {strategy.signalCount || 0}
            </p>
          </div>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">最大回撤</p>
            <p className="text-sm font-medium text-red-600">
              {strategy.drawdown ? `-${strategy.drawdown.toFixed(2)}%` : '---'}
            </p>
          </div>
          {strategy.drawdown && (
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
              <div 
                className="h-full rounded-full bg-red-500" 
                style={{ width: `${Math.min(strategy.drawdown, 100)}%` }}
              ></div>
            </div>
          )}
        </div>
        
        {strategy.settings?.tradingPairs && strategy.settings.tradingPairs.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {strategy.settings.tradingPairs.slice(0, 5).map((pair, index) => (
              <span 
                key={index} 
                className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-200"
              >
                {pair}
              </span>
            ))}
            {strategy.settings.tradingPairs.length > 5 && (
              <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                +{strategy.settings.tradingPairs.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex space-x-3">
          <Link 
            href={`/strategies/${strategy.id}`} 
            className="flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            查看详情
          </Link>
          {showSubscribeButton && (
            <button 
              className="flex-grow rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-primary-700"
            >
              使用策略
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyCard; 