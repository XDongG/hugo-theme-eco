# hugo-theme-eco - Hugo生态环保主题 🌱

hugo-theme-eco 是一个专为节能减排和环保行业专业人士设计的 Hugo 主题。它采用绿色环保的设计理念，支持亮暗模式切换和多语言，为环保博客提供优雅的展示平台。

## ✨ 特性

### 🎨 设计特色
- **绿色环保风格**：以绿色为主色调，体现环保理念
- **简洁高效**：界面简洁，体现节能减排的效率理念
- **现代科技感**：融入现代科技元素，体现能源管理的专业性
- **文艺气质**：优雅的排版和字体选择，适合文艺青年

### 🌓 亮暗模式
- **自动切换**：支持系统主题自动切换
- **手动控制**：提供主题切换按钮
- **护眼设计**：暗色模式采用护眼配色

### 🌍 多语言支持
- **中文简体**：完整的中文界面
- **英文**：完整的英文界面
- **易于扩展**：可轻松添加其他语言

### 📱 响应式设计
- **移动优先**：完美适配各种设备
- **触摸友好**：移动端交互体验优化
- **性能优化**：快速加载，节能环保

### 🔍 搜索功能
- **实时搜索**：支持标题、内容、标签搜索
- **搜索高亮**：搜索结果关键词高亮显示
- **快捷操作**：键盘快捷键支持

### 📊 SEO优化
- **结构化数据**：完整的 JSON-LD 支持
- **Open Graph**：社交媒体分享优化
- **站点地图**：自动生成 sitemap
- **RSS订阅**：支持全文RSS输出

## 🚀 快速开始

### 安装主题

#### 方法一：Git Submodule（推荐）
```bash
cd your-hugo-site
git submodule add https://github.com/XDongG/hugo-theme-eco.git themes/hugo-theme-eco
```

#### 方法二：直接下载
```bash
cd your-hugo-site/themes
git clone https://github.com/XDongG/hugo-theme-eco.git
```

### 配置站点

1. 复制示例配置文件：
```bash
cp themes/hugo-theme-eco/exampleSite/config.toml config.toml
```

2. 编辑 `config.toml` 文件，修改基本信息：
```toml
baseURL = "https://yoursite.com"
title = "你的博客标题"
theme = "hugo-theme-eco"

[params]
  author = "你的名字"
  subtitle = "你的副标题"
  description = "你的博客描述"
  email = "your@email.com"
```

3. 创建内容：
```bash
hugo new posts/my-first-post.md
```

4. 启动开发服务器：
```bash
hugo server -D
```

## 📝 内容创建

### 文章模板
```yaml
---
title: "文章标题"
date: 2024-01-01T00:00:00+08:00
draft: false
description: "文章描述"
tags: ["标签1", "标签2"]
categories: ["分类"]
author: "作者名"
showToc: true
TocOpen: false
cover:
    image: "/images/cover.jpg"
    alt: "封面图片描述"
    caption: "封面图片说明"
---
```

### 页面类型

#### 普通页面
```bash
hugo new about/index.md
```

#### 博客文章
```bash
hugo new posts/article-title.md
```

## ⚙️ 配置选项

### 基本配置
```toml
[params]
  # 基本信息
  author = "你的名字"
  subtitle = "博客副标题"
  description = "博客描述"
  keywords = ["关键词1", "关键词2"]
  
  # 头像和Logo
  avatar = "/images/avatar.jpg"
  logo = "/images/logo.png"
  
  # 联系信息
  email = "your@email.com"
  location = "你的位置"
```

### 社交媒体
```toml
[[params.social]]
  name = "GitHub"
  icon = "fab fa-github"
  url = "https://github.com/XDongG"

[[params.social]]
  name = "Twitter"
  icon = "fab fa-twitter"
  url = "https://twitter.com/XDongG"
```

### 功能开关
```toml
[params.search]
  enable = true

[params.comments]
  enable = false
  # disqus = "your-disqus-shortname"
```

### 多语言配置
```toml
[languages]
  [languages.zh-cn]
    languageName = "中文"
    weight = 1
    title = "中文站点标题"
    
  [languages.en]
    languageName = "English"
    weight = 2
    title = "English Site Title"
```

## 🎨 自定义样式

### 自定义CSS
```toml
[params]
  customCSS = ["/css/custom.css"]
```

### 自定义JavaScript
```toml
[params]
  customJS = ["/js/custom.js"]
```

### 颜色主题自定义
在 `assets/css/custom.scss` 中覆盖CSS变量：
```scss
:root {
  --color-primary: #your-color;
  --color-accent: #your-accent-color;
}
```

## 📊 分析和SEO

### Google Analytics
```toml
[params]
  googleAnalytics = "GA-TRACKING-ID"
```

### SEO优化
- 自动生成 meta 标签
- 结构化数据支持
- Open Graph 和 Twitter Cards
- 自动生成 sitemap.xml
- RSS 订阅支持

## 🔧 高级功能

### 搜索功能
主题内置了基于 JSON 的搜索功能，支持：
- 文章标题搜索
- 内容全文搜索
- 标签和分类搜索
- 实时搜索结果

### 图片优化
- 支持 WebP 格式
- 响应式图片
- 懒加载支持
- 图片压缩优化

### 性能优化
- CSS 和 JS 压缩
- 资源缓存优化
- 字体预加载
- 关键CSS内联

## 🛠️ 开发指南

### 本地开发
```bash
# 克隆主题
git clone https://github.com/XDongG/hugo-theme-eco.git
cd hugo-theme-eco

# 启动示例站点
cd exampleSite
hugo server -D --themesDir ../..
```

### 文件结构
```
hugo-theme-eco/
├── archetypes/          # 内容模板
├── assets/             # 资源文件
│   ├── css/           # 样式文件
│   └── js/            # JavaScript文件
├── layouts/            # 布局模板
│   ├── _default/      # 默认布局
│   ├── partials/      # 部分模板
│   └── shortcodes/    # 短代码
├── static/             # 静态文件
├── i18n/              # 多语言文件
├── data/              # 数据文件
└── exampleSite/       # 示例站点
```

## 🤝 贡献

欢迎贡献代码和建议！

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Hugo](https://gohugo.io/) - 静态网站生成器
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 网络字体

## 📞 支持

如果你在使用过程中遇到问题，可以：

- 查看 [Wiki](https://github.com/XDongG/hugo-theme-eco/wiki)
- 提交 [Issue](https://github.com/XDongG/hugo-theme-eco/issues)
- 发送邮件到 your@email.com

---

**让我们一起为创造更美好的环境而努力！** 🌱

如果这个主题对你有帮助，请给个 ⭐️ 支持一下！

