(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', '$rootScope', 'database'];

    function AboutController($scope, $rootScope, database) {
        $scope.me = database.get('about');
    }

})();

