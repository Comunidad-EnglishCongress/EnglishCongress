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

		/*
		* Gets the sessions of a user from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and the user's id.
 		* @return Array with the sessions.
 		*/
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

		/*
		* Gets all sessions from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model.
 		* @return Array with the sessions.
 		*/
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

		/*
		* Removes a session of the sessions of user from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model, user's id and session's id.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Adds a session into the sessions of user from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model, user's id and session's id.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Upload a picture into a specific folder of the project.
		*
 		* @param
 		* 	uploadUrl: Url of the php file that uploads the picture with the user's id.
 		*   formData: The picture.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Checks if the actual date is the official date of launch the sessions.
		*
 		* @param Nothing.
 		* @return 
 		*   boolean true Current date is not yet official. Result of the action.
 		*   boolean false Current date is the official.
 		*/
		function dateOfLaunch() {
			var currentDate = new Date();
            var launchDate = new Date('01 Jun 2016');
            
            return currentDate < launchDate;
		}

		/*
		* Decrements the capacity of a specific session from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and session's id.
 		* @return boolean Result of the action.
 		*/
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

		/*
		* Increments the capacity of a specific session from the database.
		*
 		* @param
 		* 	data: Object with information about the action to realize in the model and session's id.
 		* @return boolean Result of the action.
 		*/
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