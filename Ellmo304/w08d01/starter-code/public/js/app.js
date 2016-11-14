angular.module('plantsApp', ['ngMessages', 'ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject= ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('plantsIndex', {
    url: '/plants',
    templateUrl: '/templates/plantsIndex.html',
    controller: 'PlantsIndexController as plantsIndex'
  })
  .state('plantsNew', {
    url: '/plants/new',
    templateUrl: '/templates/plantsNew.html',
    controller: 'PlantsNewController as plantsNew'
  })
  .state('plantsShow', {
    url: '/plants/:id',
    templateUrl: '/templates/plantsShow.html',
    controller: 'PlantsShowController as plantsShow'
  })
  .state('plantsEdit', {
    url: '/plants/:id/edit',
    templateUrl: '/templates/plantsEdit.html',
    controller: 'PlantsEditController as plantsEdit'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginController as login'
  });
  $urlRouterProvider.otherwise('/plants');
}


Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';

  $authProvider.facebook({
    clientId: '1308530975838362'
  });

}
