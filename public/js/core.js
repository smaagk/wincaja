var app = /**
* app Module
*
* Description
*/
angular.module('app', ['ngRoute','clientesController','clientes.services']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/listaclientes',{
				templateUrl:'./views/clientes.html',
				controller:'getClientesCtrl'
			}).
			when('/route2',{
				template : '<h1>hola2</h1>'
			}).
			otherwise({
				redirectTo: '/'
			});
}]);

