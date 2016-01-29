(function(){
	'use strict';

	angular
		.module('myApp', ['ngRoute'])
		.directive('scrollup', function ($document) {
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
		})
		.factory('Session', function () {
	        var factory = {
	        	info: {},
	        	getInfo: getInfo,
	        	setInfo: setInfo
	        };
	        return factory;

	        function getInfo() {
	        	return factory.info;
	        }

	        function setInfo(info) {
	        	factory.info = info;
	        }
	    })
		.config(config);

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
})();