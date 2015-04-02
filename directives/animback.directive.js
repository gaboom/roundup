var directives = angular.module('anim', []);
 
directives.directive('animBack', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<img style="position:absolute;width:1024px;height:768px;z-index:-1" src="images/facetiles.png"/>'
  };
});