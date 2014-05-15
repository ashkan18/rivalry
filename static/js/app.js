// Declare the main module
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate'
]);

// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.goPath = function (path, pageAnimationClass) {

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
    $rootScope.x = 1;
    $rootScope.y = 1;
    $rootScope.go = function (direction) {
        switch (direction) {
            case "right":
                if ($rootScope.x === 0){
                    // we are on left page go to home
                    $rootScope.goPath('/catalog', 'slideLeft');
                } else if ($rootScope.x === 1){
                    // we are on catalog, go to mozh
                    $rootScope.goPath('/ash', 'slideLeft')
                }
        }

    };
}]);

// Configure the main module
myApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/catalog', {
            templateUrl: 'partials/catalog.html',
            controller: 'CatalogController'
        })
        .when('/mozh', {
            templateUrl: 'partials/mozh.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .when('/ash', {
            templateUrl: 'partials/ash.html'
        })
        .otherwise({
            templateUrl: 'partials/catalog.html'
        });
}]);