(function () {
'use strict';
  
angular.module('lunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {
    scope.name = "lunch";

    $scope.upper
    
  };
}
  
})();
  
