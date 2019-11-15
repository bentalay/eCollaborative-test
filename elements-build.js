const concat = require('concat');

(async function build() {
  const files = [
    './dist/eCollaborative-test/runtime.js',
    './dist/eCollaborative-test/polyfills.js',
    './dist/eCollaborative-test/scripts.js',
    './dist/eCollaborative-test/main.js'
  ];
  await concat(files, './dist/eCollaborative-test/bundle.js');
})();
