module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/chartist-plugin-axistitle.min.js': ['dist/js/plugin/chartist-plugin-axistitle.js'],
				'../markup/js/chartist-plugin-legend.min.js': ['dist/js/plugin/chartist-plugin-legend.js'],
				'../markup/js/chartist.min.js': ['dist/js/plugin/chartist.js'],
				'../markup/js/chartist-goal-line.min.js': ['dist/js/plugin/chartist-goal-line.js'],
				
				


				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/questioning.min.js': ['dist/js/questioning.js'],
				'../markup/js/user-account.min.js': ['dist/js/user-account.js'],
				'../markup/js/portfolio.min.js': ['dist/js/portfolio.js'],
				'../markup/js/user-account-graph.min.js': ['dist/js/user-account-graph.js'],
				'../markup/js/assets-liabilities.min.js': ['dist/js/assets-liabilities.js'],
				'../markup/js/income-expenses.min.js': ['dist/js/income-expenses.js'],
				'../markup/js/common-panel.min.js': ['dist/js/common-panel.js'],
				'../markup/js/control.min.js': ['dist/js/control.js'],
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				//sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: ['**/*.html'],
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html',
						popups: '<%= fixturesPath %>/templates/popups.html',
						user_header: '<%= fixturesPath %>/templates/user_header.html',
						userAcc_sidebar: '<%= fixturesPath %>/templates/userAcc-sidebar.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
