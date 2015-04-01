(function () {

angular.module('reportApp').directive('selectAndBox', function() {
    return {
        restrict: 'AE', 
        templateUrl: "app/views/selectAndBox.html",
        link: function(scope, elem, attrs) {
            
            console.log('scope is: ', scope);
            console.log('elem is: ', elem);
            console.log('attrs is: ', attrs);

            }
        }
});


}());