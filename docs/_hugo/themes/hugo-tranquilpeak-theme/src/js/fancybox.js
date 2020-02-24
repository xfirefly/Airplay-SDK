(function($) {
  'use strict';
  
  // Run fancybox feature

  $(document).ready(function() {
    /**
     * Configure and run Fancybox plugin
     * @returns {void}
     */
    function fancyFox() {
      var arrows = true;
      var thumbs = null;

      // disable navigation arrows and display thumbs on medium and large screens
      if ($(window).height() > 480) {
        arrows = false;
        thumbs = {
          width: 70,
          height: 70
        };
      }

      $('.fancybox').fancybox({
        maxWidth: 900,
        maxHeight: 800,
        fitToView: true,
        width: '50%',
        height: '50%',
        autoSize: true,
        arrows: arrows,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic',
        prevEffect: 'none',
        nextEffect: 'none',
        padding: '0',
        helpers: {
          thumbs: thumbs,
          overlay: {
            css: {
              overflow: 'hidden',
              background: 'rgba(0, 0, 0, 0.85)'
            }
          }
        },
        afterLoad: function() {
          setTimeout(function() {
            $('.fancybox-next > span, .fancybox-prev > span').css('visibility', 'visible');
          }, 400);
        }
      });
    }

    fancyFox();
    
    $(window).smartresize(function() {
      fancyFox();
    });
  });
})(jQuery);
