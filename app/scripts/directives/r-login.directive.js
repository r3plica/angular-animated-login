(function () {
    'use strict';

    function directive() {
        function lnkFn(scope, element, attrs, controller) {
        }

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
    }

    angular.module('r3plicaApp.directives').directive('rLogin', directive);
})();