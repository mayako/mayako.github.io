(function() {
    'use strict';

    angular
        .module('ProfileApp')
        .config(configure);

    configure.$inject = ['$translateProvider'];

    function configure($translateProvider){
        $translateProvider.translations('es', {
            FIRSTNAME: "Nombre",
            LASTNAME: "Apellido",
            BIRTHDATE: "Fecha de nacimiento",
            ADDRESS: "Dirección",
            MAIL: "Correo",
            IAM: "Yo soy",
            PHONES: "Telefonos",
            MOBILE: "Celular",
            HOME: "Casa",
            NOWADAYS: "Actualidad",
            DESCRIPTION: "Descripción",
            TASKS: "Tareas",
            JOBS: "Experiencia laboral",
            DETAILS: "Detalles",
            SKILLS: "Habilidades",
            PROFESSIONAL: "Profesional",
            WISHLIST: "Lista de deseos",
            EDUCATION: "Educación",
            FINISHED: "Terminado",
            UNFINISHED: "Inconcluso",
            INPROCESS: "En proceso",
            PROJECTS: "Proyectos",

            MY: {
                ADDRESS: "Ciudad Azteca, Estado de Mexico, Mexico",
                DEGREE: "Desarrollador Web",
                INTRO: "Apasionado del desarrollo web tanto Front-end como Back-end. He adquirido diferentes conocimientos técnicos de manera profesional y autodidacta. Soy un entusiasta de las nuevas tecnologías y del código limpio, semántico y reutilizable."
            },

            LANG: {
                EN: 'Ingles',
                ES: 'Español'
            },

            MONTHS: {
                1: "Enero",
                2: "Febrero",
                3: "Marzo",
                4: "Abril",
                5: "Mayo",
                6: "Junio",
                7: "Julio",
                8: "Agosto",
                9: "Septiembre",
                10: "Octubre",
                11: "Noviembre",
                12: "Diciembre"
            },

            JOB: {
                TESE: {
                    DESCRIPTION: "Servicio Social. Elaboración de sistemas para uso interno de la institución desarrollados en VB.NET y SQL Server como base de datos, asi como soporte a los mismo, además de apoyo académico a compañeros.",
                    TASKS: {
                        1: "Desarrollo e implementación de Sistemas Web.",
                        2: "Soporte y seguimiento de incidencias."
                    }
                },
                INEGI: {
                    DESCRIPTION: "Prácticas Profesionales. Análisis y desarrollo de un sistema para la administración de recursos computacionales con Java como plataforma de desarrollo y con base de datos en MySQL.",
                    TASKS: {
                        1: "Programación full-stack del Sistema de Control de Recursos.",
                        2: "Soporte tecnico a recursos computacionales en almacenamiento."
                    }
                },
                BENKIO: {
                    DESCRIPTION: "Responsable del desarrollo y modifcación de distintos sistemas, principalmente desarrollados en PHP, con MySQL como motor de base de datos, así como dar soporte al usuario y la solución de incidencias.",
                    TASKS: {
                        1: "Creación de Webservices REST para comunicación con apps mobiles.",
                        2: "Lectura de CFDI's por correo electrónico.",
                        3: "Vinculación con CRM de Oracle por medio de Webservices SOAP.",
                        4: "Almacenamiento y lectura de información en formato XML/JSON.",
                        5: "Seguridad e integridad de datos por medio de transacciones."
                    }
                },
                TSB: {
                    DESCRIPTION: "Responsable del desarrollo y mantenimiento del sistema de control de eventos, así como dar seguimiento a reportes de incidencias de parte del usuario final.",
                    TASKS: {
                        1: "Desarrollo de nuevos modulos.",
                        2: "Depuración de errores.",
                        3: "Mantenimiento y corrección de codigo."
                    }
                }
            }
        });
    }

})();