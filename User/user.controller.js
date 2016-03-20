(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', userCtrl);

    function userCtrl($scope, $http, $timeout, $location, $cookies, $mdDialog, $mdMedia, Auth, dateOfLaunch) {
        $scope.user = $cookies.getObject('session');
        $scope.user.name = $scope.user.fullName.split(' ')[0];
        $scope.activeNav = '';
        $scope.remove = false;
        $scope.add = false;
        $scope.repeatSession = false;
        $scope.crashSession = false;
        $scope.error = false;
        $scope.upload = false;
        $scope.uploadStyle = '';
        $scope.uploadMessage = '';
        $scope.blockSessions = dateOfLaunch.validate();

        $scope.logOut = logOut;
        $scope.loadMySessions = loadMySessions;
        $scope.loadAllSessions = loadAllSessions;
        $scope.removeFromMySessions = removeFromMySessions;
        $scope.addToMySessions = addToMySessions;
        $scope.changeReceipt = changeReceipt;
        $scope.uploadReceipt = uploadReceipt;
        $scope.goTop = goTop;

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

                if(typeof(response) == 'object') {
                    $scope.sessions = response;
                }
                else {
                    errorConnection();
                }
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
                if(typeof(response) == 'object') {
                    $scope.sessions = response;
                }
                else {
                    errorConnection();
                }
            });
        }

        function removeFromMySessions(ev, id, idSession) {
            var confirm = $mdDialog.confirm()
            .title('Would you like to delete this session?')
            .textContent('If you delete this session, you might not be able to register it again.')
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
                    if (response == true) {
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
                    } 
                    else {
                        errorConnection();
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
                else if (response == true) {
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

        loadMySessions();

        function changeReceipt() {
            $scope.activeNav = 'addReceipt';
        }

        function uploadReceipt(file) {
            $scope.upload = false;

            var uploadUrl = 'User/upload.php?id='+$scope.user.id;
            var formData = new FormData();
            formData.append('file', file.file);

            $http.post(uploadUrl, formData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
                $scope.upload = true;

                if(response === 'success') {
                    $scope.uploadStyle = 'alert-success';
                    $scope.uploadMessage = 'The image was uploaded successfully.';
                }
                else {
                    $scope.uploadStyle = 'alert-danger';
                    $scope.uploadMessage = 'An error occurred when the image is uploaded.';
                }

                $timeout(function() {
                    $scope.upload = false;
                }, 5000);
            })
            .error(function(err){
                $scope.upload = true;
                $scope.uploadStyle = 'alert-danger';
                $scope.uploadMessage = 'An error occurred when the image is uploaded. Please try again.';

                $timeout(function() {
                    $scope.upload = false;
                }, 5000);
            });
        }

        function goTop() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    }
})();