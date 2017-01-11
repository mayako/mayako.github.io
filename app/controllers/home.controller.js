(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope', '$translate', 'database'];

    function HomeController($scope, $rootScope, $translate, database) {
        $scope.change_language = function(lang) {
            $translate.use(lang);
        };

        $scope.me = database.get("home");
    }

})();