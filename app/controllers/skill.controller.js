(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('SkillController', SkillController);

    SkillController.$inject = ['$scope', 'database'];

    function SkillController($scope, database) {
        // data.get('skill').success(function(response) {
        //     $scope.me = response;
        // });
        $scope.me = database.get("skill");
    }

})();