var ghHome = angular.module('ghHome', ['ngAnimate']);

ghHome.factory('repos', function($q, $http) {
  return {
    getPublic: function(un) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + un + '/repos').success(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
});

ghHome.controller('ReposCtrl', function($scope, $timeout, repos) {
  $scope.repos = [];
  repos.getPublic('bergold').then(function(rs) {
    angular.forEach(rs, function(r, i) {
      console.log(i, r);
      $timeout(function() {
        $scope.repos.push(r);
      }, i*500 + 500, false);
    });
  });
});
