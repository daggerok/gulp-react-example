const gulp  = require('gulp'),
browserify  = require('browserify'),
source      = require('vinyl-source-stream'),
extension   = '.jsx'
entries     = 'src/index' + extension,
sources     = 'src/**/*' + extension,
mainJs      = 'bundle.js',
build       = 'dist'

gulp.task('jsx', () => {
  browserify({
      entries: entries,
      extensions: [extension],
      debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(source(mainJs))
    .pipe(gulp.dest(build))
})

gulp.task('default', ['jsx'])

gulp.task('dev', () => {
  browserify({
      entries: entries,
      extensions: [extension],
      debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(source(mainJs))
    .pipe(gulp.dest(build))
})

gulp.task('watch', ['dev'], () => {
  return gulp.watch(sources, ['dev'])
})
