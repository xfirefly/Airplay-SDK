const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.config.set('sass', {
    // Compile `tranquilpeak.scss` file into `tranquilpeak.css`
    dev: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      files: {
        'static/css/tranquilpeak.css': 'src/scss/tranquilpeak.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
