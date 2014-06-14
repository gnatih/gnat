module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    useminPrepare: {
        html: 'index.html',
        options: {
          dest: 'dist'
        }
    },
    
    connect: {
      dev: {
        options: {
          hostname: "localhost",
          port: 9001
        }
      }
    },

    usemin:{
      html:['dist/index.html']
    },

    copy:{
      html: {
        src: './index.html', dest: 'dist/index.html'
      },
      assets: {
        src: ['img/**'], dest: 'dist/'
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

      html: {
        files: [ 'index.html' ],
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