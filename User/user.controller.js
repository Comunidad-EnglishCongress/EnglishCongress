(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', userCtrl);

    function userCtrl($scope, $http, $timeout, $location, $cookies, $mdDialog, $mdMedia, Auth) {
        $scope.user = $cookies.getObject('session');
        $scope.activeNav = '';
        $scope.remove = false;
        $scope.add = false;
        $scope.repeatSession = false;
        $scope.crashSession = false;
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
            var indata = {
                idPerson: $scope.user.id,
                action: "mySessions"
            };

            $http({
                url: "./User/user.model.php",
                method: "POST",
                params: indata
            })
            .success(function(response) {
                $scope.sessions = response;
            });
        }

        function loadAllSessions() {
            $scope.activeNav = 'allSessions';
            var indata = {
                action: "allSessions"
            };	

            $http({
                url: "./User/user.model.php",
                method: "POST",
                params: indata
            })
            .success(function(response) {
                $scope.sessions = response;
            });
        }

        function removeFromMySessions(ev, id, idSession) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
            .title('Would you like to delete this session?')
            .textContent('If you delete this session, maybe you can\'t add again to your sessions.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('No');
            
            $mdDialog.show(confirm).then(function() {
                var indata = {
                    id: id,
                    idSession: idSession,
                    action: "remove"
                };

                $http({
                    url: "./User/user.model.php",
                    method: "POST",
                    params: indata
                })            
                .success(function(response) {
                    if (response) {
                        loadMySessions();
                        
                        indata = {
                            id: idSession,
                            action: "increment"
                        };

                        $http({
                            url: "./User/user.model.php",
                            method: "POST",
                            params: indata
                        })                                                  
                        .success(function(response) {
                            $scope.remove = true;

                            $timeout(function() {
                                $scope.remove = false;
                            }, 5000);
                        });
                    } else {
                        $scope.error = true;

                        $timeout(function() {
                            $scope.error = false;
                        }, 5000);
                    }
                });
            }, function() {
                
            });
        }

        function addToMySessions(idSession) {
			var indata = {
				idPerson:  $scope.user.id,
				idSession: idSession,
				action: "add"
			};

			$http({
				url: "./User/user.model.php",
				method: "POST",
				params: indata
			})            
            .success(function(response) {
                if (response === 'exists') {
                    $scope.repeatSession = true;

                    $timeout(function() {
                        $scope.repeatSession = false;
                    }, 5000);
                } 
                else if (response === 'crash') {
                    $scope.crashSession = true;

                    $timeout(function() {
                        $scope.crashSession = false;
                    }, 5000);
                } 
                else if (response) {
					indata = {
						id: idSession,
						action: "decrement"
					}

					$http({
						url: "./User/user.model.php",
						method: "POST",
						params: indata
					})                        
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

        loadMySessions();
    }
})();