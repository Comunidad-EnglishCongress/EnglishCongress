(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('registrationFactory', registrationFactory);

	registrationFactory.$inject = ['$http', '$q'];
	function registrationFactory($http, $q) {
		var data = {
			decrementCapacity: decrementCapacity,
			registration: registration,
			validateId: validateId,
			validateEmail: validateEmail,
			validateGroup: validateGroup
		};

		return data;

		function decrementCapacity(data) {
			var defered = $q.defer();

			$http({
                url: "./Registration/registration.model.php",
                method: "POST",
                params: data
            })
            .success(function(response) {
            	defered.resolve(response);
            })
            .error(function(err) {
            	defered.reject(err);
            });

            return defered.promise;
		}

		function registration(user) {
			var defered = $q.defer();

			$http({
                url: "./Registration/registration.model.php",
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

		function validateId(data) {
			var defered = $q.defer();

			$http({
                url: "./Registration/registration.model.php",
                method: "POST",
                params: data
            })
            .success(function(response) {
                defered.resolve(response);
            })
            .error(function(err) {
            	defered.reject(err);
            });

            return defered.promise;
		}

		function validateEmail(data) {
			var defered = $q.defer();

			$http({
				url: "./Registration/registration.model.php",
				method: "POST",
				params: data
			})
			.success(function(response) {
				defered.resolve(response);
			})
			.error(function(err) {
				defered.reject(err);
			});

			return defered.promise;
		}

		function validateGroup(data) {
			var defered = $q.defer();

			$http({
                url: "./Registration/registration.model.php",
                method: "POST",
                params: data
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