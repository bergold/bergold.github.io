var ghHome = angular.module('ghHome', []);

ghHome.factory('repos', function($http) {
  return {
    getMy: function(un) {
      return $http.get('https://api.github.com/users/' + un + '/repos').success(function(xhr) {
        return xhr.data;
      });
    }
  };
});

ghHome.controller('ReposCtrl', function($scope, repos) {
  $scope.repos = [];
  $scope.goto = function(repo) {
  
  };
  repos.getMy('bergold').then(function(r) {
    $scope.repos = r;
  });
});
