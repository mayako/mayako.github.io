(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', '$rootScope', 'data'];

    function AboutController($scope, $rootScope, data) {
        data.get('about').success(function(response) {
            $scope.me = response;
        });
    }

})();

