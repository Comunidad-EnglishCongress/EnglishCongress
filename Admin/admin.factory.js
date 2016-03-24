(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('adminFactory', adminFactory);

	adminFactory.$inject = ['$http', '$q'];
	function adminFactory($http, $q) {
		var data = {
			loadSessions: loadSessions,
			loadPersons: loadPersons
		};

		return data;

		/*
		* Gets all sessions from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model.
 		* @return Array with the sessions.
 		*/
		function loadSessions(data) {
			var defered = $q.defer();

			$http({
				url: "./Admin/admin.model.php",
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
		* Gets all the persons from the database.
 		* @param
 		* 	data: Object with information about the action to realize in the model.
 		* @return Array with the persons.
 		*/
		function loadPersons(data) {
			var defered = $q.defer();
			
			$http({
				url: "./Admin/admin.model.php",
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