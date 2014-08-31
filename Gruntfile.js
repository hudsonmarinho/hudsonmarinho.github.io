"use strict";

module.exports = function(grunt)
{
	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// Watch
		watch: {
			css: {
				files: ['_sources/stylesheets/**/*' ],
				tasks: ['compass']
			},
			js: {
				files: '_sources/javascripts/**/*',
				tasks: ['uglify']
			}
		},

		// Compile scss
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb',
					outputStyle: 'compressed'
				}
			}
		},

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'public/javascripts/app.js': [
						'_sources/javascripts/libs/modernizr-2.6.2.min.js',
						'_sources/javascripts/libs/jquery-1.10.2.min.js',
            
						'_sources/javascripts/script.js',
					]
				}
			}
		},
	});

	// registrando tarefa default
	grunt.registerTask('default',	['watch']);

};