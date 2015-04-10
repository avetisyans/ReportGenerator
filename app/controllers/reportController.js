(function () {

    var ReportController = function ($scope, $routeParams, reportFactory, sharedFactory) {

        $scope.boxFlag = false;
        $scope.output = [];
        var outputForReport = [];
        var i = 0;

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

        $scope.addToHeading = function(areaText, label) {
            for (var key in $scope.output) {
                if ($scope.output[key].heading === label) {
                    $scope.output[key].text = areaText;
                }
            }
        }

        $scope.options = [
                            { label: 'Done'},
                            { label: 'To_Do'},
                            { label: 'Skipped'}
                         ];

        $scope.placeReport = function(report) {
            placed = true;
            console.log(report['Skipped']);
            console.log(report);
            var optionsForReport = [
                                { label: "Done"},
                                { label: 'To_Do'},
                                { label: 'Skipped'}
                             ];
        for (var key in optionsForReport) {
            var obj = {};
            var field = optionsForReport[key].label
            obj[field] = report.report_body[field];
            outputForReport.push(obj);
        }

        console.log(outputForReport);


        optionsForReport = [];
        outputForReport = [];
        }

    function init() {
            reportFactory.getReportsByUsername(sharedFactory.getProperty().username)
                .success(function(reports) {
                    $scope.reports = reports;
                })
                .error(function(data, status, headers, config) {
                    console.log("LibFactory Error");
                      console.log(data.error + ' ' + status);
                });
    }
        
    init();

    };

    ReportController.$inject = ['$scope', '$routeParams', 'reportFactory', 'sharedFactory'];

    angular.module('reportApp')
    .controller('ReportController', ReportController);
}());