(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('loginCtrl', loginCtrl);

	function loginCtrl($scope, $http, $location, Auth) {
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
                if(response.length > 0) {
                	document.getElementById('closeLogIn').click();
                	Auth.logIn(response[0]);
                }
                else if(!response) {
                	$scope.error = true;
                }
                else {
                	$scope.errorLogin = true;
                }
            });
		}
	}
})();