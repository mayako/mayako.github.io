(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('EducationController', EducationController);

    EducationController.$inject = ['$scope', 'database'];

    function EducationController($scope, database) {
        // data.get('education').success(function(response) {
        //     $scope.me = response;
        // });

        $scope.details = false;

        $scope.me = database.get("education");
    }

})();