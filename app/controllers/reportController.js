(function () {

    var ReportController = function ($scope, $routeParams, reportFactory) {
        
        $scope.test = "Test Variable";
        $scope.boxName = "";
        $scope.boxFlag = false;

        $scope.openBox = function(selected) {
            if ($scope.selected.label === "Done") {
                $scope.boxFlag = true;
            } else {
                $scope.boxFlag = false;
            }
        };

        $scope.openAnotherBox = function(selected) {
            switch ($scope.selected.label) {
                case "Done":
                    $scope.boxFlag = true;
                    break;
                case "To-Do":
                    $scope.boxFlag = true;
                    break;
            }
        };


        $scope.options = [
            { label: 'Done'},
            { label: 'To-Do'}
        ];



        
        
    };
    
    ReportController.$inject = ['$scope', '$routeParams', 'reportFactory'];

    angular.module('reportApp')
        .controller('ReportController', ReportController);
}());