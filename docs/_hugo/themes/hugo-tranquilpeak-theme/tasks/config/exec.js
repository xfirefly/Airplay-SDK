module.exports = function(grunt) {
  grunt.config.set('exec', {
    eslint: {
      cmd: './node_modules/eslint/bin/eslint.js .'
    }
  });

  grunt.loadNpmTasks('grunt-exec');
};
