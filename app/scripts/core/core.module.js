(function () {
    'use strict';

    angular.module('r3plicaApp.core', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',

        'r3plicaApp.directives',
        'r3plicaApp.home'
    ]);
})();