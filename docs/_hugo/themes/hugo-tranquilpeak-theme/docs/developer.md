# Developer documentation #

This documentation will help you to understand Tranquilpeak Hugo theme code.

If you want to report a bug or ask a question, [create an issue](https://github.com/kakawait/hugo-tranquilpeak-theme/issues/new).

## Summary ##

- [General](#general)
- [Requirements](#requirements)
- [Installation](#installation)
- [Code style](#code-style)
- [Code structure](#code-structure)
    * [Views](#views)
    * [Assets](#assets)
         * [Stylesheets](#stylesheets)
         * [Images](#images)
         * [Javascript](#javascript)
- [NPM scripts](#npm-scripts)
- [Grunt tasks](#grunt-tasks)
    * [Tasks structure](#tasks-structure)
    * [Pipeline](#pipeline)
    * [Config tasks](#config-tasks)
    * [Register tasks](#register-tasks)
- [Build](#build)
- [Running](#running)

## General ##

- **Author** : Thibaud Leprêtre
- **Version** : 0.4.7-BETA (based on Hexo version 1.10.0)
- **Compatibility** : Hugo v0.53

## Requirements ##

1. **Hugo** : v0.16 or higher, see official documentation (https://gohugo.io/overview/installing/)
2. **Grunt CLI** : v0.1.13 or higher. Run `npm install grunt-cli -g`

## Installation ##

1. Run `git clone https://github.com/kakawait/hugo-tranquilpeak-theme.git`
2. Rename the folder in `tranquilpeak` and place it in `themes` folder of your Hexo blog
3. Modify the hugo config in `config.toml` by changing `theme` variable  to `tranquilpeak`
4. Go in `theme/tranquilpeak` folder with `cd themes/tranquilpeak`
5. Install [requirements](#requirements)
6. Run `npm install` to install [NPM dependencies](#npm-dependencies)

If you want to configure the theme, please follow the [user documentation](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md)

## Code style ##

We use [ESLint](http://eslint.org) based on Google code style to maintain javascript code style.
Check code style with :
``` bash
npm run lint
```

## Code structure ##

```
tranquilpeak
├── docs
├── layout
├── src
└── tasks
```

|File/Folder|Description|
|---|---|
|**docs**|Contains user and developer documentation|
|**layout**|Contains all views|
|**src**|Contains all assets (css, js and images)|
|**tasks**|Contains all grunt tasks|

<!--### Languages ###

Each files contains all labels used in the theme.
If you want to add a new language, duplicate an existing language file and replace all string by their translation.-->

### Views

```
├── layout
    ├── partials
    │   ├── post
    │   ...
    ...
...
```
|Folder|Description|
|---|---|
|layout|Contails all mains views|
|layout/partial|Contains all partial views included in main views|
|layout/partial/post|Contains all partial views to build post|

### Assets

#### Stylesheets

SCSS structure follow 7-1 pattern of [sass guidelines](http://sass-guidelin.es/#the-7-1-pattern)
If you want more information and to understand better this code, consult [sass guidelines](http://sass-guidelin.es/)

#### Images

```
├── images
    └── cover.jpg
```
|File|Description|
|---|---|
|cover.png|Default background cover of the blog|

Contains all images of the theme.

#### Javascript

```
├── js
    ├── .eslintrc.json
    ├── about.js
    ├── archives-filter.js
    ├── categories-filter.js
    ├── codeblock-resizer.js
    ├── fancybox.js
    ├── header.js
    ├── image-gallery.js
    ├── post-bottom-bar.js
    ├── share-options.js
    ├── sidebar.js
    ├── smartresize.js
    ├── tabbed-codeblocks.js
    └── tags-filter.js
```
|File|Description|
|---|---|
|about.js|Fade out the blog and let drop the about card of the author and vice versa|
|archives-filter.js|Filter posts by using their date on archives page : `/archives`|
|categories-filter.js|Filter posts by using their categories on archives page : `/categories`|
|codeblock-resizer.js|Resize code blocks to fit the screen width|
|fancybox.js.js|Run Fancybox plugin|
|header.js|Hide the header when the user scrolls down, and show it when he scrolls up|
|image-gallery.js|Resize all images of an image-gallery|
|post-bottom-bar.js|Hide the post bottom bar when the post footer is visible by the user, and vice versa|
|share-options.js|Open and close the share-options bar|
|sidebar.js|Open and close the sidebar by swiping the sidebar and the blog and vice versa|
|smartresize.js|Debouncing function from [John Hann](https://github.com/unscriptable)|
|tabbed-codeblocks.js|Animate tabs of tabbed code blocks|
|tags-filter.js|Filter posts by using their tags on archives page : `/tags`|

Each file correspond to a feature.

## NPM scripts

Use `npm run <script_name>` to run one of these scripts. E.g : `npm run start`

|`npm run ...`|Description|
|---|---|
|`start`|Build the theme once and rebuild after each change|
|`prod`|Build the theme for production. (synchronize images, fonts, compile assets (css and js) with some optimization (concat and minify) and link it to views)|
|`lint`|Check code style with [ESLint](http://eslint.org)|

## Grunt tasks ##

### Tasks structure

```
├── tasks
    ├── config
    ├── register
    └── pipeline.js
```

|File/folder|Description|
|---|---|
|config|Default tasks|
|register|Alias tasks which call multiple default tasks|
|pipeline.js|Files which contains a list of javascript and stylesheets files linked to the blog|

### Pipeline

``` javascript
// Js files to inject in `layout/partials/script.html`
var tranquilpeakJsFilesToInject = [
    'jquery.js',
    'jquery.fancybox.js',
    'jquery.fancybox-thumbs.js',
    'tranquilpeak.js'
];
// Css files to inject in `layout/partials/head.html`
var tranquilpeakCssFilesToInject = [
    'font-awesome.css',
    'jquery.fancybox.css',
    'jquery.fancybox-thumbs.css',
    'tranquilpeak.css'
];
```
|Variable|Description|
|---|---|
|tranquilpeakJsFilesToInject|Files injected in `layout/partials/script.html` (developement environment)|
|tranquilpeakCssFilesToInject|Files injected in`layout/partials/head.html` (developement environment)|

On production environment, these javascript and stylesheets files are concatenate and minify in 1 javascript file and 1 stylesheet file and linked to their respective views

### Config tasks

|Task|Description|
|---|---|
|clean|Delete `src/assets` folder|
|concat|<ul><li>devJs : Concat all javascript files located in `src/js/` into 1 file : `src/assets/js/tranquilpeak.js`</li><li>prodCss : Concat all stylesheets files located in `src/assets/css/` into 1 file : `src/assets/css/style.css`</li><li>prodJs : Concat all javascript listed in `tasks/pipeline.js` in 1 file : `src/assets/js/script.js`</li></ul>|
|cssmin|Minify `src/assets/cssstyle.css` file in : `src/assets/cssstyle.min.css`|
|exec|<ul><li>eslint : run `eslint .`</li></ul>|
|sails-linker|<ul><li>devJs : Link all javascript files listed in `tasks/pipeline.js`  to `layout/partials/script.html`</li><li>devCss : Link all stylesheets files listed in `tasks/pipeline.js`  to `layout/partials/head.html`</li><li>prodJs : Link `src/assets/js/script.min.js` file in `layout/partials/script.html`</li><li>prodCss : Link `src/assets/js/style.min.css` file in `layout/partials/head.html`</li></ul>|
|sass|Compile `src/scss/tranquilpeak.scss` file in `src/assets/css/tranquilpeak.css`|
|sync|Synchronize images from `src/images` to `src/assets/images` and fonts from `src/fonts` to `src/assets/fonts`|
|watch|Watch assets from `src/*/**/*` folder to detect changes and launch `syncAssets` task|

### Register tasks

|Task|Description|
|---|---|
|build|Synchronize images, fonts, compile assets (css and js) and link it to views|
|buildProd|Synchronize images, fonts, compile assets (css and js) with some optimization (concat and minify) and link it to views|
|default|Build the theme once and rebuild after each change|
|eslint|Check code style with ESLint|
|compileAssets|Compile scss files and concat js files|
|linkAssets|Link all javascript and stylesheets files to views|
|linkAssetsProd|Link one javascript file and one stylesheet file (concatenated and minified) to views|
|syncAssets|Synchronize assets (css, js, fonts and images)|

When you run `grunt build` or `grunt buildProd` tasks, a `source/assets` folder will be created with all files generated in. When you will start your hexo server, only this folder will be copied in `public` folder

## Build ##

### Development environment

1. Run `npm run start` and start coding :)

### Production environment (before deploying your blog)

1. Run `npm run prod` to build the project with some optimization (concat and minify) to reduce number of HTTP requests and improve performance.

## Running ##

Run `hugo server` and start coding! :)
