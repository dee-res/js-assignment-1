(function () {
'use strict';
  angular.module('lunchCheck', [])
  .controller('LCController', LCController);

  LCController.$inject = ['$scope'];

  function LCController($scope) {
    $scope.dishes = '';
    $scope.message = '';
    $scope.checked = false;

    $scope.checkLunch = function() {
      if ($scope.dishes.trim().length === 0) {
        $scope.empty = true;
      } else {
          $scope.checked = true;
          $scope.empty = false:
          var arrayDishes = $scope.dishes.split(,);
          var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
            return v.trim() !== '';
          });

          if (arrayDishesWithoutEmptys.length <=3) {
            $scope.message = 'Enjoy!';
          } else {
              $scope.message = 'Too much!';
          }
      }
    };
  }
})();
            
          


  
  
  //angular.module('LCApp', [])
//.controller('LCController', LCController);

//LCController.$inject = ['$scope'];
//function LCController($scope) {
//$scope.name= "lunch check";

//  $scope.sayMessage = function () {
//    return "Enjoy!";
//  };
//}
// })();

//LCController.$inject = ['$scope'];
// function LCController($scope) {
 //  $scope.name= "lunch check";

//   $scope.sayMessage = function () {
 //    return "Enjoy!"
 // };
// }
//})();



//const str = 'Enjoy!'

//const words = str.split(' ');
//console.log(words[3]);

//const chars = str.split(' ');
//console.log(chars[8];

//const strCopy = str.split();
//console.log(strCopy);

  
})();
  
