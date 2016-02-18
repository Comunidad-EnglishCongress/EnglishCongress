(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('userCtrl', userCtrl); 

	function userCtrl($scope, $http, $timeout, $location, $cookies, Auth) {
		$scope.user = $cookies.getObject('session');
		$scope.activeNav = '';
		$scope.remove = false;
		$scope.add = false;
		$scope.repeatSession = false;
		$scope.error = false;

		$scope.logOut = logOut;
		$scope.loadMySessions = loadMySessions;
		$scope.loadAllSessions = loadAllSessions;
		$scope.removeFromMySessions = removeFromMySessions;
		$scope.addToMySessions = addToMySessions;

		function logOut() {
			Auth.logOut();
		}

		function loadMySessions() {
			$scope.activeNav = 'mySessions';
			
			$http.get('./User/user.model.php?idPerson='+$scope.user.id+'&action=mySessions')
			.success(function(response) {
                $scope.sessions = response;
            });
		}

		function loadAllSessions() {
			$scope.activeNav = 'allSessions';

			$http.get('./User/user.model.php?action=allSessions')
			.success(function(response) {
                $scope.sessions = response;
            });	
		}

		function removeFromMySessions(id, idSession) {
			$http.get('./User/user.model.php?id='+id+'&idSession='+idSession+'&action=remove')
			.success(function(response) {
				if(response) {
					loadMySessions();

					$http.get('./User/user.model.php?id='+idSession+'&action=increment')
					.success(function(response) {
						$scope.remove = true;

						$timeout(function() {
		            		$scope.remove = false;
		            	}, 5000);
	                });
				}
				else {
					$scope.error = true;

					$timeout(function() {
	            		$scope.error = false;
	            	}, 5000);
				}
            });
		}

		function addToMySessions(idSession) {
			$http.get('./User/user.model.php?idPerson='+$scope.user.id+'&idSession='+idSession+'&action=add')
			.success(function(response) {
				if(response === 'exists') {
					$scope.repeatSession = true;

                	$timeout(function() {
	            		$scope.repeatSession = false;
	            	}, 5000);
				}
				else if(response) {
					$http.get('./User/user.model.php?id='+idSession+'&action=decrement')
					.success(function(response) {
						loadAllSessions();
		            	$scope.add = true;
		            	
		            	$timeout(function() {
		            		$scope.add = false;
		            	}, 5000);
	                });
				}
				else {
					$scope.error = true;

					$timeout(function() {
	            		$scope.error = false;
	            	}, 5000);
				}
            });
		}
	}
})();