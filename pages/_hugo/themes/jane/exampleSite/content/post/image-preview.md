---
title: "Image Preview"
date: 2018-03-03T16:01:23+08:00
lastmod: 2018-03-04T16:01:23+08:00
draft: false
tags: ["preview", "image", "shortcodes", "tag-7"]
categories: ["docs", "shortcodes", "index"]

menu:
  main:
    parent: "docs"
    weight: 3
---

Thanks for [liwenyip/hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery) & [Zebradil · Pull Request #48](https://github.com/xianmin/hugo-theme-jane/pull/48) .

Now, we could use `{{</* gallery */>}}` shortcode in hugo-theme-jane.

## Normal Image

This is an image in `static/image` folder.

```markdown
![This is an image in `static/image` folder.](/image/example.jpg)
```

<!--more-->

## `{{</* figure */>}}` shortcode

### figure image with title

```
{{</* figure src="/image/example.jpg" title="figure image with title" */>}}
```


### figure image with caption

```
{{</* figure src="/image/example.jpg" caption="figure image with caption figure image with caption figure image with caption figure image with caption figure image with caption" */>}}
```

### more `{{</* figure */>}}` shortcode usage

Specifying your image files:

- `{{</* figure src="thumb.jpg" link="image.jpg" */>}}` will use `thumb.jpg` for thumbnail and `image.jpg` for lightbox
- `{{</* figure src="image.jpg" */>}}` or `{{</* figure link="image.jpg" */>}}` will use `image.jpg` for both thumbnail and lightbox
- `{{</* figure link="image.jpg" thumb="-small" */>}}` will use `image-small.jpg` for thumbnail and `image.jpg` for lightbox

Optional parameters:

- All the [features/parameters](https://gohugo.io/extras/shortcodes) of Hugo's built-in `figure` shortcode work as normal, i.e. src, link, title, caption, class, attr (attribution), attrlink, alt
- `size` (e.g. `size="1024x768"`) pre-defines the image size for PhotoSwipe. Use this option if you don't want to pre-load the linked image to determine its size.
- `class` allows you to set any custom classes you want on the `<figure>` tag.

Optional parameters for standalone `{{</* figure */>}}` shortcodes only (i.e. don't use on `{{</* figure */>}}` inside `{{</* gallery */>}}` - strange things may happen if you do):

- `caption-position` and `caption-effect` work the same as for the `{{</* gallery */>}}` shortcode (see below).
- `width` defines the [`max-width`](https://www.w3schools.com/cssref/pr_dim_max-width.asp) of the image displayed on the page. If using a thumbnail for a standalone figure, set this equal to your thumbnail's native width to make the captions behave properly (or feel free to come up with a better solution and submit a pull request :-)). Also use this option if you don't have a thumbnail and you don't want the hi-res image to take up the entire width of the screen/container.
- `class="no-photoswipe"` prevents a `<figure>` from being loaded into PhotoSwipe. If you click on the figure you'll instead a good ol' fashioned hyperlink to a bigger image (or - if you haven't specified a bigger image - the same one).


## `{{</* gallery */>}}` shortcode

### simple gallery

To specify a directory of image files:

```
{{</* gallery dir="/img/your-directory-of-images/" */>}}
```

- The images are automatically captioned with the file name.
- `[image].jpg` is used for the hi-res image, and `[image]-thumb.jpg` is used for the thumbnails.
- If `[image]-thumb.jpg` doesn't exist, then `[image].jpg` will be used for both hi-res and thumbnail images.
- The default thumbnail suffix is `-thumb`, but you can specify a different one e.g. `thumb="-small"` or `thumb="_150x150"`.


### To specify individual image files

```
{{</* gallery */>}}
  {{</* figure src="image1.jpg" */>}}
  {{</* figure src="image2.jpg" */>}}
  {{</* figure src="image3.jpg" */>}}
{{</* /gallery */>}}
```

**Optional parameters:**

- `caption-position` - determines the captions' position over the image. Options:
  - `bottom` (default)
  - `center`
  - `none` hides captions on the page (they will only show in PhotoSwipe)
- `caption-effect` - determines if/how captions appear upon hover. Options:
  - `slide` (default)
  - `fade`
  - `none` (captions always visible)
- `hover-effect` - determines if/how images change upon hover. Options:
  - `zoom` (default)
  - `grow`
  - `shrink`
  - `slideup`
  - `slidedown`
  - `none`
- `hover-transition` - determines if/how images change upon hover. Options:
  - not set - smooth transition (default)
  - `none` - hard transition
