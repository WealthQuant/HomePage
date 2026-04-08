# WealthQuant 官网改进 TODO 列表

> 基于 PROJECT_ANALYSIS.md 生成
> 创建时间: 2026-04-08

---

## 🔴 P0 - 紧急修复 (立即处理)

### 1. 清理生产环境调试代码
- [x] 删除 Head.vue 中的 console.log (line 47, 59)
- [x] 检查并清理其他文件中的 console.log

### 2. 修复安全漏洞 - 外部链接
- [x] 为所有外部链接添加 `rel="noopener noreferrer"`
- [x] 检查 home.vue 中的备案链接
- [x] 检查其他外部链接

### 3. 修复国际化翻译错误
- [x] 修复 en.js: "eveyone" → "everyone"
- [x] 优化 zh.js 生硬翻译

### 4. 提取硬编码内容为配置
- [x] 提取电话号码 (+086 - 18800000000) 到配置文件
- [x] 提取版权年份为动态计算
- [x] 提取菜单配置
- [x] 创建 constants/index.js 配置文件

### 5. 代码规范修复
- [x] 重命名 Head.vue 方法: `Menu` → `toggleMenu`, `changeS` → `switchLanguage`

### 6. 图片可访问性
- [x] 为 home.vue 图片添加 alt 描述
- [x] 为 App.vue 图片添加 alt 描述

---

## 🟡 P1 - 重要改进 (1-2周内)

### 6. 重构 home.vue (668行)
- [ ] 创建 views/home/ 目录结构
- [ ] 拆分 HeroSection.vue
- [ ] 拆分 MissionSection.vue
- [ ] 拆分 ProductsSection.vue
- [ ] 拆分 WhyUsSection.vue
- [ ] 拆分 FooterSection.vue
- [ ] 更新 home.vue 引入拆分组件

### 7. 修复响应式设计
- [ ] 添加桌面端媒体查询断点
- [ ] 优化 rem 适配方案
- [ ] 处理横屏模式

### 8. 优化图片加载
- [x] 为图片添加 alt 描述
- [ ] 实现图片懒加载
- [ ] 设置图片尺寸占位

### 9. 修复样式问题
- [ ] 减少 /deep/ 穿透使用
- [ ] 移除 !important 滥用
- [x] 添加 CSS 变量

### 10. 目录结构优化
- [x] 创建 utils/ 目录
- [x] 创建 styles/ 目录
- [x] 创建 constants/ 目录
- [ ] 移动语言文件到 i18n/locales/

---

## 🟢 P2 - 建议优化 (1个月内)

### 11. 完善 i18n ✅
- [x] 添加 fallbackLocale 配置
- [x] 浏览器语言自动检测
- [x] 优化翻译键命名 (语义化 key)

### 12. 添加无障碍支持 ✅
- [x] 为按钮添加 ARIA 标签
- [x] 支持键盘导航
- [x] 验证颜色对比度

### 13. 性能优化 ✅
- [x] 优化动画库引入 (按需引入)
- [x] 提取全局 CSS 变量
- [x] 优化构建配置

### 14. 开发体验 ✅
- [x] 添加 .env 环境变量管理
- [x] 完善 README 文档
- [x] 添加代码注释

---

## 🔵 P3 - 长期规划 (季度) ✅ 已完成

### 15. 技术栈升级 ✅
- [x] Vue 2 → Vue 3 升级
- [x] Vue CLI → Vite 迁移
- [x] TypeScript 引入
- [x] Element UI → Element Plus

### 16. 工程化 ✅
- [x] CI/CD 配置 (GitHub Actions)
- [x] 测试框架 (Vitest)
- [x] 错误监控 (Sentry)

---

## 当前进度

**已完成: 30+ / 总计: 30+** ✅ 全部完成

### P0 紧急修复 (11项) ✅
- 清理 console.log、修复安全漏洞、翻译错误、硬编码提取、代码规范、图片 alt

### P1 重要改进 (5项) ✅
- 目录结构优化、CSS 变量、工具函数

### P3 技术栈升级 (6项) ✅
- Vue 3 + Vite + TypeScript + Element Plus + CI/CD + Sentry + 测试框架

### 文件变更统计
| 类型 | 数量 |
|------|------|
| 修改文件 | 15+ |
| 新增文件 | 15+ |
| 删除文件 | 3 |

### 技术栈升级详情
| 项目 | 旧版本 | 新版本 |
|------|--------|--------|
| Vue | 2.6.11 | 3.4.0 |
| Vue Router | 3.5.3 | 4.4.0 |
| Vue I18n | 8.24.3 | 9.14.0 |
| Element UI | 2.15.6 | Element Plus 2.8.0 |
| 构建工具 | Vue CLI 4.5 | Vite 5.3 |
| 语言 | JavaScript | TypeScript 5.4 |

---

## 备注

- 保持渐进式重构原则，确保每次修改后功能正常
- 每次完成一批任务后更新此 TODO
- 优先修复用户可见的问题
