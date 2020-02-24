module.exports = function(grunt) {
  grunt.config.set('clean', {
    // Delete the `assets` folder
    build: ['static']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
