var app = angular.module("gnat", ['ngResource']);

app.controller("listController", function($scope, $http){
  $http({method: 'GET', url: 'works.json'}).success(function(data){
    $scope.works = data;
  });
});


app.directive('isoGrid', function($log){
  return {
    link: function(scope, element, attrs){
      element.isotope();
    }
  };

});