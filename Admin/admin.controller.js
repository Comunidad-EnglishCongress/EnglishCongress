(function() {
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
			var indata = {
				action: "sessions"
			};
			$http({
				url: "./Admin/admin.model.php",
				method: "POST",
				params: indata
			})			
				.success(function(response) {
					$scope.sessions = response;
				});
		}

		function loadPersons() {
			$scope.activeNav = 'persons';
			var indata = {
				action: "persons"				
			};
			$http({
				url: "./Admin/admin.model.php",
				method: "POST",
				params: indata
			})			
			.success(function(response) {
                $scope.persons = response;
            });	
		}
	}
})();