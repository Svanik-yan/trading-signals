import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const topTraders = [
    { id: 1, name: '高倍率高回报', avatar: '/images/avatar1.svg', profitPercentage: 635.77, followers: 298, type: '做多' },
    { id: 2, name: '柏萬億', avatar: '/images/avatar2.svg', profitPercentage: 138.59, followers: 22, type: '做空' },
    { id: 3, name: 'zhang明中', avatar: '/images/avatar3.svg', profitPercentage: 98.63, followers: 50, type: '做多' },
  ];

  const strategies = [
    { id: 1, name: '马丁格尔抄底', type: '进取型', profitRate: 179.45, users: 15770, pair: 'BTC/USDT' },
    { id: 2, name: '宽幅震荡网格', type: '进取型', profitRate: 80.28, users: 63574, pair: 'BTC/USDT' },
    { id: 3, name: '天地网格', type: '均衡型', profitRate: 82.57, users: 54840, pair: 'BTC/USDT' },
    { id: 4, name: '极速定投', type: '稳健型', profitRate: 49.44, users: 11516, pair: 'BTC-ETH' },
  ];

  return (
    <Layout>
      {/* 英雄区域 */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-16 text-center md:py-24">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">智能期货交易信号</span>
              <span className="block">跟随顶级交易员获利</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-100 sm:max-w-3xl">
              我们的平台连接全球顶尖期货交易员，通过智能跟单系统帮助您复制他们的交易策略，无需专业知识也能获得优异收益。
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link href="/traders" className="rounded-md bg-white px-8 py-3 text-lg font-medium text-primary-600 shadow hover:bg-gray-50">
                查看交易员
              </Link>
              <Link href="/strategies" className="rounded-md border border-white bg-transparent px-8 py-3 text-lg font-medium text-white hover:bg-white hover:bg-opacity-10">
                浏览策略
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 平台特点 */}
      <div className="bg-white py-12 dark:bg-gray-800 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              平台特点
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              专业的期货跟单系统，使交易更简单、更智能
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">实时信号</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                交易员发布信号后，系统会立即推送通知，让您第一时间获取交易机会。
              </p>
            </div>

            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">透明业绩</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                所有交易员的历史业绩、盈亏比、最大回撤等数据完全透明，帮助您做出明智选择。
              </p>
            </div>

            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">自动执行</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                设置好跟单参数后，系统会自动为您执行交易，无需守在屏幕前，节省您的宝贵时间。
              </p>
            </div>

            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">风险管理</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                内置多重风险控制机制，您可以自定义止损、资金分配比例等参数，有效保护您的资金安全。
              </p>
            </div>

            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">多样化策略</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                提供马丁格尔、网格交易、趋势跟踪等多种预设策略，满足不同风险偏好和市场环境的需求。
              </p>
            </div>

            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">社区互动</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                与交易员和其他用户交流，分享心得，共同进步，构建活跃的交易社区。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 热门交易员 */}
      <div className="bg-gray-50 py-12 dark:bg-gray-900 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              热门交易员
            </h2>
            <Link href="/traders" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              查看全部
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topTraders.map((trader) => (
              <div key={trader.id} className="card flex flex-col">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full w-full bg-gray-300"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {trader.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {trader.followers} 人跟单 · {trader.type}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">收益率</p>
                    <p className="text-2xl font-bold text-primary-600">
                      +{trader.profitPercentage.toFixed(2)}%
                    </p>
                  </div>
                  <Link href={`/traders/${trader.id}`} className="btn-primary">
                    查看详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 热门策略 */}
      <div className="bg-white py-12 dark:bg-gray-800 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              热门策略
            </h2>
            <Link href="/strategies" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              浏览全部
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy) => (
              <div key={strategy.id} className="card flex flex-col">
                <div>
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                    {strategy.type}
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                    {strategy.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {strategy.pair} · {strategy.users.toLocaleString()} 使用人数
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">年化收益率</p>
                    <p className="text-2xl font-bold text-primary-600">
                      +{strategy.profitRate.toFixed(2)}%
                    </p>
                  </div>
                  <Link href={`/strategies/${strategy.id}`} className="btn-outline">
                    使用
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">准备开始交易了吗？</span>
            <span className="block text-xl font-normal mt-2">立即注册，跟随顶级交易员获利</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/auth/signup" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 hover:bg-gray-50">
                免费注册
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/strategies" className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-700 px-5 py-3 text-base font-medium text-white hover:bg-primary-800">
                探索策略
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 