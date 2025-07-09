#  Hugo-theme-eco  Theme 🌱

[简体中文](README.zh-cn.md) | [English](README.md)

Hugo-theme-eco is a Hugo theme specifically designed for energy conservation, emission reduction, and environmental protection professionals. It adopts a green and eco-friendly design philosophy, supports light/dark mode switching and multilingual capabilities, providing an elegant display platform for environmental blogs.

## ✨ Features

### 🎨 Design Characteristics

- **Eco-friendly Style**: Green as the main color tone, embodying environmental concepts
- **Simple and Efficient**: Clean interface reflecting energy-saving efficiency principles
- **Modern Tech Feel**: Incorporates modern technological elements, showcasing professionalism in energy management
- **Artistic Touch**: Elegant typography and font choices suitable for artistic youth

### 🌓 Light/Dark Mode

- **Auto-Switching**: Supports automatic system theme switching
- **Manual Control**: Provides theme toggle button
- **Eye Safe Design**: Dark mode uses eye-protective color scheme

### 🌍 Multilingual Support

- **Simplified Chinese**: Complete Chinese interface
- **English**: Complete English interface
- **Easy Expansion**: Can easily add other languages

### 📱 Responsive Design

- **Mobile-First**: Perfectly adapts to various devices
- **Touch-Friendly**: Optimized mobile interaction experience
- **Performance Optimized**: Fast loading, energy-saving and eco-friendly

### 🔍 Search Functionality

- **Real-time Search**: Supports title, content, and tag search
- **Search Highlight**: Highlights keywords in search results
- **Quick Operations**: Supports keyboard shortcuts

### 📊 SEO Optimization

- **Structured Data**: Complete JSON-LD support
- **Open Graph**: Optimized for social media sharing
- **Sitemap**: Automatically generated sitemap
- **RSS Feed**: Supports full-text RSS output

## 🚀 Quick Start

### Install Theme

#### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/XDongG/hugo-theme-eco.git themes/hugo-theme-eco
```

#### Method 2: Direct Download

```Bash
cd your-hugo-site/themes
git clone https://github.com/XDongG/hugo-theme-eco.git
```

### Configure Site

1. Copy example config file:

```Bash
cp themes/hugo-theme-eco/exampleSite/config.toml config.toml
```

2. Edit `config.toml` file, modify basic information:

```toml
baseURL = "https://yoursite.com"
title = "Your Blog Title"
theme = "hugo-theme-eco"

[params]
  author = "Your Name"
  subtitle = "Your Subtitle"
  description = "Your Blog Description"
  email = "your@email.com"
```

3. Create content:

```Bash
hugo new posts/my-first-post.md
```

4. Start development server:

```bash
hugo server -D
```

## 📝 Content Creation

### Article Template

```Yaml
---
title: "Article Title"
date: 2024-01-01T00:00:00+08:00
draft: false
description: "Article Description"
tags: ["Tag1", "Tag2"]
categories: ["Category"]
author: "Author Name"
showToc: true
TocOpen: false
cover:
    image: "/images/cover.jpg"
    alt: "Cover Image Description"
    caption: "Cover Image Caption"
---
```

### Page Types

#### Regular Page
```bash
hugo new about/index.md
```

#### Blog Post

```bash
hugo new posts/article-title.md
```

## ⚙️ Configuration Options

### Basic Configuration
```toml
[params]
  # Basic Info
  author = "Your Name"
  subtitle = "Blog Subtitle"
  description = "Blog Description"
  keywords = ["Keyword1", "Keyword2"]
  
  # Avatar and Logo
  avatar = "/images/avatar.jpg"
  logo = "/images/logo.png"
  
  # Contact Info
  email = "your@email.com"
  location = "Your Location"
```
### Social Media
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
### Feature Toggles
```toml
[params.search]
  enable = true

[params.comments]
  enable = false
  # disqus = "your-disqus-shortname"
```
### Multilingual Configuration
```toml
[languages]
  [languages.zh-cn]
    languageName = "Chinese"
    weight = 1
    title = "Chinese Site Title"
    
  [languages.en]
    languageName = "English"
    weight = 2
    title = "English Site Title"
```

## 🎨 Custom Styling

### Custom CSS

```toml
[params]
  customCSS = ["/css/custom.css"]
```

### Custom JavaScript
```toml
[params]
  customJS = ["/js/custom.js"]
```

### Color Theme Customization
Override CSS variables in `assets/css/custom.scss`:

```Scss
:root {
  --color-primary: #your-color;
  --color-accent: #your-accent-color;
}
```

## 📊 Analytics and SEO

### Google Analytics

```toml
[params]
  googleAnalytics = "GA-TRACKING-ID"
```

### SEO Optimization
- Auto-generated meta tags
- Structured data support
- Open Graph and Twitter Cards
- Auto-generated sitemap.xml
- RSS feed support

## 🔧 Advanced Features
### Search Functionality
Built-in JSON-based search supports:
- Article title search
- Full-text content search
- Tag and category search
- Real-time search results

### Image Optimization
- WebP format support
- Responsive images
- Lazy loading support
- Image compression optimization

### Performance Optimization
- CSS and JS compression
- Resource caching optimization
- Font preloading
- Critical CSS inlining

## 🛠️ Development Guide

### Local Development
```bash
# Clone theme
git clone https://github.com/XDongG/hugo-theme-eco.git
cd hugo-theme-eco

# Start example site
cd exampleSite
hugo server -D --themesDir ../..
```

### File Structure
```
 hugo-theme-eco/
├── archetypes/          # Content templates
├── assets/             # Asset files
│   ├── css/           # Style files
│   └── js/            # JavaScript files
├── layouts/            # Layout templates
│   ├── _default/      # Default layouts
│   ├── partials/      # Partial templates
│   └── shortcodes/    # Shortcodes
├── static/             # Static files
├── i18n/              # Multilingual files
├── data/              # Data files
└── exampleSite/       # Example site
```

## 🤝 Contribution

Welcome code contributions and suggestions!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/XDongG/hugo-theme-eco/blob/master/LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugo](https://gohugo.io/) - Static site generator
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Web fonts

## 📞 Support

If you encounter issues during use, you can:

- Check the [Wiki](https://github.com/XDongG/hugo-theme-eco/wiki)
- Submit an [Issue](https://github.com/XDongG/hugo-theme-eco/issues)
- Email to [xdguo2008@gmail.com](mailto:xdguo2008@gmail.com)

**Let's work together to create a better environment!** 🌱

If this theme helps you, please give it a ⭐️ for support!