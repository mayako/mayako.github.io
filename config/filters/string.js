(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .filter('capitalize', capitalize);

    function capitalize() {
        return function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
    }

})();