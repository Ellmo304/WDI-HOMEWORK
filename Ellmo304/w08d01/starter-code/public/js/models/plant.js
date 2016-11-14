angular.module('plantsApp')
  .factory('Plant', Plant);

Plant.$inject = ['$resource'];
function Plant($resource) {
  return new $resource('/plants/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
