function AuthCtrl($scope, $state, Auth) {
  // User can't log in after the logout session without a page refresh,
  // gives unprocessable entity error.
  // Read that it might be how devise stores the cookie inside the browser.
  // Devise asking to use permit instead of for, since it's depricated.
  // After adding permit, login started acting up. More unprocessable entity.
  // read in the terminal 'Can't verify CSRF token authenticity'. Already used
  // 2 different types of gems for CSRF, neither of which seem to work.
  // Will come back to later.
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}

angular
  .module('app')
  .controller('AuthCtrl', AuthCtrl)
