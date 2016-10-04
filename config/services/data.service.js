(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .factory('data', data);

    data.$inject = ['$http'];

    function data($http) {
        return {
            get: function(filename) {
                return $http.get('data/' + filename + '.json');
            }
        }
    }

})();