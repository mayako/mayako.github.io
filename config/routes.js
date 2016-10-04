(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .config(configure);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })
            .when('/about', {
                controller: 'AboutController',
                templateUrl: 'app/views/about.html'
            })
            .when('/skills', {
                controller: 'SkillController',
                templateUrl: 'app/views/skills.html'
            })
            .when('/jobs', {
                controller: 'JobController',
                templateUrl: 'app/views/jobs.html'
            })
            .when('/edu', {
                controller: 'EducationController',
                templateUrl: 'app/views/education.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }

})();