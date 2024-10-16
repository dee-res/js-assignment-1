(function () {
'use strict';
  
angular.module('LCApp', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];
 function LCController($scope,) {
   $scope.name= "lunch check";

   $scope.sayMessage = function () {
     return "Enjoy!"
  };
 }
})();



//const str = 'Enjoy!'

//const words = str.split(' ');
//console.log(words[3]);

//const chars = str.split(' ');
//console.log(chars[8];

//const strCopy = str.split();
//console.log(strCopy);

  
})();
  
