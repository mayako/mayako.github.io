(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope', '$translate', 'data'];

    function HomeController($scope, $rootScope, $translate, data) {
        $scope.change_language = function(lang) {
            $translate.use(lang);
        };

        data.get('home').success(function(response) {
            $scope.me = response;
        });
    }

})();