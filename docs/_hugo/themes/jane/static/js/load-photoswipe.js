/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/

/* Show an alert if this js file has been loaded twice */
if (window.loadphotoswipejs) {
  window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6")
}
var loadphotoswipejs = 1

/* TODO: Make the share function work */
$( document ).ready(function() {
  /*
  Initialise Photoswipe
  */
  var items = []; // array of slide objects that will be passed to PhotoSwipe()

  // for every figure & image element on the page:
  $('.post-content p > img, figure').each(function () {
    var $this = $(this);
    var $a, $img, $src, $title, $msrc;
    if ($this.attr('class') == 'no-photoswipe') return true; // ignore any figures where class="no-photoswipe"

    // get image properties,
    if ($this[0].tagName === 'IMG') {
      $src = $this[0].src;
      $msrc = $this[0].src;
      $title = $this[0].alt;
    } else {
      // else figure image
      $a = $this.find('a'),
      $img = $this.find('img'),
      $src = $a.attr('href'),
      $title = $img.attr('alt'),
      $msrc = $img.attr('src');
    }

    // if data-size on <a> tag is set, read it and create an item
    if ($a && $a.data('size')) {
      var $size 	= $a.data('size').split('x');
      var item = {
        src: $src,
        w: $size[0],
        h: $size[1],
        title: $title,
        msrc: $msrc
      };
      // console.log("Using pre-defined dimensions for " + $src);
    // if not, set temp default size then load the image to check actual size
    } else {
      var item = {
        src: $src,
        w: 800, // temp default size
        h: 600, // temp default size
        title: $title,
        msrc: $msrc
      };
      // console.log("Using default dimensions for " + $src);
      // load the image to check its dimensions
      // update the item as soon as w and h are known (check every 30ms)
      var img = new Image();
      img.src = $src;
      var wait = setInterval(function() {
        var w = img.naturalWidth,
          h = img.naturalHeight;
        if (w && h) {
          clearInterval(wait);
          item.w = w;
          item.h = h;
          // console.log("Got actual dimensions for " + img.src);
        }
      }, 30);
       }
    // Save the index of this image then add it to the array
    var index = items.length;
    items.push(item);
    // Event handler for click on a figure
    $this.on('click', function(event) {
      event.preventDefault(); // prevent the normal behaviour i.e. load the <a> hyperlink
      // Get the PSWP element and initialise it with the desired options
      var $pswp = $('.pswp')[0];
      var options = {
        index: index,
        bgOpacity: 0.8,
        showHideOpacity: true
      }
      new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
    });
  });
});
