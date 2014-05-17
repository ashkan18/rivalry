// Declare the main module
var adminApp = angular.module('adminApp', [
    'ngRoute',
    'ngAnimate'
]);


// Configure the main module
adminApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/upload_image', {
            templateUrl: 'partials/admin_upload.html',
            controller: 'AdminController'
        })
        .when('/add_item', {
            templateUrl: 'partials/admin/add_item.html'
        })
        .otherwise({
            redirectTo: '/catalog'
        });
}]);