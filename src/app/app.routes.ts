import angular from 'angular';

function routes($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', {
      template: '<project-list></project-list>'
    })
    .when('/project/:id', {
      template: '<project-detail></project-detail>'
    })
    .otherwise({ redirectTo: '/' });
}

routes.$inject = ['$routeProvider'];

angular.module('app').config(routes);
