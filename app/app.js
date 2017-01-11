(function() {
    'use strict';

    angular
        .module('ProfileApp', [
            'ngRoute',
            'ngMaterial',
            'ngMdIcons',
            'pascalprecht.translate',
            'firebase'
        ])
        .config(configure)

    configure.$inject = ['$mdThemingProvider', '$translateProvider'];

    function configure($mdThemingProvider, $translateProvider) {

        // Set Theme's colors
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('red');

        // Set Language default
        $translateProvider.preferredLanguage('es');
        // Loader
        $translateProvider.useLoader('firebaseLocales');

        $translateProvider.useSanitizeValueStrategy(null);
    }

})();
