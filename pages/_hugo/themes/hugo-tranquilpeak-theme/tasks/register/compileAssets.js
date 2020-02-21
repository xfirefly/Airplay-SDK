module.exports = function(grunt) {
  // Compile assets all assets (css and js)
  grunt.registerTask('compileAssets', [
    'sass:dev',
    'concat:devJs'
  ]);
};
