
2.0.0 / 2018-09-18
==================

  * docs:  add itLaws.cn Update README.md (#124)
  * no new window for mailto, fix #111 (#123)
  * don't split threads when query parameters exist (#122)
  * fix: photoswipeCSS link
  * docs: a simple config for common user (#117)
  * docs: add new site https://ifttl.com @ifttl (#116)
  * feat: add photoswip CDN (#115)
  * style: enlarged bilibili icon
  * feat: Add bilibili icon to footer social links #110
  * feat: add leancloud counter.  #95 #104
  * feat: add busuanzi counter.  #95 #104
  * docs:  update theme min_version
  * fix `<link hreflang="lang_code"... >` (#102)
  * docs: add blog site https://axdlog.com (#99)
  * disable google analytics on localhost (#98)
  * docs: Update README-zh.md, add  https://maiyang.me/ (#94)
  * docs: Update README.md, add  https://maiyang.me/ (#93)
  * fix API incompatibility for v0.45 (#91)
  * feat: add shortcode notice
  * update youku shortcode (#90)
  * Merge pull request #89 from xianmin/fix-bad-css
  * chore: rebuild css
  * docs: add more syntax highlight example
  * style: add chroma line highlight background-color
  * style: change code-font-family
  * fix: code block row alignment
  * fix: mathjax overflow for displayed mathematics
  * style: toc padding-right more
  * feat: show language name in language chooser (#85)
  * docs: add more contributors
  * Merge pull request #83 from shaform/hardcoded
  * try urlized page as well
  * remove params.uglyURLs
  * remove hardcoded URLs for tags/categories
  * link to correct RSS URL in Multilingual site, fix #75 (#82)
  * fix: demo site menu link
  * docs: add site language name
  * fix: mobile drop down menu behavior
  * Merge pull request #79 from shaform/lang-switch
  * npm run build
  * add langugae chooser to mobile menu as well
  * add globe icon
  * add basic language chooser on menu
  * docs: add @cizel blog Update README.md (#80)
  * feat: mobile-menu support drop down menu
  * fix: fork-me-on-github display none in mobile
  * fix: use relLangURL for multilingual support (#76)
  * i18n: Add zh-tw translation (#77)
  * docs: update README
  * style: better comment style
  * feat: support utterances comment (#74)
  * Add a note to JSON output (#71)
  * To not break the RSS output (#70)
  * fix: url gets messed up with mobile navigation (#64)
  * feat: add option 'fork-me-on-github'
  * feat: support series shortcode (#62)
  * fix: normal image preview doesn't work while photoswipe is enable (#58)
  * fix: image preview in quick start error (#59)
  * fix: W3C validator errors
  * logo title use safeHTML
  * change safeURL to absLangURL in site-navbar menu for multi languages (#56)
  * docs: add contributor @juanwolf
  * i18n: Add fr translation (#54)
  * Update cdn mathjax version to 2.7.4
  * docs: update image preview
  * style: show <code> style anywhere, include in <li>, <table>, <h2>
  * fix: In code block, no language is specified, console show error #51
  * fix: hoek node module vulnerability (CVE-2018-3728) #50
  * Merge pull request #48 from Zebradil/master
  * conifg: default use photoswipe, compatibility both photoswipe & fancybox
  * fix: Unified code style, remove console.log in load-photoswipe.js
  * fix: add photoswipe local files
  * 🚸 Backward compatibility for photoswipe
  * 💄 Improve gallery style
  * 🎨 Format the code
  * ✨ Integrate hugo-easy-gallery and replace fancybox by photoswipe
  * 🙈 Ignore node environment
  * style: fix figure image style
  * feat: add custom favicon support
  * i18n: add Portuguese translation  #47
  * docs: update CHANGELOG to 1.3.0

1.3.0 / 2018-04-22
==================

  * 🚸 Improve UX and security using rel="noopener" (#45)
  * ♻️ Migration from highlight.js to Chroma
  * feat: support Git diff Minified JS and CSS
  * feat: add editorconfig support
  * refactor: main.js
  * feat: Footnote Tooltip support  (#36)
  * feat: add post content header-link support
  * style(<blockquote>): better blockquote style
  * style(<table>): better <table> style
  * fix(tags): use relURL tags link
  * feat: add submenu support #31
  * fix undefined .Site.Author.name errors
  * style(post): change the post-footer & post-copyright style
  * style: Increase font size for <code> tag
  * feat: add changelog
  * style: change default page display
  * style(social): open social iconfont link in new window
  * style(iconfont): add coding icon support
  * feat(shortcode): support youku shortcode
  * feat(i18n): Show list of available translations (#27)
  * Fix: access to tags when there are no tags (#26)
  * refactor(toc): new TOC befavior
  * feat: Add json feed (#25)
  * add i18n spanish suport (#20)
  * some seo
  * fix url after enable uglyURLs
  * support check uglyURLs set. must add uglyURLs to params config after set uglyURLs = true
  * style(menu): add new iconfont for external link
  * Auto open full link of menu in new window (#17)

1.2.0 / 2018-03-27
==================

  * docs: update to 1.2.0
  * docs: add contributor
  * Add support for Tencent Analytics
  * refactor: remove old iconfont
  * refactor: new iconfont
  * docs: add "Who use Hugo-theme-Jane"
  * add Russian translation
  * set archive-paginate default to 10 in line with hugo pagination default
  * fix: tag link no '/'
  * feat: add rel="me"
  * feat: custom head support  #8
  * feat: add gitment module
  * docs: defaultContentLanguage can only be lowercased
  * chore: rebuild css
  * style: change global-font color
  * fix: if archive-post-title too long, it's not left alignment.
  * docs: readme update
  * chore: renamed ./config.toml to dev-config.toml
  * Add option to show full .Content on home page
  * refactor: pagination behavior feat: add paginateOriginalStyle option
  * chore: rebuild css
  * fix: header adjusting (#1)
  * refactor: new pagination
  * feat: custom css&js support
  * remove unuse files
  * readme update
  * rss full content support

1.1.0 / 2018-03-07
==================

  * readme-zh update
  * readme update
  * theme preview update
  * fix example site

1.0.0 / 2018-03-06
==================

  * categories page update
  * tag cloud
  * shortcodes update
  * example articles update
  * click to disqus
  * remove example articles
  * create shortcodes
  * more automatic, update packages
  * change archive style
  * support i18n
  * update hreflang
  * heading update
  * modified  blockquote > p
  * change background color
  * fix min_version
  * first commit
