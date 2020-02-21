(function($) {
  'use strict';

  // Hide the header when the user scrolls down, and show it when he scrolls up

  /**
   * Header
   * @constructor
   */
  var Header = function() {
    this.$header = $('#header');
    this.headerHeight = this.$header.height();
    // CSS class located in `source/_css/layout/_header.scss`
    this.headerUpCSSClass = 'header-up';
    this.delta = 5;
    this.lastScrollTop = 0;
  };

  Header.prototype = {

    /**
     * Run Header feature
     * @return {void}
     */
    run: function() {
      var self = this;
      var didScroll;

      // Detect if the user is scrolling
      $(window).scroll(function() {
        didScroll = true;
      });

      // Check if the user scrolled every 250 milliseconds
      setInterval(function() {
        if (didScroll) {
          self.animate();
          didScroll = false;
        }
      }, 250);
    },

    /**
     * Animate the header
     * @return {void}
     */
    animate: function() {
      var scrollTop = $(window).scrollTop();

      // Check if the user scrolled more than `delta`
      if (Math.abs(this.lastScrollTop - scrollTop) <= this.delta) {
        return;
      }

      // Checks if the user has scrolled enough down and has past the navbar
      if ((scrollTop > this.lastScrollTop) && (scrollTop > this.headerHeight)) {
        this.$header.addClass(this.headerUpCSSClass);
      }
      else if (scrollTop + $(window).height() < $(document).height()) {
        this.$header.removeClass(this.headerUpCSSClass);
      }

      this.lastScrollTop = scrollTop;
    }
  };

  $(document).ready(function() {
    var header = new Header();
    header.run();
  });
})(jQuery);
