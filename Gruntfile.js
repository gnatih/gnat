module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    useminPrepare: {
        html: 'index.html',
        options: {
          dest: './'
        }
    },

    clean: ['js/vendor.min.js'],
    
    connect: {
      dev: {
        options: {
          hostname: "localhost",
          port: 9001
        }
      }
    },

    concat: {
      dist: {
        src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/angular/angular.min.js', 'bower_components/angular-resource/angular-resource.min.js', 'bower_components/isotope/jquery.isotope.min.js'],
        dest: 'js/vendor.min.js'
      }
    },

    watch: {
      sass: {
        files: 'scss/*.scss',
        tasks: ['compass:dist'],
      },

      css: {
        files: ['css/*.css'],
      },

      js: {
        files: ['index.html', 'js/app.js', 'js/script.js'],
        tasks: ['clean', 'newer:concat']
      },

      livereload: {
        files: ['*.html', 'css/*.css', 'js/*.js' ],
        options: { livereload: true }
      },

    },

    // compass and scss
    compass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          relativeAssets: true,
          force: true,
          cssDir: 'css/',
          sassDir: 'scss/'
        }
      }
    },
  });

  grunt.registerTask('default', ['connect', 'watch']);

  grunt.registerTask('build', [
    'newer:copy',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin'
  ]);
}