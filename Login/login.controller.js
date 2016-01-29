(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('loginCtrl', function($scope, $http, $location, Session) {
			$scope.email = 'cs.salas94@gmail.com';
			$scope.pass = '12345';
			$scope.emptyData = false;
			$scope.errorLogin = false;
			$scope.error = false;

			$scope.login = login;

			$scope.$watch('email', function() {
				validate();
			});
			$scope.$watch('pass', function() {
				validate();
			});

	        function validate() {
	            if(!$scope.email.length || !$scope.pass.length) {
	               $scope.emptyData = true;
	            }
	            else {
	               $scope.emptyData = false;
	            }
	        }

			function login() {
				$scope.errorLogin = false;
				$scope.error = false;

				$http.get('./Login/login.model.php?email='+$scope.email+'&pass='+$scope.pass)
				.success(function(response) {
					console.log(response);
                    if(response.length > 0) {
                    	document.getElementById('closeLogIn').click();
                    	Session.setInfo(response[0]);
                    	
                    	if(response[0].type === "A") {
				            $location.path('/admin');
				        }
				        else {
				            $location.path('/user');
				        }
	                }
	                else if(!response) {
	                	$scope.error = true;
	                }
	                else {
	                	$scope.errorLogin = true;
	                }
                });
			}
		})
})();