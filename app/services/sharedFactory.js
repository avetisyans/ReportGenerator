(function() {
    
    var sharedFactory = function() {
        
        var factory = {};

        var property = "Test";

        factory.getProperty = function() {
        	return property;
        }

        factory.setProperty = function(value) {
        	property = value;
        }
               
        return factory;
    };
    
    
  //  sharedFactory.$inject = ['$http'];
    angular.module('reportApp').factory('sharedFactory', sharedFactory);
    
}());