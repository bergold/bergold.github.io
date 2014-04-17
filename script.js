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

ghHome.controller('ReposCtrl', function($scope, $location, repos) {
  $scope.repos = [];
  $scope.goto = function(repo) {
    $location.path(repo.homepage || repo.html_url);
  };
  repos.getMy('bergold').then(function(r) {
    $scope.repos = r;
  });
});
