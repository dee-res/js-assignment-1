(function () {
'use strict';
  
angular.module('LCApp', [])
.controller('LCController', LCController);

  LCController.$inject = ['$scope', '$filter'];
  function LCController($scope, $filter) {
    scope.name = "lunch";

    $scope.upper
    
  };
}
  
})();
  
