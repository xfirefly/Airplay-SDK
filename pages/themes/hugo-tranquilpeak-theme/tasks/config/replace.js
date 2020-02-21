module.exports = function(grunt) {
  grunt.config.set('replace', {
    // Replace `EJS_ENDTAG` string to resolve a problem of ejs escaping with sails-linker
    linker: {
      overwrite: true,
      src: [
        'layout/_partial/head.ejs',
        'layout/_partial/script.ejs'
      ],
      replacements: [{
        from: 'EJS_ENDTAG',
        to: '%>'
      }]
    },
    // Modify url of images and fonts in tranquilpeak.css to resolve images and fonts path.
    cssTranquilpeak: {
      overwrite: true,
      src: [
        'static/css/tranquilpeak.css'
      ],
      replacements: [{
        from: /url\(\"[.\/]+_images\//,
        to: 'url\(\"..\/images\/'
      }, {
        from: /url\(\'[.\/]+_images\//,
        to: 'url\(\'..\/images\/'
      }, {
        from: /url\(\"[.\/]+_fonts\//,
        to: 'url\(\"..\/fonts\/'
      }, {
        from: /url\(\'[.\/]+_fonts\//,
        to: 'url\(\'..\/fonts\/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
};

