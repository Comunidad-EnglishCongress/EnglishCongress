(function() {
    'use strict';
    
    angular
        .module('congressApp')
        .controller('SessionController', SessionController);
    
    function SessionController($scope, $timeout, $filter, SessionFactory) {
        $scope.store = store;
        // Catch the value of the clockpickers.
        $('.clockpicker').clockpicker()
            .find('#start').change(function(){
                $scope.hourStart = this.value;
            });
        $('.clockpicker').clockpicker()
            .find('#finish').change(function(){
                $scope.hourFinish = this.value;
            });
        
        /*
		* Set empty the variables.
 		*/
        function setData() {
            $scope.name = '';
            $scope.speaker = '';
            $scope.location = '';
            $scope.hourStart = '';
            $scope.hourFinish = '';
            $scope.capacity = 1;
            $scope.date = '';
        }
        
        /*
		* Call the store method in the factory.
 		*/
        function store() {
            var data = {
                name: $scope.name,
                speaker: $scope.speaker,
                location: $scope.location,
                hourStart: $scope.hourStart,
                hourFinish: $scope.hourFinish,
                capacity: $scope.capacity,
                date: $filter('date')($scope.date, 'yyyy-MM-dd'),
                action: 'store'  
            };
            
            if (data.name != "" && data.speaker != "" && data.location != "" && data.hourStart != "" && data.hourFinish != "" && data.capacity != "" && data.date != "") {            
                SessionFactory.store(data)
                .then(function(response) {
                    if (response === '1') {
                        $scope.styleSession = 'alert alert-success';
                        $scope.msgSession = 'The session was registered successfully.'
                        setData();
                    }
                    else {
                        $scope.styleSession = 'alert alert-danger';
                        $scope.msgSession = "An error has occurred during the session's register.";
                    }
                });
            }
            else {
                $scope.styleSession = 'alert alert-danger';
                $scope.msgSession = "There can't be empty spaces.";
            }
            
            $timeout(function() {
                $scope.msgSession = '';
            }, 7000);
        }
        
        setData();
    }
})();