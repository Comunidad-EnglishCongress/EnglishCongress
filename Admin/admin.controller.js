(function() {
	'use strict';

	angular
		.module('myApp')
		.controller('adminCtrl', adminCtrl); 

	function adminCtrl($scope, $http, $timeout, $location, $cookies, Auth) {
		$scope.admin = $cookies.getObject('session');
		$scope.activeNav = '';
		$scope.error = false;

		$scope.logOut = logOut;
		$scope.loadSessions = loadSessions;
		$scope.loadPersons = loadPersons;
		$scope.goTop = goTop;

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
				if(typeof(response) == 'object') {
					$scope.sessions = response;
				}
				else {
					errorConnection();
				}
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
				if(typeof(response) == 'object') {
                	$scope.persons = response;
				}
				else {
					errorConnection();
				}
            });	
		}

		function errorConnection() {
            $scope.error = true;

            $timeout(function() {
                $scope.error = false;
            }, 5000);
        }

		loadPersons();

		function goTop() {
			$('html, body').animate({
	            scrollTop: 0
	        }, 500);
		}
	}
})();