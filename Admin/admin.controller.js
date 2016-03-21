(function() {
	'use strict';

	angular
		.module('congressApp')
		.controller('adminCtrl', adminCtrl); 

	function adminCtrl($scope, $timeout, $cookies, Auth, adminFactory) {
		$scope.admin = $cookies.getObject('session');
		$scope.admin.name = $scope.admin.fullName.split(' ')[0];
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
			var data = {
				action: "sessions"
			};

			adminFactory.loadSessions(data)
			.then(function(response) {
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
			var data = {
				action: "persons"				
			};

			adminFactory.loadPersons(data)
			.then(function(response) {
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

		function goTop() {
			$('html, body').animate({
	            scrollTop: 0
	        }, 500);
		}

		loadPersons();
	}
})();