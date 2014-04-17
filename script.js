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

ghHome.controller('ReposCtrl', function($scope, repos) {
  $scope.repos = [];
  repos.getPublic('bergold').then(function(rs) {
    $scope.repos.push({
      "name": "kaetering.bplaced.com",
      "description": "My main server",
      "homepage": "http://kaetering.bplaced.com"
    });
    angular.forEach(rs, function(r, i) {
      $scope.repos.push(r);
    });
  });
});
