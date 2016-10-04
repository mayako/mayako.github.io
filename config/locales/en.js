(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .config(configure);

    configure.$inject = ['$translateProvider'];

    function configure($translateProvider){
        $translateProvider.translations('en', {
            FIRSTNAME: "Firstname",
            LASTNAME: "Lastname",
            BIRTHDATE: "Birthdate",
            ADDRESS: "Address",
            MAIL: "Mail",
            IAM: "I'm",
            PHONES: "Phones",
            MOBILE: "Mobile",
            HOME: "Home",
            NOWADAYS: "Nowadays",
            DESCRIPTION: "Description",
            TASKS: "Tasks",
            JOBS: "Work Experience",
            DETAILS: "Details",
            SKILLS: "Skills",
            PROFESSIONAL: "Professional",
            WISHLIST: "Wishlist",
            EDUCATION: "Education",
            FINISHED: "Finished",
            UNFINISHED: "Unfinished",
            INPROCESS: "In process",
            PROJECTS: "Projects",

            MY: {
                ADDRESS: "Aztec City, Mexico State, Mexico",
                DEGREE: "Web Developer",
                INTRO: ""
            },

            LANG: {
                EN: 'English',
                ES: 'Spanish'
            },

            MONTHS: {
                1: "January",
                2: "February",
                3: "March",
                4: "April",
                5: "May",
                6: "June",
                7: "July",
                8: "August",
                9: "September",
                10: "October",
                11: "November",
                12: "December"
            }
        });
    }

})();