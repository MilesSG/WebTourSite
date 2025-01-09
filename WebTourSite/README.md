# 🌍 WebTourSite - 旅游目的地展示与预订平台

一个现代化的旅游网站，展示世界各地的精彩目的地和旅游套餐，提供便捷的在线预订服务。

## ✨ 功能特点

- 🏰 目的地展示
  - 精美的目的地卡片展示
  - 详细的目的地信息介绍
  - 最佳旅行时间推荐
  - 主要景点和特色美食

- 🎫 旅游套餐
  - 多种类型套餐（跟团游、自由行、定制游）
  - 灵活的筛选功能
  - 详细的行程介绍
  - 清晰的价格展示

- 💳 在线预订
  - 便捷的预订流程
  - 多种支付方式（信用卡、微信支付、支付宝）
  - 实时订单确认
  - 支付状态提醒

## 🚀 技术栈

- 📦 前端框架：Vue 3
- 🎨 UI 组件库：Element Plus
- 🛣️ 路由管理：Vue Router
- 🗃️ 状态管理：Pinia
- 📱 响应式设计：支持移动端和桌面端

## 🛠️ 本地开发

### 环境要求

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安装步骤

1. 克隆项目到本地：
```bash
git clone https://github.com/MilesSG/WebTourSite.git
cd WebTourSite
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 在浏览器中访问：
```
http://localhost:5173
```

### 构建生产版本

```bash
npm run build
```

构建后的文件将生成在 `dist` 目录中。

## 📱 兼容性

- ✅ 现代浏览器（Chrome、Firefox、Safari、Edge）
- ✅ 移动端浏览器
- ✅ 响应式设计，适配各种屏幕尺寸

## 🎨 项目结构

```
WebTourSite/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 项目资源文件
│   ├── components/     # 公共组件
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 状态管理
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html          # HTML 模板
├── package.json        # 项目配置
└── vite.config.js      # Vite 配置
```

## 📝 开发规范

- 组件命名采用 PascalCase
- 文件命名采用 kebab-case
- 使用 ESLint 进行代码规范检查
- 使用 Prettier 进行代码格式化

## 🤝 贡献指南

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 鸣谢

- [Vue.js](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [Unsplash](https://unsplash.com/) - 提供精美的图片资源
