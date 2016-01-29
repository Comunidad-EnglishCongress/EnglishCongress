(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('adminCtrl', function($scope, $http, $location, Session) {
			$scope.admin = Session.getInfo();
			$scope.activeNav = '';

			$scope.logOut = logOut;
			$scope.loadSessions = loadSessions;
			$scope.loadPersons = loadPersons;

			function logOut() {
				$location.path('/');
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
		})
})();