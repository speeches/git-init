/* global module:false */

module.exports = function(grunt) {
	
	var port = grunt.option('port') || 7070;
	var base = [grunt.option('base') || '.', 'node_modules/reveal.js'];

	// Project configuration
	grunt.initConfig({

		sass: {
			themes: {
				files: [
					{
						expand: true,
						cwd: 'css/theme/source',
						src: ['*.scss'],
						dest: 'css/theme',
						ext: '.css'
					}
				]
			}
		},

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		zip: {
			'reveal-js-presentation.zip': [
				'index.html',
				'css/**',
				'js/**',
				'lib/**',
				'images/**',
				'plugin/**',
				'**.md'
			]
		},

		watch: {
			js: {
				files: [ 'Gruntfile.js', 'js/*.js' ]
			},
			theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'css-themes'
			},
			css: {
				files: [ 'css/reveal.scss' ],
				tasks: 'css-core'
			},
			html: {
				files: [ '*.html']
			},
			markdown: {
				files: [ 'slides/*.md' ]
			},
			options: {
				livereload: true
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-zip' );

	// Default task
	grunt.registerTask( 'default', [ 'css' ] );

	// Theme CSS
	grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

	// All CSS
	grunt.registerTask( 'css', [ 'css-themes' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
