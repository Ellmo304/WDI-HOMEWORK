angular.module('plantsApp', ['ngMessages', 'ngResource', 'ui.router'])
  .config(Router);

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
  });
  $urlRouterProvider.otherwise('/plants');
}
