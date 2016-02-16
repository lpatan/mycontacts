'use strict';

angular.module('myContactsApp',['ngCookies',
                                    'ngResource',
                                    'ngRoute',
                                    'ngSanitize',
                                    'utf8-base64',
                                    'ui.bootstrap'])
.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        	templateUrl : 'views/contacts.html',
        	controller  : 'ContactsController'
        })
        .otherwise({
            redirectTo  : '/error'
        })

});