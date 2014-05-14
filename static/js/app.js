var app = angular.module("app", [
    "ngRoute",
    "ngAnimate"
]);

app.config(function($routeProvider) {
    $routeProvider.
        when("/page1", {
            templateUrl: "page1.html",
            controller: "Page1Ctrl",
            animate: "slideLeft"
        }).
        when("/page2", {
            templateUrl: "page2.html",
            controller: "Page2Ctrl",
            animate: "slideRight"
        }).
        otherwise({
            redirectTo: "/page1"
        });
});

app.controller("ViewCtrl", function($scope) {

});

app.directive('animClass',function($route){
    return {
        link: function(scope, elm, attrs){
            var enterClass = $route.current.animate;
            elm.addClass(enterClass)
            scope.$on('$destroy',function(){
                elm.removeClass(enterClass)
                elm.addClass($route.current.animate)
            })
        }
    }
});

app.controller("Page1Ctrl", function($scope) {

});

app.controller("Page2Ctrl", function($scope) {

});