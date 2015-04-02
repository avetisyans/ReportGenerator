(function () {

    var ReportController = function ($scope, $routeParams, reportFactory) {

        $scope.test = "Test Variable";
        $scope.boxName = "";
        $scope.boxFlag = false;
        $scope.output = [];
        var nameExists = false;

        $scope.openBox = function(selected) {
            if ($scope.selected.label !== "") {
                $scope.boxFlag = true;
                nameExists = false;
                for (var key in $scope.output) {
                    if ($scope.output[key].heading === $scope.selected.label) {
                        nameExists = true;
                        console.log('%c nameExists is: ', 'color: blue',nameExists);
                        $scope.areaText = $scope.output[key].text;
                    }
                }

                if (nameExists === false) {
                    console.log('%c nameExists is: ', 'color: orange',nameExists);
                  $scope.output.push({
                    heading: $scope.selected.label
                });  
                  $scope.areaText = "";
              }

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