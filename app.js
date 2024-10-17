(function() {
    angular.module('lunchCheck', [])
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
  
            
          


  
  
