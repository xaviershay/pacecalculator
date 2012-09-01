angular.module('myApp', []).directive('slider', function() {
    return {
        restrict:'A',
        link: function(scope,element,attrs){
           element.slider({
                orientation: "horizontal",
                range: true,
                min: scope.min,
                max: scope.max,
                values: scope.range,
                slide: function( event, ui ) {
                 scope.$apply(function() {
                   scope.range = ui.values
                 })
                }
            });
        }
    };
}).directive('nslider', function() {
    return {
        restrict:'A',
        link: function(scope,element,attrs){
           element.slider({
                orientation: "horizontal",
                min: 1,
                max: 60,
                value: scope.n,
                slide: function( event, ui ) {
                 scope.$apply(function() {
                   scope.n = ui.value
                 })
                }
            });
        }
    };
}).filter('formatTime', function() {
  return function(input) {
    return formatTime(input)
  }
});
