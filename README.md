# 智能跟单营销系统

基于OKX交易广场风格设计的全球期货跟单平台，连接交易员和跟随者的智能跟单系统。

## 项目特点

- 🚀 **实时信号**: 交易员发布信号后，系统立即推送通知，让用户第一时间获取交易机会
- 📊 **透明业绩**: 所有交易员的历史业绩、盈亏比、最大回撤等数据完全透明
- ⚙️ **自动执行**: 设置好跟单参数后，系统会自动执行交易，无需守在屏幕前
- 🔒 **风险管理**: 内置多重风险控制机制，用户可自定义止损、资金分配比例等参数
- 📈 **多样化策略**: 提供马丁格尔、网格交易、趋势跟踪等多种预设策略
- 👥 **社区互动**: 与交易员和其他用户交流，分享心得，共同进步

## 技术栈

- **前端**: Next.js, React, TypeScript, Tailwind CSS
- **后端**: Next.js API Routes, Prisma ORM
- **认证**: NextAuth.js
- **数据库**: PostgreSQL
- **部署**: Vercel

## 本地开发

1. 克隆仓库

```bash
git clone https://github.com/yourusername/trading-signals.git
cd trading-signals
```

2. 安装依赖

```bash
npm install
```

3. 设置环境变量

创建 `.env.local` 文件并添加:

```
DATABASE_URL="postgresql://username:password@localhost:5432/trading_signals"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. 运行数据库迁移

```bash
npx prisma migrate dev
```

5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 部署

本项目可以直接部署到Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Ftrading-signals)

### 部署注意事项

- 确保在Vercel上配置所有必要的环境变量
- 数据库连接字符串需要包含`?sslmode=require`参数
- 首次部署时会自动执行数据库迁移
- 建议使用Vercel集成的PostgreSQL数据库或Supabase

## 许可证

[MIT](LICENSE) 