# WealthQuant 财富量化 - 官网项目

基于 Vue 3 + TypeScript + Vite 的现代化企业官网

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.4+ | 前端框架 |
| TypeScript | 5.4+ | 类型系统 |
| Vite | 5.3+ | 构建工具 |
| Vue Router | 4.4+ | 路由管理 |
| Vue I18n | 9.14+ | 国际化 |
| Element Plus | 2.8+ | UI 组件库 |
| Sentry | 最新 | 错误监控 |

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 运行测试
pnpm test:unit

# 运行测试并生成覆盖率报告
pnpm test:coverage
```

## 项目结构

```
src/
├── assets/          # 静态资源 (图片、字体)
├── components/      # Vue 组件
│   └── Head.vue     # 导航头部组件
├── composables/     # 组合式函数
│   └── useLazyLoad.ts  # 图片懒加载
├── constants/       # 常量配置
│   └── index.ts     # 全局常量
├── i18n/            # 国际化
│   └── locales/     # 语言文件
│       ├── en.json  # 英文
│       └── zh.json  # 中文
├── router/          # 路由配置
├── styles/          # 全局样式
│   └── variables.css # CSS 变量
├── utils/           # 工具函数
│   └── index.js     # 常用工具
├── views/           # 页面视图
│   └── home.vue     # 首页
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 开发规范

### 代码风格
- 使用 TypeScript 严格模式
- 组件使用 `<script setup>` 语法
- 优先使用组合式 API

### 命名规范
- 组件: PascalCase (e.g., `Head.vue`)
- 组合式函数: camelCase with `use` prefix (e.g., `useLazyLoad.ts`)
- 常量: UPPER_SNAKE_CASE (e.g., `COMPANY_INFO`)

### 国际化
- 使用语义化键名: `section.subsection.key`
- 示例: `nav.houseQuant`, `products.stockQuant.description`

### 无障碍 (A11y)
- 所有交互元素必须有 ARIA 标签
- 支持键盘导航
- 图片必须有 alt 描述

## 环境变量

创建 `.env` 文件:

```env
# Sentry DSN (生产环境)
VITE_SENTRY_DSN=your_sentry_dsn_here
```

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## CI/CD

GitHub Actions 自动部署:
- Push 到 master 分支触发构建
- 自动运行测试
- 构建产物部署到生产环境

## License

Copyright © 2021-2026 WealthQuant. All Rights Reserved.
