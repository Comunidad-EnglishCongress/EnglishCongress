(function() {
	'use strict';

	angular
		.module('congressApp')
		.controller('adminCtrl', adminCtrl); 

	adminCtrl.$inject = ['$scope', '$timeout', '$cookies', 'Auth', 'adminFactory'];
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

		/*
		* Load all sessions from the database.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
		function loadSessions() {
			$scope.activeNav = 'sessions';
			var data = {
				action: "sessions"
			};

			// Call the load sessions method in the factory that returns the sessions.
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

		/* 
		* Load all the persons from the database.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
		function loadPersons() {
			$scope.activeNav = 'persons';
			var data = {
				action: "persons"				
			};

			// Call the load persons method in the factory that returns the persons.
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

		/* 
		* Show the message error box with a timeout.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
		function errorConnection() {
            $scope.error = true;

            $timeout(function() {
                $scope.error = false;
            }, 5000);
        }

        /* 
		* Moves the scrool to the bottom.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
		function goTop() {
			$('html, body').animate({
	            scrollTop: 0
	        }, 500);
		}

		loadPersons();
	}
})();