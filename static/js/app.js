/**
 * This file holds the main application routing for Rivalry angular application
 */

var rivalryApp = angular.module('rivalryApp', [
    'ngRoute',
    'ngAnimate',
    'catalogController'
]);


rivalryApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/catalog', { // route to get the current month's catalog
            templateUrl: 'partials/current-catalog.html',
            controller: 'CatalogController'
        }).
        when('/item/:itemId', { // route to get an item's detail
            templateUrl: 'partials/item-detail.html',
            controller: 'ItemDetailController'
        }).otherwise({ // if we don't know the route go to current catalog page
            redirectTo: '/catalog'
        })

    }]);


rivalryApp.controller("ViewCtrl", function($scope) {
    $scope.$on("$routeChangeSuccess", function(event, current, previous) {
        var previousCtrl = previous && previous.$$route && previous.$$route.controller;
        if (previousCtrl === "ItemDetailController") {
            $scope.animationStyle = "slideLeft";
        } else if (previousCtrl === "CatalogController") {
            $scope.animationStyle = "slideRight";
        }
        $scope.$apply();
    });
});