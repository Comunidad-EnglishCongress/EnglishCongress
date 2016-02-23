(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, $http, $location, Auth) {
        $scope.email = 'fauri.1994@gmail.com';
        $scope.pass = '12345';
        $scope.emptyData = false;
        $scope.errorLogin = false;
        $scope.error = false;

        $scope.login = login;
        $scope.enterLogin = enterLogin;

        $scope.$watch('email', function() {
            validate();
        });
        $scope.$watch('pass', function() {
            validate();
        });

        function validate() {
            if (!$scope.email.length || !$scope.pass.length) {
                $scope.emptyData = true;
            } else {
                $scope.emptyData = false;
            }
        }        

        function login() {

            $scope.errorLogin = false;
            $scope.error = false;

            var indata = {
                email: $scope.email,
                pass: calcMD5($scope.pass)
            }
            $http({
                url: "./Login/login.model.php",
                method: "POST",
                params: indata
            }).success(function(response) {
                if (response.length > 0) {
                    document.getElementById('closeLogIn').click();
                    Auth.logIn(response[0]);
                } else if (!response) {
                    $scope.error = true;
                } else {
                    $scope.errorLogin = true;
                }
            });

        }

        function enterLogin(e) {
            if (e.keyCode === 13)
                login();
        }
    }
})();