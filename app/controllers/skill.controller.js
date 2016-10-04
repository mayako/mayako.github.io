(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('SkillController', SkillController);

    SkillController.$inject = ['$scope', 'data'];

    function SkillController($scope, data) {
        data.get('skill').success(function(response) {
            $scope.me = response;
        });
    }

})();