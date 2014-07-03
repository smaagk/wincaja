//js/controllers/getClientes.js

angular.module('clientesController',['clientes.services'])
	.controller('getClientesCtrl',function ($scope,getClientes){
		
		getClientes.get()
			.success(function(data){
				$scope.clientes = data;
			});
	});