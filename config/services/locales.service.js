(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .factory('firebaseLocales', firebaseLocales);

    firebaseLocales.$inject = ['$q', 'database'];

    function firebaseLocales($q, database) {
        return function(options) {
            var ref = database.ref().child("config").child("locales").child(options.key);
            var deferred = $q.defer();
            ref.on('value', function(snapshot){
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        }
    }
})();