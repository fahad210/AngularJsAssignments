(function (){
  'use strict';
  var ToBuyList = [
  {
    name: "Milk",
    quantity: "10"
  },
  {
    name: "Donuts",
    quantity: "20"
  },
  {
    name: "Cookies",
    quantity: "30"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Peanut Butter",
    quantity: "40"
  }
];
var AlreadyBoughtList = [];
  angular.module('ChecOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController);
  ToBuyController.$inject = ['$scope'];
  AlreadyBoughtController.$inject = ['$scope'];

  function ToBuyController($scope){
  $scope.ToBuyList=ToBuyList;
  $scope.Bought = function(index){

    var obj = $scope.ToBuyList[index];
    AlreadyBoughtList.push(obj);
    $scope.ToBuyList.splice(index,1);

  };

  }
  function AlreadyBoughtController($scope){
  $scope.BoughtMessage="Nothing bought yet.";
  $scope.AlreadyBoughtList=AlreadyBoughtList;
  // if($scope.AlreadyBoughtList.length>0)
  // {
  //   $scope.BoughtMessage="";
  // }

  }

})();
