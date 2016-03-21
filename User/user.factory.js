(function() {
	'use strict';

	angular
		.module('congressApp')
		.factory('userFactory', userFactory);

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
			var promise = defered.promise;

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

			return promise;
		}

		function loadAllSessions(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function removeFromMySessions(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function addToMySessions(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function uploadReceipt(uploadUrl, formData) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function dateOfLaunch() {
			var actualDate = new Date('01 Jun 2016');
            var congressDate = new Date('01 Jun 2016');
            
            return actualDate < congressDate;
		}

		function decrement(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}

		function increment(data) {
			var defered = $q.defer();
			var promise = defered.promise;

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

			return promise;
		}
	}

})();