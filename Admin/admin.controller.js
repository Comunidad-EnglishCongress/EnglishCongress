(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('adminCtrl', adminCtrl); 

	function adminCtrl($scope, $http, $location, $cookies, Auth) {
		$scope.admin = $cookies.getObject('session');
		$scope.activeNav = '';

		$scope.logOut = logOut;
		$scope.loadSessions = loadSessions;
		$scope.loadPersons = loadPersons;

		function logOut() {
			Auth.logOut();
		}

		function loadSessions() {
			$scope.activeNav = 'sessions';

			$http.get('./Admin/admin.model.php?action=sessions')
			.success(function(response) {
                $scope.sessions = response;
            });
		}

		function loadPersons() {
			$scope.activeNav = 'persons';

			$http.get('./Admin/admin.model.php?action=persons')
			.success(function(response) {
                $scope.persons = response;
            });	
		}
	}
})();