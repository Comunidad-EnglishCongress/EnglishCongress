(function() {
    'use strict';

    angular
        .module('congressApp')
        .controller('userCtrl', userCtrl);

    function userCtrl($scope, $timeout, $cookies, $mdDialog, Auth, userFactory) {
        $scope.user = $cookies.getObject('session');
        $scope.user.name = $scope.user.fullName.split(' ')[0];
        $scope.activeNav = '';
        $scope.remove = false;
        $scope.add = false;
        $scope.repeatSession = false;
        $scope.crashSession = false;
        $scope.error = false;
        $scope.upload = false;
        $scope.showMySessions = false;
        $scope.uploadStyle = '';
        $scope.uploadMessage = '';
        $scope.blockSessions = userFactory.dateOfLaunch();

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
            var data = {
                idPerson: $scope.user.id,
                action: "mySessions"
            };

            userFactory.loadMySessions(data)
            .then(function(response) {
                 if(typeof(response) == 'object') {
                    if(response.length) {
                        sortList(response);
                        $scope.showMySessions = true;
                    }
                    else
                        $scope.showMySessions = false;
                }
                else {
                    errorConnection();
                }
            });
        }

        function loadAllSessions() {
            $scope.activeNav = 'allSessions';
            var data = {
                action: "allSessions"
            };

            userFactory.loadAllSessions(data)
            .then(function(response) {
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
                var data = {
                    id: id,
                    idSession: idSession,
                    action: "remove"
                };

                userFactory.removeFromMySessions(data)
                .then(function(response) {
                    if (response == true) {
                        loadMySessions();
                        
                        data = {
                            id: idSession,
                            action: "increment"
                        };

                        userFactory.increment(data)
                        .then(function(response) {
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
            }, function() {});
        }

        function addToMySessions(idSession) {
			var data = {
				idPerson:  $scope.user.id,
				idSession: idSession,
				action: "add"
			};

            userFactory.addToMySessions(data)
            .then(function(response) {
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
                    data = {
                        id: idSession,
                        action: "decrement"
                    };

                    userFactory.decrement(data)
                    .then(function(response) {
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

            userFactory.uploadReceipt(uploadUrl, formData)
            .then(function(response) {
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
            });
        }

        function goTop() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }

        function compareHours(hour1, hour2) { 
            var arrayHour1 = hour1.split(":"); 
            var arrayHour2 = hour2.split(":"); 
             
            // Get hours and minutes (hour 1) 
            var hh1 = parseInt(arrayHour1[0],10); 
            var mm1 = parseInt(arrayHour1[1],10); 

            // Get hours and minutes (hour 2) 
            var hh2 = parseInt(arrayHour2[0],10); 
            var mm2 = parseInt(arrayHour2[1],10); 

            // Compare
            if (hh1<hh2 || (hh1==hh2 && mm1<mm2)) // hour1 < hour 2
                return true; 
            else  // hour1 >= hour2
                return false;
        }

        function sortList(list) {
            $scope.sessions = {
                first: {
                    morning: [],
                    afternoon: []
                },
                second: {
                    morning: [],
                    afternoon: []
                }
            };

            angular.forEach(list, function(session, key) {
                if(session.date === '2016-03-20') {
                    if(compareHours(session.hourStart, '12:00'))
                        $scope.sessions.first.morning.push(session);
                    else
                        $scope.sessions.first.afternoon.push(session);
                }
                else {
                    if(compareHours(session.hourStart, '12:00'))
                        $scope.sessions.second.morning.push(session);
                    else
                        $scope.sessions.second.afternoon.push(session);
                }
            });
        }
    }
})();