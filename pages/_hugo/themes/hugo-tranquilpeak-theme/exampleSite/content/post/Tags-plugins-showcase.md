---
title: "Tags plugins showcase"
date: 2014-10-29
tags:
- tag plugins
- test
thumbnailImagePosition: left
thumbnailImage: //d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-6-140.jpg
---

This post is used to show how tag plugins are displayed. See [docs](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#tags) for more info.
<!--more-->

<!-- toc -->

# Alert

Read documentation to know how to use [Alert tag](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#alert)

{{< alert info >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert success >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert warning >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert danger >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

# Block Quote

Read documentation to know how to use [Block Quote tag](https://hexo.io/docs/tag-plugins.html#Block_Quote)

**Normal blockquote**

> Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.

**Quote from a book**

{{< blockquote "David Levithan" "Wide Awake" >}}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{{< /blockquote >}}

**Quote from Twitter**

{{< blockquote "@DevDocs" "https://twitter.com/devdocs/status/356095192085962752" >}}
NEW: DevDocs now comes with syntax highlighting. //devdocs.io
{{< /blockquote >}}

**Quote from an article on the web**

{{< blockquote "Seth Godin" "//sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html" "Welcome to Island Marketing" >}}
Every interaction is both precious and an opportunity to delight.
{{< /blockquote >}}

# Code Block

Read documentation to know how to use [Code Block tag](https://hexo.io/docs/tag-plugins.html#Code_Block)

<p></p>

**Normal code block**

```js
alert('Hello World!');
alert('Hello World!');
```

**With caption**

{{< codeblock "Array.map" >}}
array.map(callback[, thisArg])
{{< /codeblock >}}

**With caption and URL**

{{< codeblock "apache.conf" "apacheConf" "http://underscorejs.org/#compact" "apache.conf" >}}
# rewrite`s rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\.html$ [NC]
  RewriteCond ${map:${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=${map:${lower:%1}} [NC,L]
</Location>
{{< /codeblock >}}

# Gist

Read documentation to know how to use [Gist tag](https://hexo.io/docs/tag-plugins.html#Gist)

<p></p>

{{< gist imathis 996818 >}}

# Image

Read documentation to know how to use [Image tag](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#image)

<p></p>

{{< image classes="fancybox fig-100" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-15.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-15-750.jpg" >}}
{{< image classes="fancybox nocaption fig-50" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-4.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-4-375.jpg" title="Ferrari" >}}
{{< image classes="fancybox nocaption fig-50" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-12.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-12-375.jpg" title="BMW i8 Concept" >}}
{{< image classes="fancybox nocaption fig-33" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-14.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-14-250.jpg" >}}
{{< image classes="fancybox nocaption fig-33" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-9.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-9-250.jpg" >}}
{{< image classes="fancybox nocaption fig-33" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-2.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-2-250.jpg" >}}
{{< image classes="right fancybox fig-75" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-11.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-11-560.jpg" >}}
{{< image classes="right fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-8.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-8-185.jpg" >}}
{{< image classes="right fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-10.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-10-185.jpg" >}}
{{< image classes="right fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-5.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-5-185.jpg" >}}
{{< image classes="fancybox fig-50" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-13.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-13-375.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-17.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-17-185.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-18.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-18-185.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-19.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-19-185.jpg" >}}
{{< image classes="clear fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-20.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-20-185.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-21.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-21-185.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-22.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-22-185.jpg" >}}
{{< image classes="fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-23.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-23-185.jpg" >}}
{{< image classes="clear fancybox fig-25" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-24.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-24-185.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-25.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-25-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-26.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-26-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-27.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-27-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-28.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-28-150.jpg" >}}
{{< image classes="clear fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-29.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-29-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-35.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-35-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-30.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-30-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-31.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-31-150.jpg" >}}
{{< image classes="fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-32.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-32-150.jpg" >}}
{{< image classes="clear fig-20" src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-34.jpg" thumbnail="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-34-150.jpg" >}}

# jsFiddle

Read documentation to know how to use [jsFiddle tag](https://hexo.io/docs/tag-plugins.html#jsFiddle)

<p></p>

{{< jsfiddle ccWP7 >}}

# Pull Quote

Read documentation to know how to use [Pull Quote tag](https://hexo.io/docs/tag-plugins.html#Pull_Quote)

Donec non tempus arcu.
Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Duis vel mauris nulla. Maecenas mattis interdum ante, quis sagittis.
{{< pullquote left >}}
Here is a pullquote left. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{{< /pullquote >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie arcu, et
fringilla mauris placerat ac. Nullam luctus bibendum risus. Ut cursus sed ipsum feugiat egestas. Suspendisse elementum, velit eu consequat consequat, augue lorem dapibus libero, eget pulvinar dolor est sit amet nulla. Suspendisse a porta tortor, et posuere mi. Pellentesque ultricies, mi quis volutpat malesuada, erat felis vulputate nisl, ac congue ante tortor ut ante. Proin aliquam sem vel mauris tincidunt, elementum ullamcorper nisl pretium, ultrices cursus justo. Mauris porttitor commodo eros, ac ornare orci interdum in. Cras fermentum cursus leo sed mattis. In dignissim lorem sem, sit amet elementum mauris venenatis ac.
{{< pullquote right >}}
Here is a pullquote right. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{{< /pullquote >}}
Donec non tempus arcu. Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Duis vel mauris nulla.
Maecenas mattis interdum ante, quis sagittis nibh cursus et. Nulla facilisi. Morbi convallis gravida tortor, ut fermentum enim gravida et. Nunc vel dictum nisl, non ultrices libero.
Proin vestibulum felis eget orci consectetur lobortis. Vestibulum augue nulla, iaculis vitae augue vehicula,
dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.

# Highlight text

Read documentation to know how to use [Highlight text tag](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#highlight-text)

<p>{{< hl-text red >}}highlight red{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text green >}}highlight green{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text blue >}}highlight blue{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text purple >}}highlight purple{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text orange >}}highlight orange{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text yellow >}}highlight yellow{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text cyan >}}highlight cyan{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text primary >}}highlight primary{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text success >}}highlight success{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text warning >}}highlight warning{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.{{< hl-text danger >}}highlight danger{{< /hl-text >}} dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.</p>

# Tabbed code block

Read documentation to know how to use [Tabbed code block](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#tabbed-code-block)

<p></p>

{{< tabbed-codeblock tabbed_codeblock >}}
<!-- tab js -->
function $initHighlight(block, flags) {
  try {
    if (block.className.search(/\bno\-highlight\b/) != -1)
      return processBlock(block.function, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
    var e4x =
        <div>Example
            <p>1234</p></div>;
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /\d+[\s/]/g;
  }
  console.log(Array.every(classes, Boolean));
}
<!-- endtab -->
<!-- tab css -->
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body:first-of-type pre::after {
    content: 'highlight: ' attr(class);
  }
  body {
    background: linear-gradient(45deg, blue, red);
  }
}

@import url('print.css');
@page:right {
 margin: 1cm 2cm 1.3cm 4cm;
}

@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,
#content,
li[lang=ru] {
  font: Tahoma, Chunkfive, sans-serif;
  background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
  width: 100%;
}
<!-- endtab -->
<!-- tab html -->
<?xml version="1.0"?>
<response value="ok" xml:lang="en">
  <text>Ok</text>
  <comment html_allowed="true"/>
  <ns1:description><![CDATA[
  CDATA is <not> magical.
  ]]></ns1:description>
  <a></a> <a/>
</response>


<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
<!-- endtab -->
{{< /tabbed-codeblock >}}

# Youtube

Read documentation to know how to use [Youtube tag](https://hexo.io/docs/tag-plugins.html#YouTube)

<p></p>

{{< youtube BSVkI3Ds8E >}}

# Vimeo

Read documentation to know how to use [Vimeo tag](https://hexo.io/docs/tag-plugins.html#Vimeo)

<p></p>

{{< vimeo 147585091 >}}

# Wide image

Read documentation to know how to use [Wide image tag](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#wide-image)

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

<p></p>

{{< wide-image src="//d1u9biwaxjngwg.cloudfront.net/tag-plugins-showcase/car-1.jpg" title="Mercedes SLS" >}}

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
