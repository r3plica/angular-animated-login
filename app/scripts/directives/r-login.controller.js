(function () {
    'use strict';
  
    angular.module('r3plicaApp.directives').controller('RLoginController', controller);
  
    function controller(rLoginService) {
      var self = this;

      // Bindings
      self.init = init;

      //////////////////////////////////////////////////

      function init() {
        rLoginService.init();
      };
    };
  })();