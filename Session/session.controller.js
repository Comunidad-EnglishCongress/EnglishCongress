(function() {
    'use strict';
    
    angular
        .module('congressApp')
        .controller('SessionController', SessionController);
    
    function SessionController($scope, $filter, SessionFactory) {
        $scope.store = store;
        $('.clockpicker').clockpicker()
            .find('#start').change(function(){
                $scope.hourStart = this.value;
            });
        $('.clockpicker').clockpicker()
            .find('#finish').change(function(){
                $scope.hourFinish = this.value;
            });
        
        function setData() {
            $scope.name = '';
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
                location: $scope.location,
                hourStart: $scope.hourStart,
                hourFinish: $scope.hourFinish,
                capacity: $scope.capacity,
                date: $filter('date')($scope.date, 'yyyy-MM-dd'),
                action: 'store'  
            };
            
            SessionFactory.store(data)
            .then(function(response) {
                if (response === '1') {
                    $scope.styleSession = 'alert alert-success'
                    $scope.msgSession = 'The session was registered successfully.'
                    setData();
                }
                else {
                    $scope.styleSession = 'alert alert-error'
                    $scope.msgSession = "An error has occurred during the session's register.";
                }
            });
        }
        
        setData();
    }
})();