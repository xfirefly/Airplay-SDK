module.exports = function(grunt) {
  var pipeline = require('../pipeline');
  var util = require('util');
  grunt.config.set('sails-linker', {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileRef: function(filepath) {
          var tmpl = '<script src="%s"></script>';
          return util.format(tmpl, filepath.substring(filepath.indexOf('/')));
        },
        appRoot: 'src/'
      },
      files: {
        'layouts/partials/script.html': pipeline.tranquilpeakJsFilesToInject
      }
    },
    devCss: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileRef: function(filepath) {
          var tmpl = '<link rel="stylesheet" href="%s" />';
          return util.format(tmpl, filepath.substring(filepath.indexOf('/')));
        },
        appRoot: 'src/'
      },
      files: {
        'layouts/partials/head.html': pipeline.tranquilpeakCssFilesToInject
      }
    },
    prodJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileRef: function(filepath) {
          var tmpl = '<script src="%s"></script>';
          return util.format(tmpl, filepath.substring(filepath.indexOf('/')));
        },
        appRoot: 'src/'
      },
      files: {
        'layouts/partials/script.html': 'static/js/*.min.js'
      }
    },
    prodCss: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileRef: function(filepath) {
          var tmpl = '<link rel="stylesheet" href="%s" />';
          return util.format(tmpl, filepath.substring(filepath.indexOf('/')));
        },
        appRoot: 'src/'
      },
      files: {
        'layouts/partials/head.html': 'static/css/*.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sails-linker');
};
