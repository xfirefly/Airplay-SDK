(function($) {
  'use strict';

  // Filter posts by using their date on archives page : `/archives`

  /**
   * ArchivesFilter
   * @param {String} archivesElem
   * @constructor
   */
  var ArchivesFilter = function(archivesElem) {
    this.$form = $(archivesElem).find('#filter-form');
    this.$searchInput = $(archivesElem).find('input[name=date]');
    this.$archiveResult = $(archivesElem).find('.archive-result');
    this.$postsYear = $(archivesElem).find('.archive-year');
    this.$postsMonth = $(archivesElem).find('.archive-month');
    this.$postsDay = $(archivesElem).find('.archive-day');
    this.postsYear = archivesElem + ' .archive-year';
    this.postsMonth = archivesElem + ' .archive-month';
    this.postsDay = archivesElem + ' .archive-day';
    this.messages = {
      zero: this.$archiveResult.data('message-zero'),
      one: this.$archiveResult.data('message-one'),
      other: this.$archiveResult.data('message-other')
    };
  };

  ArchivesFilter.prototype = {

    /**
     * Run ArchivesFilter feature
     * @return {void}
     */
    run: function() {
      var self = this;

      self.$searchInput.keyup(function() {
        self.filter(self.sliceDate(self.getSearch()));
      });

      // Block submit action
      self.$form.submit(function(e) {
        e.preventDefault();
      });
    },

    /**
     * Get Filter entered by user
     * @returns {String} The date entered by the user
     */
    getSearch: function() {
      return this.$searchInput.val().replace(/([\/|.|-])/g, '').toLowerCase();
    },

    /**
     * Slice the date by year, month and day
     * @param {String} date - The date of the post
     * @returns {Array} The date of the post splitted in a list
     */
    sliceDate: function(date) {
      return [
        date.slice(0, 4),
        date.slice(4, 6),
        date.slice(6)
      ];
    },

    /**
     * Show related posts and hide others
     * @param {String} date - The date of the post
     * @returns {void}
     */
    filter: function(date) {
      var numberPosts;

      // Check if the search is empty
      if (date[0] === '') {
        this.showAll();
        this.showResult(-1);
      }
      else {
        numberPosts = this.countPosts(date);

        this.hideAll();
        this.showResult(numberPosts);

        if (numberPosts > 0) {
          this.showPosts(date);
        }
      }
    },

    /**
     * Display results
     * @param {Number} numbPosts - The number of posts found
     * @returns {void}
     */
    showResult: function(numbPosts) {
      if (numbPosts === -1) {
        this.$archiveResult.html('').hide();
      }
      else if (numbPosts === 0) {
        this.$archiveResult.html(this.messages.zero).show();
      }
      else if (numbPosts === 1) {
        this.$archiveResult.html(this.messages.one).show();
      }
      else {
        this.$archiveResult.html(this.messages.other.replace(/\{n\}/, numbPosts)).show();
      }
    },

    /**
     * Count number of posts
     * @param {String} date - The date of the post
     * @returns {Number} The number of posts found
     */
    countPosts: function(date) {
      return $(this.postsDay + '[data-date^=' + date[0] + date[1] + date[2] + ']').length;
    },

    /**
     * Show all posts from a date
     * @param {String} date - The date of the post
     * @returns {void}
     */
    showPosts: function(date) {
      $(this.postsYear + '[data-date^=' + date[0] + ']').show();
      $(this.postsMonth + '[data-date^=' + date[0] + date[1] + ']').show();
      $(this.postsDay + '[data-date^=' + date[0] + date[1] + date[2] + ']').show();
    },

    /**
     * Show all posts
     * @returns {void}
     */
    showAll: function() {
      this.$postsYear.show();
      this.$postsMonth.show();
      this.$postsDay.show();
    },

    /**
     * Hide all posts
     * @returns {void}
     */
    hideAll: function() {
      this.$postsYear.hide();
      this.$postsMonth.hide();
      this.$postsDay.hide();
    }
  };

  $(document).ready(function() {
    if ($('#archives').length) {
      var archivesFilter = new ArchivesFilter('#archives');
      archivesFilter.run();
    }
  });
})(jQuery);
