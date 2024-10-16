(function () {
'use strict';
  
var LCApp = angular.module('LCApp', [])
.controller('LCController', LCController);

 function LCController ($scope,
                        $filter,
                        $injector) {
   $scope.name= "lunch check";

   $scope.lunch = function () {
     var luCheck = $filter('lunchCheck');
     $scope.name = luCheck($scope.name);
  };

const str = 'Enjoy!'

const words = str.split(' ');
console.log(words[3]);

const chars = str.split(' ');
console.log(chars[8];

const strCopy = str.split();
console.log(strCopy);

  
})();
  
