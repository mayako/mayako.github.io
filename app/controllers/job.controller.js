(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('JobController', JobController);

    JobController.$inject = ['$scope', '$rootScope', 'database'];

    function JobController($scope, $rootScope, database) {
        $scope.details = false;
        $scope.me = database.get("job");
    }

})();
