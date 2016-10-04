(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('JobController', JobController);

    JobController.$inject = ['$scope', '$rootScope', 'data'];

    function JobController($scope, $rootScope, data) {
        data.get('job').success(function(response) {
            $scope.me = response;
            $scope.me.jobs = response.jobs.reverse();
        });

        $scope.details = false;
    }

})();
