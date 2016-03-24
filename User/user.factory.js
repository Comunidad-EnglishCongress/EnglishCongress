(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('userFactory', userFactory);

	userFactory.$inject = ['$http', '$q'];
	function userFactory($http, $q) {
		var data = {
			loadMySessions: loadMySessions,
			loadAllSessions: loadAllSessions,
			removeFromMySessions: removeFromMySessions,
			addToMySessions: addToMySessions,
			uploadReceipt: uploadReceipt,
			dateOfLaunch: dateOfLaunch,
			decrement: decrement,
			increment: increment
		};

		return data;

		function loadMySessions(data) {
			var defered = $q.defer();

			$http({
                url: "./User/user.model.php",
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

		function loadAllSessions(data) {
			var defered = $q.defer();

			$http({
                url: "./User/user.model.php",
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

		function removeFromMySessions(data) {
			var defered = $q.defer();

			$http({
                url: "./User/user.model.php",
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

		function addToMySessions(data) {
			var defered = $q.defer();

			$http({
				url: "./User/user.model.php",
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

		function uploadReceipt(uploadUrl, formData) {
			var defered = $q.defer();

			$http.post(uploadUrl, formData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
                defered.resolve(response);
            })
            .error(function(err){
                defered.reject(err);
            });

			return defered.promise;
		}

		function dateOfLaunch() {
			var actualDate = new Date('01 Jun 2016');
            var congressDate = new Date('01 Jun 2016');
            
            return actualDate < congressDate;
		}

		function decrement(data) {
			var defered = $q.defer();

			$http({
				url: "./User/user.model.php",
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

		function increment(data) {
			var defered = $q.defer();

			$http({
                url: "./User/user.model.php",
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