(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .service('database', database);

    database.$inject = ['$firebaseObject'];

    function database($firebaseObject, $firebaseArray) {
        var db = firebase.database().ref();

        this.get = function(node) {
            return $firebaseObject(db.child(node));
        }

        this.ref = function() {
            return db;
        }
    }
})();