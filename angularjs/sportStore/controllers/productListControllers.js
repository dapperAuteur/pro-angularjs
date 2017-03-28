angular.module("sportsStore")
  .controller("productListCtrl", function ($scope, $filter) {
    //I replace $scope with the variable isItThis and assigned 'this' to it to see if it would break the controller. it hasn't yet.

    var isItThis = this;

    var selectedCategory = null;

    isItThis.selectCategory = function (newCategory) {
      console.log('is it working');
      selectedCategory = newCategory;
    }

    isItThis.categoryFilterFn = function(product) {
      return selectedCategory == null || product.category == selectedCategory;
    }
  });
