angular.module("sportsStore")
  .constant("productListActiveClass", "btn-primary")
  .controller("productListCtrl", function ($filter, productListActiveClass) {
    //I replace $scope with the variable isItThis, removed it from list of dependencies 'function($scope, $filter)' and assigned 'this' to it to see if it would break the controller. it hasn't yet.

    var isItThis = this;

    var selectedCategory = null;

    isItThis.selectCategory = function (newCategory) {
      console.log('is it working');
      selectedCategory = newCategory;
    }

    isItThis.categoryFilterFn = function(product) {
      return selectedCategory == null || product.category == selectedCategory;
    }

    isItThis.getCategoryClass = function(category){
      console.log('what class is this');
      return selectedCategory == category ? productListActiveClass : "";
    }
  });
