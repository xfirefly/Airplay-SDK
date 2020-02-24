module.exports = function(grunt) {
  // Link all assets (environment : development)
  grunt.registerTask('linkAssets', [
    'sails-linker:devJs',
    'sails-linker:devCss',
    'replace:linker'
  ]);
};
