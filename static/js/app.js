// Declare the main module
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate'
]);

// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    $rootScope.handleKeyPress = function(eve) {

        switch (eve.which) {
            case 37:
                // left
                $rootScope.go('left');
                break;
            case 39:
                // right
                $rootScope.go('right');
                break;
            case 38:
                // up
                $rootScope.go('up');
                break;
            case 40:
                // down
                $rootScope.go('down');
                break;

        }
    }
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
                    $rootScope.x = 1;
                } else if ($rootScope.x === 1){
                    // we are on catalog, go to mozh
                    $rootScope.goPath('/ash', 'slideLeft');
                    $rootScope.x = 2;
                }
                break;
            case 'left':
                if ($rootScope.x === 1){
                   // we are on catalog page, left means go to mozh
                   $rootScope.goPath('/mozh', 'slideRight');
                   $rootScope.x = 0;
                } else if ($rootScope.x === 2) {
                    // we are on ash page, go to catalog
                    $rootScope.goPath('/catalog', 'slideRight');
                    $rootScope.x = 1;
                }
                break;
            case 'up':
                if ($rootScope.y === 0){
                    // we are on first row, go up to about
                    $rootScope.goPath('/about', 'slideUp');
                    $rootScope.y = 1;
                }
                break;
            case 'down':
                if ($rootScope.y === 1){
                    // we are on about, go down to catalog
                    $rootScope.goPath('/catalog', 'slideDown');
                    $rootScope.y = 0;
                }
                break;

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
            redirectTo: '/catalog'
        });
}]);