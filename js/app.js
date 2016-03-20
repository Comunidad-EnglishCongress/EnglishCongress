(function() {
	'use strict';

	angular
		.module('myApp', ['ngRoute', 'ngCookies', 'ngMaterial', 'imageupload'])
	    .factory('Auth', Auth)
	    .factory('dateOfLaunch', dateOfLaunch)
	    .directive('backImg', backImg)
	    .filter('receipt', receipt)
	    .config(config)
	    .run(run);

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

	function dateOfLaunch() {
		var factory = {
			validate: validate
		};

		return factory;

		function validate() {
			var actualDate = new Date('01 Jun 2016');
            var congressDate = new Date('01 Jun 2016');
            
            return actualDate < congressDate;
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

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'mainCtrl',
				templateUrl: './Main/main.html'
			})
			.when('/user', {
				controller: 'userCtrl',
				templateUrl: './User/user.html'
			})
			.when('/admin', {
				controller: 'adminCtrl',
				templateUrl: './Admin/admin.html'
			})
			.otherwise('/');
	}

	function run($rootScope, Auth) {
	    $rootScope.$on('$routeChangeStart', function() {
	        Auth.checkStatus();
	    });
	}
})();