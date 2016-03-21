(function() {
    'use strict';

    angular
        .module('congressApp')
        .controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, Auth, loginFactory) {
        $scope.email = 'c@gmail.com';
        $scope.pass = '12345';
        $scope.errorLogin = false;
        $scope.error = false;

        $scope.login = login;   

        function login() {
            $scope.errorLogin = false;
            $scope.error = false;
            var data = {
                email: $scope.email,
                pass: calcMD5($scope.pass)
            };

            loginFactory.login(data)
            .then(function(response) {
                if(!response) {
                    $scope.errorLogin = true;
                }
                else if (typeof(response) == 'object') {
                    document.getElementById('closeLogIn').click();
                    Auth.logIn(response[0]);
                }
                else if (typeof(response) == 'string') {
                    $scope.error = true;
                }
            });
        }
    }
})();