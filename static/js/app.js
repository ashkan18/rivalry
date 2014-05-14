// Declare the main module
var rivalryApp = angular.module('rivalryApp', [
    'ngRoute',
    'ngAnimate'
]);

// Initialize the main module
rivalryApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }

        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }

        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);

// Configure the main module
rivalryApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/catalog', {
            templateUrl: 'page1.html'
            //controller: 'CatalogController'
        })
        .when('/ash', {
            templateUrl: 'page2.html'
        })
        .when('/about', {
            templateUrl: 'page3.html'
        })
        .when('/mozh', {
            templateUrl: 'page4.html'
        })
        .otherwise({
            redirectTo: '/catalog'
        });
}]);