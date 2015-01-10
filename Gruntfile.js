/*jslint node: true */
"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'dist/ngForte.min.js': [ 'dist/ngForte.js' ]
                },
                options: {
                    mangle: false
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [ 'src/**/*.js', 'tmp/*.js' ],
                dest: 'dist/ngForte.js'
            }
        },

        jshint: {
            all: [ 'Gruntfile.js', 'src/*.js', 'src/**/*.js' ]
        },

        watch: {
            dev: {
                files: [ 'Gruntfile.js', 'src/*.js'],
                tasks: [ 'jshint', 'karma:continuous', 'concat:dist'],
                options: {
                    atBegin: true
                }
            }
        },

        karma: {
            options: {
                configFile: 'config/karma.conf.js'
            },
            unit: {
                singleRun: true
            },
            continuous: {
                singleRun: false,
                autoWatch: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('dev', [ 'jshint', 'watch:dev' ]);
    grunt.registerTask('build', [ 'jshint', 'karma:unit','concat:dist', 'uglify:dist']);

};
