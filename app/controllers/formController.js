(function () {

    var FormController = function ($scope, $location, $routeParams, formFactory, sharedFactory) {
        $scope.loginError = false;

        $scope.login = function (username, password) {
            formFactory.login(username, password)
                .success(function(reports) {
                    $scope.loginError = false
                    console.log("Succcesss : " + reports);
                    sharedFactory.setProperty({"username": username});
                    $location.path('/reports');
                })
                .error(function(data, status, headers, config) {
                    console.log("Login Error");
                    $scope.loginError = true;
                      console.log(data.error + ' ' + status);
                });
        };

        $scope.test = "Asdfasdf";
    };

    FormController.$inject = ['$scope', '$location', '$routeParams', 'formFactory', 'sharedFactory'];

    angular.module('reportApp')
    .controller('FormController', FormController);
}());









/*
        $scope.upRank = function(book) {
            libraryFactory.upRank(book)
                .success(function(theBook) {
                    book.rank = theBook.rank;
                })
                .error(function(data, status, headers, config) {
                    console.log("UpRank Error");
                      console.log(data.error + ' ' + status);
                });
        }*/