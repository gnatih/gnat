var app = angular.module("gnat", ['ngResource']);

app.controller("listController", function($scope, $http){
  $scope.$watch('works', function(n, o){
    if(n != o) {
      angular.forEach(n, function(value, key){
        console.log(key);
      });

    }
    // if(newVal.length > 0) console.log("loaded");
  });

  $http({method: 'GET', url: 'works.json'}).success(function(data){
    $scope.works = data;
  });

  $scope.sortBy = function(arg){
    console.log(arg);
    $(".list").isotope({ filter: '.featured' });
  };
});


app.directive('isoGrid', function($log){
  return {
    link: function(scope, element, attrs){
      // element.isotope();
    }
  };

});