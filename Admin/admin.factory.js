(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('adminFactory', adminFactory);

	function adminFactory($http, $q) {
		var data = {
			loadSessions: loadSessions,
			loadPersons: loadPersons
		};

		return data;

		function loadSessions(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function loadPersons(data) {
			var defered = $q.defer();
			var promise = defered.promise;
			
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

            return promise;
		}
	}

})();