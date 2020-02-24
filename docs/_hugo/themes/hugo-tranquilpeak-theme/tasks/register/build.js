module.exports = function(grunt) {
  // Build (environment : development)
  grunt.registerTask('build', [
    'clean:build',
    'syncAssets',
    'linkAssets',
    'replace:cssTranquilpeak'
  ]);
};
