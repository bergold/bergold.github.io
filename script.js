var ghHome = angular.module('ghHome', []);

ghHome.factory('repos', function($q, $http) {
  return {
    getMy: function(un) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + un + '/repos').success(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
});

ghHome.controller('ReposCtrl', function($scope, repos) {
  $scope.repos = [];
  $scope.goto = function(repo) {
  
  };
  $scope.log = function(repo) {
    console.log(repo);
    return repo.name;
  }
  repos.getMy('bergold').then(function(r) {
    console.log(r);
    $scope.repos = r;
  });
});
