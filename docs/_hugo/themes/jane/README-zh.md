![jane-preview](https://raw.githubusercontent.com/xianmin/hugo-theme-jane/master/images/preview.png)


## hugo-theme-jane

Jane 是一个专注于阅读体验的 Hugo 主题。最早的版本基于 [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even) ，在它的基础上进行了重新改造。

[Demo](http://en.xianmin.org/hugo-theme-jane/) | [我的博客](http://www.xianmin.org)

**主要特色：**

- 响应式设计
- 多国语言支持
- 支持多个 Shortcode
- 单独设计的 *标签页* 和 *分类页*
- 社交网站链接
- 更好的分页、目录、注脚样式
- 使用更快的 Chroma 代码高亮
- 自定义 css，自定义 js，自定义 head
- 子目录支持
- 搜索优化


## 谁在用 Hugo-theme-Jane

- [ATFeng](https://www.gooth.org/) - A beautiful blog fork from Jane.
- [Jack Baty's Blog](https://www.baty.net/) - Thousands of posts on the site powered by Hugo & Theme Jane.
- [Notes on Blue Skies](https://terrty.net) - Personal blog in Russian by @paskal
- [贤民的比特记忆](http://www.xianmin.org/) - A Chinese blog.
- [虞双齐爱折腾](https://yushuangqi.com/) - @ysqi 个人技术博客.
- [茶歇驿站](https://maiyang.me/) - Go 爱好者，开源爱好者，Go 夜读发起人 @yangwenmai.
- [Time](https://ifttl.com/) - 个人博客
- [碎裂之梦](https://h-cheung.gitlab.io/) - 计院学生，开源爱好者，ACM新手
- Waiting to add more...


## 如何使用？

**注意：** 这个教程假设你 **第一次** 使用 [Hugo][] 。 [Hugo][] 是一个非常流行的静态网站生成工具。 你可查看官方文档 [Hugo Official Docs][] 获取更多帮助。

[Hugo]: https://gohugo.io/
[Hugo Official Docs]: https://gohugo.io/getting-started/



### 1. 快速安装 Hugo

从 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 上直接下载安装适合你的版本。



### 2. 快速创建网站

```bash
hugo new site myBlog
```

上面的命令将会在一个名为 `myBlog`  的文件夹中创建一个新的 hugo 站点。



### 3. 快速使用 Hugo-Theme-Jane

把这个主题克隆到 `themes` 文件夹

```bash
cd myBlog
git clone https://github.com/xianmin/hugo-theme-jane.git --depth=1 themes/jane
```

复制一些示例文本：

```bash
cp -r themes/jane/exampleSite/content ./
```

复制默认的站点设置：

```bash
cp themes/jane/exampleSite/config.toml ./
```

启动 hugo server ：

```bash
hugo server
```

打开 http://localhost:1313/ ，你将会看到一个示例网站。



### 4. 开始你的博客

默认配置文件 `config.toml` 位于你的网站的根目录，请按自身需要进行定制。

默认的文章文件位于 `./content/post` 目录。



### 5. 生成你的网站

直接运行 `hugo` ，将会自动生成你的网站到 `public/` 目录。

如果你有额外的时间，并且想更多的了解 [Hugo][] ，请查阅官方文档 [Hugo Official Docs][] 。



## 站点设置

不妨看一看 [exampleSite](https://github.com/xianmin/hugo-theme-jane/tree/master/exampleSite) 文件夹中的文件。

这个目录包含一个示例 `config.toml` 文件和一些示例文章。

将 `config.toml` 复制到你的网站根目录。按自身需要进行修改。



## 单篇文章的设置

**Front Matter** : Hugo 允许你使用 yaml， toml 或者 json 语法在你每一篇文章的开头进行设置。

**YAML 示例：**

```yaml
---
# 常用定义
title: "An Example Post"           # 标题
date: 2018-01-01T16:01:23+08:00    # 创建时间
lastmod: 2018-01-02T16:01:23+08:00 # 最后修改时间
draft: false                       # 是否是草稿？
tags: ["tag-1", "tag-2", "tag-3"]  # 标签
categories: ["index"]              # 分类
author: "xianmin"                  # 作者

# 用户自定义
# 你可以选择 关闭(false) 或者 打开(true) 以下选项
comment: false   # 关闭评论
toc: false       # 关闭文章目录
# 你同样可以自定义文章的版权规则
contentCopyright: '<a rel="license noopener" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a>'
reward: false	 # 关闭打赏
mathjax: true    # 打开 mathjax
---
```



## 多语言支持

Hugo-Theme-Jane 支持创建多语言网站。

你需要为你的网站对 `languages` 进行配置。

翻译位于 `i18n/` 文件夹下。

使用特定的翻译：

```toml
# 使用中文
defaultContentLanguage = "zh-cn"  # 默认使用的语言
[Languages.zh-cn]
  languageCode = "zh-cn"
```

有关多语言设置，请查看 [Multilingual Mode | Hugo](https://gohugo.io/content-management/multilingual/) 。



## 怎样开发？

使用 `npm` 安装依赖：

```bash
npm install
```

然后：

```bash
npm run dev
```

这条命令会同时运行  `webpack --watch` 和 `hugo server`  。 如果你修改了任何文件，浏览器将会自动更新。



## License

Hugo-theme-jane is licensed under the MIT license. Check the [LICENSE](LICENSE.md) file for details.


# Stackbit

This theme is ready to import into Stackbit. This theme can be deployed to Netlify and you can connect any headless CMS including Forestry, NetlifyCMS, DatoCMS or Contentful. 

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/xianmin/hugo-theme-jane)