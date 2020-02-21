module.exports = function(grunt) {
  grunt.config.set('watch', {
    // Watch assets to detect changes and launch `SyncAssets` task
    assets: {
      files: ['src/*/**/*'],
      tasks: ['syncAssets']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
