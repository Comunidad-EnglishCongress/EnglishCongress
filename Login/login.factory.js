(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('loginFactory', loginFactory);

	function loginFactory($http, $q) {
		var data = {
			login: login
		};

		return data;

		function login(user) {
			var defered = $q.defer();
			var promise = defered.promise;

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

            return promise;
		}
	}

})();