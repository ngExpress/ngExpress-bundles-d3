'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'src/bundle.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: [
                    'src/bundle.css'],
                dest: 'dist/bundle.css'
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};