(function() {
    'use strict';

    angular
        .module('congressApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'Auth', 'LoginFactory'];
    function LoginController($scope, Auth, LoginFactory) {
        $scope.email = '';
        $scope.pass = '';
        $scope.errorLogin = false;
        $scope.error = false;
        $scope.login = login;   

        /* 
        * Verifies the login.
        * @param Nothing.
        * @return Nothing.
        */
        function login() {
            $scope.errorLogin = false;
            $scope.error = false;
            var data = {
                email: $scope.email.replace("''", "").replace("'",""),
                pass: calcMD5($scope.pass)
            };

            // Call the login method in the factory that returns the person that try to enter in the system.
            LoginFactory.login(data)
            .then(function(response) {
                if(!response) {
                    $scope.errorLogin = true;
                }
                else if (typeof(response) == 'object') {
                    document.getElementById('closeLogIn').click();
                    // Store in the coockies the information of the user.
                    Auth.logIn(response[0]);
                }
                else if (typeof(response) == 'string') {
                    $scope.error = true;
                }
            });
        }
    }
})();