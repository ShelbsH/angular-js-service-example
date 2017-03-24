'use strict';

shop.controller('shopController', function ($scope, ProductService) {
  $scope.total = 0;
  $scope.createList = () => {

    if ($scope.name.length && $scope.price.length) {
      ProductService.generate($scope.name, $scope.price);
    }
  }

  $scope.getPrice = (total, checked) => {
    if(checked) {
      $scope.total += Number(total);
    }
    else {
      $scope.total -= Number(total);
    }
  }

  $scope.productList = ProductService.getList();
});