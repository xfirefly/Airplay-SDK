(function($) {
  'use strict';

  // Open and close the share options bar

  /**
   * ShareOptionsBar
   * @constructor
   */
  var ShareOptionsBar = function() {
    this.$shareOptionsBar = $('#share-options-bar');
    this.$openBtn = $('.btn-open-shareoptions');
    this.$closeBtn = $('#btn-close-shareoptions');
    this.$body = $('body');
  };

  ShareOptionsBar.prototype = {

    /**
     * Run ShareOptionsBar feature
     * @return {void}
     */
    run: function() {
      var self = this;

      // Detect the click on the open button
      self.$openBtn.click(function() {
        if (!self.$shareOptionsBar.hasClass('opened')) {
          self.openShareOptions();
          self.$closeBtn.show();
        }
      });

      // Detect the click on the close button
      self.$closeBtn.click(function() {
        if (self.$shareOptionsBar.hasClass('opened')) {
          self.closeShareOptions();
          self.$closeBtn.hide();
        }
      });
    },

    /**
     * Open share options bar
     * @return {void}
     */
    openShareOptions: function() {
      var self = this;

      // Check if the share option bar isn't opened
      // and prevent multiple click on the open button with `.processing` class
      if (!self.$shareOptionsBar.hasClass('opened') &&
        !this.$shareOptionsBar.hasClass('processing')) {
        // Open the share option bar
        self.$shareOptionsBar.addClass('processing opened');
        self.$body.css('overflow', 'hidden');
        setTimeout(function() {
          self.$shareOptionsBar.removeClass('processing');
        }, 250);
      }
    },

    /**
     * Close share options bar
     * @return {void}
     */
    closeShareOptions: function() {
      var self = this;

      // Check if the share options bar is opened
      // and prevent multiple click on the close button with `.processing` class
      if (self.$shareOptionsBar.hasClass('opened') &&
        !this.$shareOptionsBar.hasClass('processing')) {
        // Close the share option bar
        self.$shareOptionsBar.addClass('processing').removeClass('opened');

        setTimeout(function() {
          self.$shareOptionsBar.removeClass('processing');
          self.$body.css('overflow', '');
        }, 250);
      }
    }
  };

  $(document).ready(function() {
    var shareOptionsBar = new ShareOptionsBar();
    shareOptionsBar.run();
  });
})(jQuery);
