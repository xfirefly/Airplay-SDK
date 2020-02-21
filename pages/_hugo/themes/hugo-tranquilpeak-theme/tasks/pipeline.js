// Js files to inject in `layouts/partials/script.html`
var tranquilpeakJsFilesToInject = [
  'tranquilpeak.js'
];

// Css files to inject in `layouts/partials/head.html`
var tranquilpeakCssFilesToInject = [
  'tranquilpeak.css'
];

module.exports.tranquilpeakCssFilesToInject = tranquilpeakCssFilesToInject.map(function(path) {
  return 'static/css/' + path;
});

module.exports.tranquilpeakJsFilesToInject = tranquilpeakJsFilesToInject.map(function(path) {
  return 'static/js/' + path;
});
