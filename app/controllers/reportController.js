(function () {

    var ReportController = function ($scope, $routeParams, reportFactory) {
        
        $scope.test = "Test Variable";
        $scope.boxName = "";
        $scope.boxFlag = false;
        $scope.output = [];

        $scope.openBox = function(selected) {
            if ($scope.selected.label !== "") {
                $scope.boxFlag = true;
                $scope.output.push({
                                    heading: $scope.selected.label
                                  });
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

        $scope.addToHeading = function(areaText, label) {
            console.log("______aaaaaaaa________:" + areaText);
            console.log("and label is: " + label + "::::::::");
            for (var key in $scope.output) {
                if ($scope.output[key].heading === label) {
                    $scope.output[key].text = areaText;
                }
            }

        }


        $scope.options = [
            { label: 'Done'},
            { label: 'To-Do'},
            { label: 'Skipped'}
        ];





        
        
    };
    
    ReportController.$inject = ['$scope', '$routeParams', 'reportFactory'];

    angular.module('reportApp')
        .controller('ReportController', ReportController);
}());