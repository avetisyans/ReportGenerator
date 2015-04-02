(function () {
    var app = angular.module('reportApp', ['ngRoute', 'ngAnimate', 'ui.sortable']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ReportController',
                templateUrl: 'app/views/report.html'
             })            
            .when('/orders', {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .otherwise( { redirectTo: '/' });
    });
    
}());