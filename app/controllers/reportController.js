(function () {

    var ReportController = function ($scope, $routeParams, reportFactory, sharedFactory) {
        var reportFormat = [];
        $scope.output = {};
        $scope.i = 1;

        function init() {
                reportFactory.getReportsByUsername(sharedFactory.getProperty().username)
                    .success(function(reports) {
                        console.log("%c report is: " + reports, "color: orange;");
                        $scope.reports = reports;

                    })
                    .error(function(data, status, headers, config) {
                        console.log("LibFactory Error");
                          console.log(data.error + ' ' + status);
                    });
        }
            
        init();

        $scope.placeReport = function(reports) {
            console.log("Calling placeReport");
            $scope.reportModel = [];
            reportFormat = [];

                for (var k in reports.report_body) {
                    if (reports.report_body.hasOwnProperty(k)) {
                        var obj = {};
                        console.log(k + " --> " + reports.report_body[k]);
                        obj['reportHeader'] = k;
                        obj['reportBody'] = reports.report_body[k];
                       
                    }
                     reportFormat.push(obj);
                }

            $scope.reportModel = reportFormat;
        }

        $scope.alignBody = function(selected) {
            console.log("%c " + "selected is: " + selected, "color:purple;");
        }
    };

    ReportController.$inject = ['$scope', '$routeParams', 'reportFactory', 'sharedFactory'];

    angular.module('reportApp')
    .controller('ReportController', ReportController);
}());