(function() {
    'use strict';
    
    angular
        .module('congressApp')
        .factory('SessionFactory', SessionFactory);
    
    function SessionFactory($http, $q) {
        var factory = {
            store: store
        };
        
        return factory;
        
        /*
		* Store a new session in the database.
		*
 		* @param
 		* 	session: Object with information of the session.
 		* @return Result of added session.
 		*/
        function store(session) {
            var defered = $q.defer();
            
            $http({
                method: 'POST',
                url: './Session/session.model.php',
                params: session
            })
            .success(function(response) {
                defered.resolve(response);
            })
            .error(function(err) {
                defered.reject(err);
            })
            
            return defered.promise;
        }
    }
})();