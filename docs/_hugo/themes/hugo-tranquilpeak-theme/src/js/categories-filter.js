(function($) {
  'use strict';

  // Filter posts by using their categories on categories page : `/categories`

  /**
   * CategoriesFilter
   * @param {String} categoriesArchivesElem
   * @constructor
   */
  var CategoriesFilter = function(categoriesArchivesElem) {
    this.$form = $(categoriesArchivesElem).find('#filter-form');
    this.$inputSearch = $(categoriesArchivesElem).find('input[name=category]');
    // Element where result of the filter are displayed
    this.$archiveResult = $(categoriesArchivesElem).find('.archive-result');
    this.$posts = $(categoriesArchivesElem).find('.archive');
    this.$categories = $(categoriesArchivesElem).find('.category-anchor');
    this.posts = categoriesArchivesElem + ' .archive';
    this.categories = categoriesArchivesElem + ' .category-anchor';
    // Html data attribute without `data-` of `.archive` element
    // which contains the name of category
    this.dataCategory = 'category';
    // Html data attribute without `data-` of `.archive` element
    // which contains the name of parent's categories
    this.dataParentCategories = 'parent-categories';
    this.messages = {
      zero: this.$archiveResult.data('message-zero'),
      one: this.$archiveResult.data('message-one'),
      other: this.$archiveResult.data('message-other')
    };
  };

  CategoriesFilter.prototype = {

    /**
     * Run CategoriesFilter feature
     * @return {void}
     */
    run: function() {
      var self = this;

      self.$inputSearch.keyup(function() {
        self.filter(self.getSearch());
      });

      // Block submit action
      self.$form.submit(function(e) {
        e.preventDefault();
      });
    },

    /**
     * Get the search entered by user
     * @returns {String} The name of the category
     */
    getSearch: function() {
      return this.$inputSearch.val().toLowerCase();
    },

    /**
     * Show related posts form a category and hide the others
     * @param {string} category - The name of the category
     * @return {void}
     */
    filter: function(category) {
      if (category === '') {
        this.showAll();
        this.showResult(-1);
      }
      else {
        this.hideAll();
        this.showPosts(category);
        this.showResult(this.countCategories(category));
      }
    },

    /**
     * Display results of the search
     * @param {Number} numbCategories - The number of categories found
     * @return {void}
     */
    showResult: function(numbCategories) {
      if (numbCategories === -1) {
        this.$archiveResult.html('').hide();
      }
      else if (numbCategories === 0) {
        this.$archiveResult.html(this.messages.zero).show();
      }
      else if (numbCategories === 1) {
        this.$archiveResult.html(this.messages.one).show();
      }
      else {
        this.$archiveResult.html(this.messages.other.replace(/\{n\}/, numbCategories)).show();
      }
    },

    /**
     * Count number of categories
     * @param {String} category - The name of theThe date of the post category
     * @returns {Number} The number of categories found
     */
    countCategories: function(category) {
      return $(this.posts + '[data-' + this.dataCategory + '*=\'' + category + '\']').length;
    },

    /**
     * Show all posts from a category
     * @param {String} category - The name of the category
     * @return {void}
     */
    showPosts: function(category) {
      var self = this;
      var parents;
      var categories = self.categories + '[data-' + self.dataCategory + '*=\'' + category + '\']';
      var posts = self.posts + '[data-' + self.dataCategory + '*=\'' + category + '\']';

      if (self.countCategories(category) > 0) {
        // Check if selected categories have parents
        if ($(categories + '[data-' + self.dataParentCategories + ']').length) {
          // Get all categories that matches search
          $(categories).each(function() {
            // Get all its parents categories name
            parents = $(this).attr('data-' + self.dataParentCategories).split(',');
            // Show only the title of the parents's categories and hide their posts
            parents.forEach(function(parent) {
              var dataAttr = '[data-' + self.dataCategory + '=\'' + parent + '\']';
              $(self.categories + dataAttr).show();
              $(self.posts + dataAttr).show();
              $(self.posts + dataAttr + ' > .archive-posts > .archive-post').hide();
            });
          });
        }
      }
      // Show categories and related posts found
      $(categories).show();
      $(posts).show();
      $(posts + ' > .archive-posts > .archive-post').show();
    },

    /**
     * Show all categories and all posts
     * @return {void}
     */
    showAll: function() {
      this.$categories.show();
      this.$posts.show();
      $(this.posts + ' > .archive-posts > .archive-post').show();
    },

    /**
     * Hide all categories and all posts
     * @return {void}
     */
    hideAll: function() {
      this.$categories.hide();
      this.$posts.hide();
    }
  };

  $(document).ready(function() {
    if ($('#categories-archives').length) {
      var categoriesFilter = new CategoriesFilter('#categories-archives');
      categoriesFilter.run();
    }
  });
})(jQuery);
