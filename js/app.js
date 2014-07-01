var app = angular.module("gnat", ['ngResource']);

app.controller("listController", function($scope, $http){
  var keywords = [];

  $http({method: 'GET', url: 'works.json'}).success(function(data){
    $scope.works = data;
  });

  $scope.$watch('works', function(n, o){
    if(n != o) {
      angular.forEach(n, function(value, key){
        $scope.works[key]['class'] = value.k.join(" ");

        angular.forEach(value.k, function(v, k){
          if($.inArray(v, keywords) == -1){
            keywords.push(v);
          }
        });
      });

      $scope.keywords = keywords;
    }
  });

  $scope.sortBy = function(arg){
    $(".list").isotope({ sortBy: 'year' });
  };

  $scope.filter = function(arg){
    $(".list").isotope({ filter: '.' + arg });
  }
});
