(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('registrationCtrl', registrationCtrl);

    function registrationCtrl($scope, $http, $timeout) {
        $scope.registrationOk = false;
        $scope.registrationError = false;
        $scope.groupError = false;
        $scope.emptyData = false;
        $scope.declare = declare;

        $scope.$watch('id', validate);
        $scope.$watch('pass', validate);
        $scope.$watch('name', validate);
        $scope.$watch('email', validate);
        $scope.$watch('phone', validate);
        $scope.$watch('nationality', validate);;
        $scope.$watch('depositNumber', validate);
        $scope.$watch('direccion.norte', validate);
        $scope.$watch('direccion.sanCarlos', validate);
        $scope.$watch('direccion.sarapiqui', validate);
        $scope.$watch('direccion.occidente', validate);
        $scope.$watch('direccion.other', validate);
        $scope.$watch('informed.email', validate);
        $scope.$watch('informed.facebook', validate);
        $scope.$watch('informed.webSite', validate);
        $scope.$watch('informed.colleague', validate);
        $scope.$watch('informed.other', validate);
        $scope.$watch('academic.student', validate);
        $scope.$watch('academic.associate', validate);
        $scope.$watch('academic.bachelor', validate);
        $scope.$watch('academic.licentiate', validate);
        $scope.$watch('academic.master', validate);
        $scope.$watch('academic.doctorate', validate);
        $scope.$watch('academic.other', validate);
        $scope.$watch('population.elementary', validate);
        $scope.$watch('population.highSchool', validate);
        $scope.$watch('population.higherEducation', validate);
        $scope.$watch('population.other', validate);

        $scope.registration = registration;
        $scope.validateId = validateId;
        $scope.validateEmail = validateEmail;
        $scope.validateGroup = validateGroup;
		$scope.validatePhone = validatePhone;

        function declare() {			
            $scope.id = '';
            $scope.pass = '';
            $scope.name = '';
            $scope.group = '';
            $scope.email = 'fauri.1994@gmail.com';
            $scope.phone = '';
            $scope.nationality = '';
            $scope.direccion = {
                norte: '',
                sanCarlos: '',
                sarapiqui: '',
                occidente: '',
                other: ''
            };
            $scope.informed = {
                email: '',
                facebook: '',
                webSite: '',
                colleague: '',
                other: ''
            };
            $scope.academic = {
                student: '',
                associate: '',
                bachelor: '',
                licentiate: '',
                master: '',
                doctorate: '',
                other: ''
            };
            $scope.population = {
                elementary: '',
                highSchool: '',
                higherEducation: '',
                other: ''
            };
            $scope.confirmation = false;
        }

        declare();

        function validate() {
            if (!$scope.id.length || !$scope.pass.length || !$scope.name.length || !$scope.email.length ||
                !$scope.phone.length || !$scope.nationality.length || 
                !($scope.direccion.norte.length || $scope.direccion.sanCarlos.length || $scope.direccion.sarapiqui.length || 
                    $scope.direccion.occidente.length || $scope.direccion.other.length) || !($scope.informed.email.length || 
                    $scope.informed.facebook.length || $scope.informed.webSite.length || $scope.informed.colleague.length || 
                    $scope.informed.other.length) || !($scope.academic.student.length || $scope.academic.associate.length || 
                    $scope.academic.bachelor.length || $scope.academic.licentiate.length || $scope.academic.master.length || 
                    $scope.academic.doctorate.length || $scope.academic.other.length) || !($scope.population.elementary.length || 
                    $scope.population.highSchool.length || $scope.population.higherEducation.length || $scope.population.other.length)) {
                $scope.emptyData = true;
            } else { // Habilita
                $scope.emptyData = false;
            }
        }

        function concatDireccion() {
            var string = '';
            var array = [$scope.direccion.norte, $scope.direccion.sanCarlos, $scope.direccion.sarapiqui,
                $scope.direccion.occidente, $scope.direccion.other
            ];

            array.forEach(function(value) {
                if (value !== '')
                    string += value + ', ';
            });

            return string.slice(0, string.length - 2);
        }

        function concatInformed() {
            var string = '';
            var array = [$scope.informed.email, $scope.informed.facebook, $scope.informed.webSite,
                $scope.informed.colleague, $scope.informed.other
            ];

            array.forEach(function(value) {
                if (value !== '')
                    string += value + ', ';
            });

            return string.slice(0, string.length - 2);
        }

        function concatAcademic() {
            var string = '';
            var array = [$scope.academic.student, $scope.academic.associate, $scope.academic.bachelor,
                $scope.academic.licentiate, $scope.academic.master, $scope.academic.doctorate,
                $scope.academic.other
            ];

            array.forEach(function(value) {
                if (value !== '')
                    string += value + ', ';
            });

            return string.slice(0, string.length - 2);
        }

        function concatPopulation() {
            var string = '';
            var array = [$scope.population.elementary, $scope.population.highSchool,
                $scope.population.higherEducation, $scope.population.other
            ];

            array.forEach(function(value) {
                if (value !== '')
                    string += value + ', ';
            });

            return string.slice(0, string.length - 2);
        }

        function decrementCapacity() {
            var indata = {
                action: "decrement",
                group: $scope.group
            };

            $http({
                    url: "./Registration/registration.model.php",
                    method: "POST",
                    params: indata
                })
            .success(function(response) {});
        }

        function registration() {
            $scope.registrationOk = false;
            $scope.registrationError = false;
            $scope.groupError = false;
            var indata = {
                id: $scope.id,
                pass: calcMD5($scope.pass),
                fullName: $scope.name,
                regionGroup: $scope.group,
                email: $scope.email,
                phone: $scope.phone,
                nationality: $scope.nationality,
                direccion: concatDireccion(),
                informed: concatInformed(),
                academic: concatAcademic(),
                population: concatPopulation(),
                type: "U",
                action: "insert"
            };

            $http({
                url: "./Registration/registration.model.php",
                method: "POST",
                params: indata
            })
            .success(function(response) {
                if (response == true) {
                    decrementCapacity();
                    $scope.registrationOk = true;
                    declare();

                    $timeout(function() {
                        $scope.registrationOk = false;
                    }, 5000);
                }
                else if(typeof(response) == 'string') {
                    $scope.registrationError = true;
                }
            });
        }

        function validateId() {
            $scope.errorId = false;
            var indata = {
                action: "validateId",
                id: $scope.id
            };

            $http({
                    url: "./Registration/registration.model.php",
                    method: "POST",
                    params: indata
                })
            .success(function(response) {
                if(typeof(response) == 'string') {
                    $scope.errorId = true;
                    $scope.messageId = 'An unexpected error occurred while identification is validated. Please try again.';
                }
                else if (response[0]) {
                    $scope.errorId = true;
                    $scope.messageId = 'The identification is already registered.';
                }
            });
        }

        function validateEmail() {
            $scope.errorEmail = false;
			if( !/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($scope.email)){
				$scope.errorEmail = true;
                $scope.messageEmail = 'E-mail address has a wrong format.';
			}
			else{
				var indata = {
					action: "validateEmail",
					email: $scope.email
				};

				$http({
						url: "./Registration/registration.model.php",
						method: "POST",
						params: indata
					})
				.success(function(response) {
					if(typeof(response) == 'string') {
						$scope.errorEmail = true;
						$scope.messageEmail = 'An unexpected error occurred while e-mail address is validated. Please try again.';
					}
					else if (response[0]) {
						$scope.errorEmail = true;
						$scope.messageEmail = 'E-mail address is already registered.';
					}
				});
			}
        }

        function validateGroup() {
            $scope.errorGroup = false;
            var indata = {
                action: "validateGroup",
                group: $scope.group
            };

            $http({
                    url: "./Registration/registration.model.php",
                    method: "POST",
                    params: indata
                })
            .success(function(response) {
                if (typeof(response) == 'string') {
                    $scope.errorGroup = true;
                    $scope.messageGroup = 'An unexpected error occurred while group is validated. Please try again.';
                }
                else if (parseInt(response[0]) <= 0) {
                    $scope.errorGroup = true;
                    $scope.messageGroup = 'The selected group does not have capacity.';
                }
            });
        }
		
		function validatePhone () {
			$scope.errorPhone = false;

			if(isNaN($scope.phone)) {
				$scope.errorPhone = true;
				$scope.messagePhone = "The phone number has a wrong format. It must be only numbers."
			}
		};
    }
})();