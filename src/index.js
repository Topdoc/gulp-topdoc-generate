import through from 'through2';
import PluginError from 'plugin-error';

const PLUGIN_NAME = 'gulp-topdoc-generate';

export default function gulpTopdocGenerate(opts) {
  const stream = through.obj((file, enc, cb) => {
    if (file.isStream()) {
      return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }
    cb();
  });
  return stream;
}
