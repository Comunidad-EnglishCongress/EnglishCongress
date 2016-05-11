(function() {
	'use strict';

	angular
		.module('congressApp')
		.controller('AdminController', AdminController); 

	AdminController.$inject = ['$scope', '$timeout', '$cookies', '$mdDialog', 'Auth', 'AdminFactory'];
	function AdminController($scope, $timeout, $cookies, $mdDialog, Auth, AdminFactory) {
		$scope.admin = $cookies.getObject('session');
		$scope.admin.name = $scope.admin.fullName.split(' ')[0];
		$scope.activeNav = '';
		$scope.error = false;

		$scope.logOut = logOut;
		$scope.loadSessions = loadSessions;
		$scope.loadPersons = loadPersons;
		$scope.removePerson = removePerson;
		$scope.changeReceiptState = changeReceiptState;
		$scope.addSesion = addSesion;
		$scope.goTop = goTop;

		/*
		* Calls the log out method in the Auth factory.
		*
 		* @param Nothing.
 		* @return Nothing.
 		*/
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
			$scope.sessions = [];
			$scope.activeNav = 'sessions';
			var data = {
				action: 'sessions'
			};

			// Calls the load sessions method in the admin factory that returns the sessions.
			AdminFactory.loadSessions(data)
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
			$scope.persons = [];
			$scope.activeNav = 'persons';
			var data = {
				action: 'persons'		
			};

			// Calls the load persons method in the admin factory that returns the persons.
			AdminFactory.loadPersons(data)
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
		* Removes a person from the database.
		*
 		* @param
 		*   ev: The event.
 		*   id: User's id.
 		* @return Nothing.
 		*/
		function removePerson(ev, id, group) {
			var confirm = $mdDialog.confirm()
            .title('Would you like to delete this person?')
            .textContent("If you remove the person, she/he can't enter the system.")
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('No');
            
            $mdDialog.show(confirm)
            .then(function() {
                var data = {
					action: 'remove',
					id: id
				};

				// Calls the remove person method in the admin factory.
				AdminFactory.removePerson(data)
				.then(function(response) {
					if(response === '1') {
						data = {
							action: 'increment',
							group: group
						};

						// Calls the increment capacity method in the admin factory.
						AdminFactory.incrementCapacity(data)
						.then(function(response) {
							loadPersons();
						});
					}
					else {
						errorConnection();
					}
				});
            }, function() {});
		}

		/* 
		* Changes the receipt state of a person from the database.
		*
 		* @param
 		*   id: User's id.
 		*   receiptState: Receipt's state.
 		* @return Nothing.
 		*/
		function changeReceiptState(id, receiptState) {
			var data = {
				action: 'changeReceiptState',
				id: id,
				receipt: 1 - receiptState
			}
			
			AdminFactory.changeReceiptState(data)
			.then(function(response) {
				if(response === '1') {
					loadPersons();
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
		
		function addSesion() {
			$scope.activeNav = 'addSesion';
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