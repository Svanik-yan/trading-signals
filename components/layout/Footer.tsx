import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              关于我们
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  公司简介
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  团队成员
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              产品服务
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/traders" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  交易员
                </Link>
              </li>
              <li>
                <Link href="/strategies" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  策略广场
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  价格套餐
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              支持
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/support" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  帮助中心
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              法律
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/legal/privacy" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/legal/risk" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  风险披露
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex justify-between">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} 交易信号, Inc. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.59,5.64 12.78,4 9.5,4M9.5,6C13.03,6 16,8.13 16,11C16,13.87 13.03,16 9.5,16C8.58,16 7.73,15.81 6.95,15.43L5.05,16.5L5.43,14.57C4.22,13.5 3.5,12.18 3.5,11C3.5,8.13 6.47,6 9.5,6M7.5,9C6.67,9 6,9.67 6,10.5C6,11.33 6.67,12 7.5,12C8.33,12 9,11.33 9,10.5C9,9.67 8.33,9 7.5,9M12,9C11.17,9 10.5,9.67 10.5,10.5C10.5,11.33 11.17,12 12,12C12.83,12 13.5,11.33 13.5,10.5C13.5,9.67 12.83,9 12,9M16,10C13.59,10 11.5,11.59 11.5,13.5C11.5,15.41 13.59,17 16,17C16.71,17 17.39,16.83 18,16.53L19.61,17.42L19,15.97C19.84,15.21 20.42,14.38 20.47,13.41C20.36,11.58 18.45,10 16,10M15,12C15.83,12 16.5,12.67 16.5,13.5C16.5,14.33 15.83,15 15,15C14.17,15 13.5,14.33 13.5,13.5C13.5,12.67 14.17,12 15,12M18,12C18.83,12 19.5,12.67 19.5,13.5C19.5,14.33 18.83,15 18,15C17.17,15 16.5,14.33 16.5,13.5C16.5,12.67 17.17,12 18,12Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.83,14.12c0,5.57-6.76,10.08-15.11,10.08c-6.8,0-12.32-3.29-12.32-7.36c0-2.12,1.31-4.35,3.52-6.58c2.98-3.05,6.69-4.92,8.68-3.43c0.99,0.75,1.13,2.12,0.47,3.66c-0.34,0.75-0.34,0.75-0.14,1.13c0.14,0.38,0.47,0.56,0.84,0.38c0.23-0.09,0.89-0.38,0.89-0.38s2.17-0.94,2.87-2.82c0.66-1.79,0.09-3.66-1.9-4.5c-4.17-1.78-9.18,0.94-12.27,6.39c-1.54,2.73-1.71,5.19-0.38,7.36c2.35,3.81,9.07,5.67,14.21,4.03c2.72-0.85,5.76-2.63,7.37-4.6C20.03,16.13,20.93,14.82,20.83,14.12z M13.33,19.17c-0.14,0.33-0.62,0.52-0.94,0.33c-0.33-0.14-0.47-0.47-0.33-0.85c0.19-0.33,0.62-0.52,0.94-0.33C13.33,18.46,13.47,18.84,13.33,19.17z M15.55,17.38c-0.38,0.61-1.22,0.9-1.83,0.61c-0.61-0.28-0.8-0.99-0.37-1.6c0.38-0.61,1.17-0.89,1.78-0.61S15.93,16.77,15.55,17.38z M21.45,8.96c0.28,0.47,0.33,1.03,0.09,1.5c-0.09,0.19-0.33,0.33-0.52,0.28c-0.28,0-0.47-0.28-0.33-0.56c0.09-0.19,0.14-0.47,0-0.66c-0.09-0.19-0.33-0.33-0.56-0.33l0,0c-0.33,0-0.52-0.28-0.47-0.56c0-0.28,0.28-0.47,0.56-0.47C20.7,8.12,21.07,8.44,21.45,8.96z M23.52,7.93c-0.09,0.33-0.47,0.52-0.75,0.42c-0.33-0.09-0.47-0.42-0.38-0.7c0.33-0.94,0.23-1.97-0.33-2.73c-0.56-0.84-1.55-1.12-2.49-0.94c-0.33,0.09-0.61-0.09-0.71-0.42c-0.09-0.28,0.09-0.56,0.42-0.66c1.31-0.38,2.63,0.05,3.52,1.22C23.57,5.12,23.9,6.53,23.52,7.93z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">QQ</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.07,4.5C7.09,4.5,5,8.5,5,12.3c0,1.95,0.7,3.61,2.03,4.94c0.4,0.4,0.38,0.71,0.29,1.27c-0.1,0.62-0.31,1.05-0.45,1.35c-0.13,0.27-0.45,0.47-0.46,0.9c0,0.37,0.2,0.64,0.54,0.64c0.33,0,1.05-0.31,1.71-0.73C9,20.23,9.13,20.34,9.6,20.5c0.35,0.13,0.72,0.22,1.11,0.29c-0.24,0.71-0.38,1.2-0.38,1.37c0,0.32,0.26,0.61,0.58,0.61c0.5,0,0.99-0.37,1.48-1.02c0.38,0.2,0.8,0.32,1.24,0.36c-0.35,0.45-0.58,0.76-0.58,0.96c0,0.27,0.21,0.45,0.58,0.45c0.46,0,1.04-0.33,1.67-0.84c0.42,0.13,0.84,0.2,1.3,0.23c-0.18,0.31-0.29,0.54-0.29,0.7c0,0.24,0.17,0.39,0.45,0.39c0.33,0,0.86-0.23,1.56-0.66c0.22,0.05,0.45,0.08,0.68,0.08c0.24,0,0.46-0.03,0.68-0.08c0.7,0.44,1.23,0.66,1.56,0.66c0.28,0,0.45-0.15,0.45-0.39c0-0.16-0.11-0.39-0.29-0.7c0.46-0.03,0.88-0.1,1.3-0.23c0.63,0.51,1.2,0.84,1.67,0.84c0.37,0,0.58-0.18,0.58-0.45c0-0.2-0.23-0.51-0.58-0.96c0.44-0.04,0.86-0.16,1.24-0.36c0.48,0.65,0.98,1.02,1.48,1.02c0.32,0,0.58-0.29,0.58-0.61c0-0.17-0.14-0.66-0.38-1.37c0.39-0.07,0.76-0.16,1.11-0.29c0.47-0.16,0.6-0.27,0.93-0.83c0.65,0.42,1.38,0.73,1.71,0.73c0.34,0,0.54-0.27,0.54-0.64c-0.01-0.43-0.33-0.63-0.46-0.9c-0.14-0.3-0.35-0.73-0.45-1.35c-0.09-0.56-0.11-0.87,0.29-1.27c1.33-1.33,2.03-2.99,2.03-4.94c0-3.8-2.09-7.8-7.07-7.8V4.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 