// js/services/clientes

angular.module('clientes.services',[])
	.factory('getClientes',function ($http){
		return {
			get : function(){
				return $http.get('/wincaja/clientes');
			}
		};
});