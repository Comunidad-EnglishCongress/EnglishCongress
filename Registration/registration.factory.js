(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('RegistrationFactory', RegistrationFactory);

	RegistrationFactory.$inject = ['$http', '$q'];
	function RegistrationFactory($http, $q) {
		var data = {
			decrementCapacity: decrementCapacity,
			registration: registration,
			validateId: validateId,
			validateEmail: validateEmail,
			validateGroup: validateGroup
		};

		return data;

		/*
		* Decrements the capacity of the specific group.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and the group's id.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Inserts a new user into the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and the user's information.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Validates an ID that doesn't exists in the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and ID.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Validates an e-mail address that doesn't exists in the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and e-mail address.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Validates that a group still have capacity in the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and group name.
 		* @return boolean Result of the action.
 		*/
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