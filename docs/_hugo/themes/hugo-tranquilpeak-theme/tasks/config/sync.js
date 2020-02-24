module.exports = function(grunt) {
  grunt.config.set('sync', {
    // Synchronize images and fonts
    dev: {
      files: [{
        cwd: 'src/images',
        src: ['**/*'],
        dest: 'static/images'
      }, {
        cwd: 'src/fonts',
        src: ['**/*'],
        dest: 'static/fonts'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');
};
