angular.module('plantsApp')
.controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;
  
  function logout() {
    $auth.logout()
    .then(() => {
      $state.go('plantsIndex');
    });
  }

  const protectedStates = ['plantsEdit', 'plantsNew'];

  function secureState(e, toState) {
    main.message = null;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
      main.message = 'You must login to see that page!';
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
}
