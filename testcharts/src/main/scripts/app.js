'use strict';

angular.module('RetailApp', ['ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'utf8-base64',
    'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/itemDetails.html',
                controller: 'ItemDetailsController',
                
            })

            .when('/item', {
                templateUrl: 'views/itemDetails.html',
                controller: 'ItemDetailsController'
            })

            .when('/error', {
                templateUrl: 'error.html',
                controller: 'ItemDetailsController'
            })
            .otherwise({
                redirectTo: '/error'
            })

    });
