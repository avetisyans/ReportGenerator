(function () {
    var app = angular.module('reportApp', ['ngRoute', 'ngAnimate', 'ui.sortable']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'FormController',
                templateUrl: 'app/views/form.html'
             })            
            .when('/reports', {
                controller: 'ReportController',
                templateUrl: 'app/views/report.html'
            })
            .otherwise( { redirectTo: '/' });
    });
    
}());