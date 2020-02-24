module.exports = function(grunt) {
  // Build (environment : production)
  grunt.registerTask('buildProd', [
    'clean:build',
    'syncAssets',
    'replace:cssTranquilpeak',
    'concat',
    'cssmin',
    'uglify',
    'linkAssetsProd'
  ]);
};
