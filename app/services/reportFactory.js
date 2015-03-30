(function() {
    
    var reportFactory = function($http) {
        
        var factory = {};
        
/*        factory.getCustomers = function() {
            return $http.get('/api/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/api/customers/' + customerId);
        };
        
        factory.getOrders = function() {
            return $http.get('/api/orders');
        };
        
        factory.deleteCustomer = function(customerId) {
            return $http.delete('/api/customers/' + customerId);
        };*/
        
        return factory;
    };
    
    
    reportFactory.$inject = ['$http'];
    angular.module('reportApp').factory('reportFactory', reportFactory);
    
}());