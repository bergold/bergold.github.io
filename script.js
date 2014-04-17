var ghHome = angular.module('ghHome', []);

ghHome.factory('repos', function($http) {
  return {
    getMy: function(un) {
      return $http.get('https://api.github.com/users/' + un + '/repos').success(function(data, status) {
        return data;
      });
    }
  };
});

ghHome.controller('ReposCtrl', function($scope) {
  $scope.repos = [];
  $scope.goto = function(repo) {
  
  };
  repos.getMy('bergold').then(function(r) {
    console.log(r);
  });
});
