/**
 * In this file we define the catalog controllers, we can use backbone at this point to call the ajax if we want
 * for now I'm using simple ajax calls
 */
var catalogController = angular.module('catalogController', []);

var WEBSERVICES_URL = 'http://rivalry-studio.herokuapp.com/';
var WEBSERVICES_ENDPOINT = {
    catalog: "/catalog/",
    item_detail: "/catalog/"
}

// define Catalog Controller which returns items in current catalog, and more detail about this month
myApp.controller('CatalogController', ['$scope', '$http',
    function($scope, $http) {

        /*$http({method: 'GET', url: WEBSERVICES_URL + WEBSERVICES_ENDPOINT.catalog})
            .success(function(data, satus, headers, config){
                $scope.catalog_items = data
            }).error(function(data, status, headers, config) {
                    console.log("There was an error in getting current catalog");
            });
         */
}]);



// define item detail controller where we get detail for a selected item
myApp.controller('ItemDetailController', [ '$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {

        if ($routeParams.appPsk === undefined) {
            console.log("Unknown request");
            return;
        }
        $http({method: 'GET', url: WEBSERVICES_URL + WEBSERVICES_ENDPOINT.item_detail + $routeParams.appPsk + "/"})
            .success(function(data, satus, headers, config){
                 $scope.application = data
            }).error(function(data, status, headers, config) {
                 console.log("There was and error in getting item detail");
            });

}]);