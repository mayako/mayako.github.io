(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('EducationController', EducationController);

    EducationController.$inject = ['$scope', 'data'];

    function EducationController($scope, data) {
        data.get('education').success(function(response) {
            $scope.me = response;
        });

        $scope.details = false;
    }

})();