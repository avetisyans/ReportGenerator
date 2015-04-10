(function() {
    
    var reportFactory = function($http) {
        
        var factory = {};

        factory.getReportsByUsername = function(username) {
        	console.log("%c " + "Reaching factory", "color:blue;");
        	return $http.get('/api/reports/' + username);
        };


/*        factory.login = function(username, password) {
        	return $http.post('/api/authenticate', {"username": username, "password": password });
        }*/
               
        return factory;
    };
    
    
    reportFactory.$inject = ['$http'];
    angular.module('reportApp').factory('reportFactory', reportFactory);
    
}());