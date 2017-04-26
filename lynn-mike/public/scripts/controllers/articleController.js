'use strict';

(function(module) {
  const articleController = {};

  articleController.init = function() {
    Article.fetchAll(articleView.initIndexPage)
    $('.tab-content').hide();
    $('#articles').show();
  }

  module.articleController = articleController;
})(window);
