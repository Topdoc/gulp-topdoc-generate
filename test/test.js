import test from 'ava';
// import fs from 'fs';
// import path from 'path';
import vfs from 'vinyl-fs';
import gulpTopdocGenerate from '../src/index.js';

// function read(file) {
//   return fs.readFileSync(file, 'utf8').trim();
// }
// function clean(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

test.cb('should emit error on streamed file', t => {
  const topdocGenerate = gulpTopdocGenerate({
    fileData: {
      sourcePath: './test/fixtures/button.css',
      template: 'lib/template.jade',
    }
  });
  vfs.src('./test/fixtures/button.css' , {
      buffer: false
    })
    .pipe(topdocGenerate)
    .once('error', (err) => {
      t.is(err.message, 'Streaming not supported');
      t.end();
    });
});
