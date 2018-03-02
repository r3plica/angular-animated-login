(function () {
    'use strict';

    angular.module('r3plicaApp.directives').directive('rLogin', directive);

    function directive() {
        return {
            restrict: 'A',
            templateUrl: 'scripts/directives/r-login.html',
            controller: 'RLoginController',
            controllerAs: 'controller',
            bindToController: true,
            link: lnkFn,
            scope: {
                callback: '=rLogin'
            }
        };

        function lnkFn(scope, element, attrs, controller) {
            controller.init();
        };        
    };
})();