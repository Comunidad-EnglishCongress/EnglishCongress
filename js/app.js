(function() {
	'use strict';

	angular
		.module('congressApp', ['ngRoute', 'ngCookies', 'ngMaterial', 'imageupload'])
	    .factory('Auth', Auth)
	    .directive('backImg', backImg)
	    .filter('receipt', receipt)
	    .config(config)
	    .run(run);

	Auth.$inject = ['$cookies', '$location'];
	function Auth($cookies, $location) {
	    var factory = {
	        logIn: logIn,
	        logOut: logOut,
	        checkStatus: checkStatus,
	        inArray: inArray
	    };

	    return factory;

	    function logIn(user) {
            $cookies.putObject('session', user);
            
            if(user.type === "A") {
	            $location.path('/admin');
	        }
	        else {
	            $location.path('/user');
	        }
        }

        function logOut() {
            $cookies.remove('session');
			$location.path('/');
        }

        function checkStatus() {
            var rutasPrivadas = ["/","/user","/admin"];
            
            if(this.inArray($location.path(), rutasPrivadas) && typeof($cookies.get('session')) == "undefined") {
                $location.path("/");
            }
            else if(this.inArray($location.path(), rutasPrivadas) && typeof($cookies.get('session')) != "undefined") {
            	if($cookies.getObject('session').type === 'A') {
                	$location.path('/admin');
		        }
		        else {
		            $location.path('/user');
		        }
            }
        }

        function inArray(needle, haystack) {
            var key = '';
            for(key in haystack) {
                if(haystack[key] == needle) {
                    return true;
                }
            }
            return false;
        }
	}

	function backImg() {
		return function(scope, element, attrs) {
			attrs.$observe('backImg', function(value) {
				element.css({
					'background-image': "url('"+value+"')",
					'background-position': 'center',
					'background-size': 'cover'
				});
			});
		};
	}

	function receipt() {
        var filter = function(receipt) {
            if(receipt === '1')
                return 'Yes';
            else
                return 'No';
        }

        return filter;
    }

    config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'MainController',
				templateUrl: './Main/main.html'
			})
			.when('/user', {
				controller: 'UserController',
				templateUrl: './User/user.html'
			})
			.when('/admin', {
				controller: 'AdminController',
				templateUrl: './Admin/admin.html'
			})
			.otherwise('/');
	}

	run.$inject = ['$rootScope', 'Auth'];
	function run($rootScope, Auth) {
	    $rootScope.$on('$routeChangeStart', function() {
	        Auth.checkStatus();
	    });
	}
})();