(function () {

    var ReportController = function ($scope, $routeParams, reportFactory) {
        
        $scope.test = "Test Variable";
        $scope.done = false;

        $scope.openBox= function(selected) {
            if ($scope.selected.label === "Done") {

                $scope.done = true;
            } else {
                $scope.done = false;
            }
        };


        $scope.options = [
            { label: 'Done', value: 1 },
            { label: 'To-Do', value: 2 }
        ];



        
        
    };
    
    ReportController.$inject = ['$scope', '$routeParams', 'reportFactory'];

    angular.module('reportApp')
        .controller('ReportController', ReportController);
}());