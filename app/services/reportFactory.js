(function() {
    
    var reportFactory = function($http) {
        
        var factory = {};
               
        return factory;
    };
    
    
    reportFactory.$inject = ['$http'];
    angular.module('reportApp').factory('reportFactory', reportFactory);
    
}());