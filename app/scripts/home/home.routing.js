(function () {
    'use strict';
    
    function routing($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: "/",
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'controller',
            data: {
                pageTitle: 'Home'
            }
        });
    }

    angular.module('r3plicaApp.home').config(routing);
})();