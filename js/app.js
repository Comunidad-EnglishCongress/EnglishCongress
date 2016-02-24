(function() {
	'use strict';

	angular
		.module('myApp', ['ngRoute', 'ngCookies', 'ngMaterial'])
		.directive('scrollup', scrollup)
	    .factory('Auth', Auth)
	    .config(config)
	    .run(run);

	function scrollup($document) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.bind("click", function () {
                    function scrollToTop(element, to, duration) {
                        if (duration < 0) 
                        	return;

                        var difference = to - element.scrollTop;
                        var perTick = difference / duration * 10;

                        setTimeout(function () {
                            element.scrollTop = element.scrollTop + perTick;
                            scrollToTop(element, to, duration - 10);
                        }, 5);
                    }

                    scrollToTop($document[0].body, 0, 400);
                });
            }
        };
	}

	function Auth($cookies, $location) {
	    return {
	        logIn: logIn,
	        logOut: logOut,
	        checkStatus: checkStatus,
	        inArray: inArray
	    }

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