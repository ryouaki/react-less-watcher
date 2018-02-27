#!/usr/bin/env node

const path = require('path');
const chokidar = require('chokidar');
const less = require('less');
const fs = require('fs');

let uri = path.resolve(process.cwd(), 'src');

const argvs = process.argv;

if (argvs.length === 2) {
  console.warn('Warning: Run without -d parameter, So work with ' + uri);
} else if (argvs.length === 4 && argvs[2] === '-d') {
  uri = path.resolve(process.cwd(), argvs[3]);
} else {
  console.error('Error: Run with wrong parameter');
  process.exit();
}

let watcher = chokidar.watch(uri, {});

watcher.on('error', function(error) {
  console.error(error);
});

function lessHandleFunc(file) {
  if (file && !fs.statSync(file).isDirectory()) {
    let extname = path.extname(file);
    if (extname !== '.less') {
      return;
    } else {
      let destFile = file.replace(extname, '.css');
      fs.readFile(file, 'utf8', (e, lessInput) => {
        if (e) {
          console.error('err', e);
        }
        less
          .render(lessInput, {
            sourceMap: {},
            paths: ['.', path.dirname(file)]
          })
          .then(output => {
            fs.writeFileSync(destFile, output.css);
          })
          .catch(err => {
            if (err) {
              console.log('err', err);
            }
          })
      });
    }
  }
}

watcher.on('add', lessHandleFunc)

watcher.on('change', lessHandleFunc);

watcher.on('unlink', function(file) {
  if (file) {
    let extname = path.extname(file);
    if (extname !== '.less') {
      return;
    } else {
      let destFile = file.replace(extname, '.css');
      fs.unlinkSync(destFile);
    }
  }
});
