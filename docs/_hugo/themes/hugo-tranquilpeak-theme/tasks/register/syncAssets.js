module.exports = function(grunt) {
  // Synchronize all assets (css, js and images) after changes
  grunt.registerTask('syncAssets', [
    'compileAssets',
    'sync:dev'
  ]);
};
