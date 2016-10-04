(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .filter('age', age);

    function age() {
        return function(date) {
            var age, birthDate, m, today;
            today = new Date();
            birthDate = new Date(date);
            age = today.getFullYear() - birthDate.getFullYear();
            m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
    }
})();
