gulp       = require('gulp'),
browserify = require('browserify'),
stream     = require('vinyl-source-stream'),
src        = 'src/',
jsxExt     = '.jsx',
htmlExt    = '.html',
allsrc     = src + '**/*',
build      = 'dist'
require("colors")

log = (error) => {
  console.log([
    'BUILD FAILED'.red.underline,
    '\u0007', // beep
    error.stack.substring(0, error.stack.indexOf(' at ') || error.stack.length)
  ].join('\n'))
  //this.end()
}

gulp.task('jsx', () => {
  browserify({
      entries: src + 'index' + jsxExt,
      extensions: [jsxExt]
    })
    .on('error', log)
    .transform('babelify', {presets: ['es2015', 'react']})
    .on('error', log)
    .bundle()
    .on('error', log)
    .pipe(stream('bundle.js'))
    .on('error', log)
    .pipe(gulp.dest(build))
})

gulp.task('html', () => {
  return gulp.src(src + 'index' + htmlExt, {base: src})
    .pipe(gulp.dest(build))
})

gulp.task('default', ['jsx', 'html'])

gulp.task('watch', ['default'], () => {
  gulp.watch(allsrc + jsxExt, ['jsx'])
  gulp.watch(allsrc + htmlExt, ['html'])
})
