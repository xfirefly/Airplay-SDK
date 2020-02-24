var nanoid = require('nanoid');

module.exports = function(grunt) {
  var website = {};
  var token = nanoid(60).toLocaleLowerCase().replace(/[_-]+/g, '');
  website['static/js/script-' + token + '.min.js'] = ['static/js/script.js'];
  grunt.config.set('uglify', {
    // Minify `script.js` file into `script.min.js`
    prod: {
      options: {
        mangle: {
          reserved: [
            'jQuery',
            'fancybox'
          ]
        }
      },
      files: website
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
