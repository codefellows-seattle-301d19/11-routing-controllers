'use strict';

(function(module) {
  const aboutController = {};

  aboutController.show = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
