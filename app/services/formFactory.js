(function() {
    
    var formFactory = function($http) {
        
        var factory = {};

        factory.login = function(username, password) {
        	return $http.post('/api/authenticate', {"username": username, "password": password });
        }
               
        return factory;
    };
    
    
    formFactory.$inject = ['$http'];
    angular.module('reportApp').factory('formFactory', formFactory);
    
}());











/*(function() {
    
    var libraryFactory = function($http) {
        
        var factory = {};
           
        factory.getGenre = function(genreName) {
            return $http.get('/api/books/' + genreName);
        };

        factory.upRank = function(book) {
        	return $http.put('/api/books/' + book.id, {"rank": ++book.rank});
        }

        factory.downRank = function(book) {
        	return $http.put('/api/books/' + book.id, {"rank": --book.rank});
        }
        
        return factory;
    };
    
    libraryFactory.$inject = ['$http'];
    angular.module('libraryApp').factory('libraryFactory', libraryFactory);
    
}());*/