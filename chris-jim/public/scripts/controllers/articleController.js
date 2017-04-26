'use strict';

(function(module) {
  const articleController = {};

  articleController.show = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
