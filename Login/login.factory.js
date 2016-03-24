(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('loginFactory', loginFactory);

	loginFactory.$inject = ['$http', '$q'];
	function loginFactory($http, $q) {
		var data = {
			login: login
		};

		return data;

		/*
		* Gets the user that try to enter in the system from the database.
		*
 		* @param
 		* 	user: Object with information about the action to realize in the model, email and password.
 		* @return Array with the user.
 		*/
		function login(user) {
			var defered = $q.defer();

			$http({
                url: "./Login/login.model.php",
                method: "POST",
                params: user
            })
            .success(function(response) {
                defered.resolve(response);
            })
            .error(function(err) {
            	defered.reject(err);
            });

            return defered.promise;
		}
	}

})();