(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .factory('users', users);

    users.$inject = ['database', '$firebaseObject', '$firebaseArray'];

    function users(database, $firebaseObject, $firebaseArray) {
        var usersRef = database.child('users');

        return {
            get: function(name) {
                return $firebaseObject(usersRef.child(name));
            },
            all: function() {
                return $firebaseArray(usersRef);
            },
            findByName: function(name){
                return $firebaseObject(usersRef.orderByChild('name').equalTo(name));
            }
        }
    }

})();