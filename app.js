(function() {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.checkIfTooMuch = function() {
        if (!$scope.lunchItems) {
          $scope.message = "Please enter the data first";
          return;
        }
  
        var items = $scope.lunchItems.split(',').filter(item => item.trim() !== '');
        if (items.length === 0) {
          $scope.message = "Please enter the data first";
        } else if (items.length <= 3) {
          $scope.message = "Enjoy your meal!";
        } else {
          $scope.message = "Too much!";
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
  
