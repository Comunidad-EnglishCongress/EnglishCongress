(function() {
    'use strict';

    angular
        .module('congressApp')
        .controller('registrationCtrl', registrationCtrl);

    registrationCtrl.$inject = ['$scope', '$timeout', 'registrationFactory'];
    function registrationCtrl($scope, $timeout, registrationFactory) {
        $scope.typeInputPass = 'password';
        $scope.registrationOk = false;
        $scope.registrationError = false;
        $scope.groupError = false;
        $scope.emptyData = false;

        $scope.$watch('id', validate);
        $scope.$watch('pass', validate);
        $scope.$watch('name', validate);
        $scope.$watch('group', validate);
        $scope.$watch('email', validate);
        $scope.$watch('phone', validate);
        $scope.$watch('workplace', validate);;
        $scope.$watch('depositNumber', validate);
        $scope.$watch('informed.email', validate);
        $scope.$watch('informed.facebook', validate);
        $scope.$watch('informed.webSite', validate);
        $scope.$watch('informed.colleague', validate);
        $scope.$watch('informed.other', validate);
        $scope.$watch('population.elementary', validate);
        $scope.$watch('population.highSchool', validate);
        $scope.$watch('population.higherEducation', validate);
        $scope.$watch('population.other', validate);

        $scope.declare = declare;
        $scope.registration = registration;
        $scope.validateId = validateId;
        $scope.validateEmail = validateEmail;
        $scope.validateGroup = validateGroup;
		$scope.validatePhone = validatePhone;
        $scope.showPass = showPass;

        /*
        * Declares the variables.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function declare() {			
            $scope.id = '';
            $scope.pass = '';
            $scope.name = '';
            $scope.group = '';
            $scope.email = '';
            $scope.phone = '';
            $scope.workplace = '';
            $scope.informed = {
                email: '',
                facebook: '',
                webSite: '',
                colleague: '',
                other: 'Email, Grupo de docentes en What’s App'
            };
            $scope.academic = 'Student';
            $scope.population = {
                elementary: '',
                highSchool: '',
                higherEducation: '',
                other: ''
            };
            $scope.agreePay = false;
            $scope.agreeInfo = false;
        }

        declare();

        /*
        * Validates that the variables of the register doesn't empty.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function validate() {
            if (!$scope.id.length || !$scope.pass.length || !$scope.name.length || !$scope.group.length ||
                !$scope.email.length || !$scope.phone.length || !$scope.workplace.length || !($scope.informed.email.length || 
                    $scope.informed.facebook.length || $scope.informed.webSite.length || $scope.informed.colleague.length || 
                    $scope.informed.other.length) || !($scope.population.elementary.length || 
                    $scope.population.highSchool.length || $scope.population.higherEducation.length || $scope.population.other.length)) {
                $scope.emptyData = true;
            } else { // Habilita
                $scope.emptyData = false;
            }
        }

        /*
        * Concat the selected options for the user in informed variable.
        *
        * @param Nothing.
        * @return string All the options concatenated.
        */
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

        /*
        * Concat the selected options for the user in population variable.
        *
        * @param Nothing.
        * @return string All the options concatenated.
        */
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

        /*
        * Decrements the capacity of a group.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function decrementCapacity() {
            var data = {
                action: "decrement",
                group: $scope.group
            };

            // Calls the decrement capacity method in the registration factory.
            registrationFactory.decrementCapacity(data)
            .then(function(response) {});
        }

        /*
        * Register a new user in the database.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function registration() {
            $scope.registrationOk = false;
            $scope.registrationError = false;
            $scope.groupError = false;
            var data = {
                id: $scope.id,
                pass: calcMD5($scope.pass),
                fullName: $scope.name,
                regionGroup: $scope.group,
                email: $scope.email,
                phone: $scope.phone,
                workplace: $scope.workplace,
                informed: concatInformed(),
                academic: $scope.academic,
                population: concatPopulation(),
                type: "U",
                action: "insert"
            };

            // Calls the registration method in the registration factory.
            registrationFactory.registration(data)
            .then(function(response) {
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

        /*
        * Validates an ID that doesn't exists.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function validateId() {
            $scope.errorId = false;
            var data = {
                action: "validateId",
                id: $scope.id
            };

            // Calls the validate ID method in the registration factory.
            registrationFactory.validateId(data)
            .then(function(response) {
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

        /*
        * Validates an a-mail address that doesn't exists and comply with the format.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function validateEmail() {
            $scope.errorEmail = false;
			if(!/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($scope.email)) {
				$scope.errorEmail = true;
                $scope.messageEmail = 'E-mail address has a wrong format.';
			}
			else {
				var data = {
					action: "validateEmail",
					email: $scope.email
				};

                // Calls the validate e-mail method in the registration factory.
                registrationFactory.validateEmail(data)
                .then(function(response) {
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

        /*
        * Validates that a group still have capacity and doen't empty.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function validateGroup() {
            $scope.errorGroup = false;
            
            if($scope.group !== '') {
                var data = {
                    action: "validateGroup",
                    group: $scope.group
                };

                // Calls the validate group method in the registration factory.
                registrationFactory.validateGroup(data)
                .then(function(response) {
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
        }
		
        /*
        * Validates that a phone number only have numbers.
        *
        * @param Nothing.
        * @return Nothing.
        */
		function validatePhone () {
			$scope.errorPhone = false;

			if(isNaN($scope.phone)) {
				$scope.errorPhone = true;
				$scope.messagePhone = "The phone number has a wrong format. It must be only numbers."
			}
		}

        /*
        * Shows and hides the password in the UI.
        *
        * @param Nothing.
        * @return Nothing.
        */
        function showPass() {
            if($scope.checkPass)
                $scope.typeInputPass = 'text';
            else
                $scope.typeInputPass = 'password';
        }
    }
})();