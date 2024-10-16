(function () {
'use strict';
  
angular.module('LCApp', [])
.controller('LCController', LCController);

 function LCController ($scope,
                        $filter,
                        $injector) {
   $scope.name= "lunch check";

   $scope.lunch = function () {
     var luCheck = $filter('lunchCheck');
     $scope.name = luCheck($scope.name);
  };
   
console.log($injector.annotate(LCController));
 }

function AnnotateMe (sandwich, soup, salad) {
  return "Salad";
}
  
})();
  
