(function () {

angular.module('reportApp').directive('selectAndBox', function() {
    return {
        restrict: 'AE', 
        templateUrl: "app/views/selectAndBox.html"
    }
});

angular.module('reportApp').directive('makeHighlight', function() {
    return {
        link: function(scope, el, attrs) {
        	console.log('%c makeHighlight is working ', 'color: green');
        	console.log('%c makeHighlight is:' + scope.makeHighlight, 'color: orange');
        	el.on('change', function() {
        		var lb = scope.selected.label;
        		console.log('%c CHANGED: '+ scope.selected.label, 'color: brown');
        		var t = $('pre[highlight="'+ lb + '"');
        		console.log('t', t.prev());
        		t.animate({borderColor: "red"}, 200)
        		  .animate({borderColor: "black"}, 1000);
        		  t.siblings('strong').animate({color: "red"}, 200)
        		  .animate({color: "black"}, 1000);
        	});
        }
    }
});

/*angular.module('reportApp').directive('itemsDrag', function() {
	return {
		link: function(scope, element, attrs) {
			element.draggable();
			console.log('%c draggable ', 'color: green');
			scope.$on('$destroy', function() {
				element.off('**');
			});
		}
	}
});*/

/*app.directive('reportApp', function()
{
    return {
        link: function(scope, element, attrs)
        {
             element.draggable();
 console.log('%c draggable ', 'color: green');
             scope.$on('$destroy', function()
             {
                 element.off('**');
             });
        }
    };
});*/


}());