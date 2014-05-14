/**
 * This file holds the main application routing for Rivalry angular application
 */

/*var rivalryApp = angular.module('rivalryApp', [
    'ngRoute',
    'ngAnimate']);


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

*/
var app = angular.module("app", [
    "ngRoute",
    "ngAnimate"
]);

app.config(function($routeProvider) {
    $routeProvider.
        when("/catalog", {
            templateUrl: "partials/current-catalog.html",
            controller: "Page1Ctrl"
        }).
        when("/item/:itemId", {
            templateUrl: "partials/item-detail.html",
            controller: "Page2Ctrl"
        }).
        otherwise({
            redirectTo: "/page1"
        });
});

app.controller("ViewCtrl", function($scope) {
    $scope.$on("$routeChangeSuccess", function(event, current, previous) {
        var previousCtrl = previous && previous.$$route && previous.$$route.controller;
        if (previousCtrl === "Page1Ctrl") {
            $scope.animationStyle = "slideLeft";
        } else if (previousCtrl === "Page2Ctrl") {
            $scope.animationStyle = "slideRight";
        }
        $scope.$apply();
    });
});

app.controller("Page1Ctrl", function($scope) {
});

app.controller("Page2Ctrl", function($scope) {
});
