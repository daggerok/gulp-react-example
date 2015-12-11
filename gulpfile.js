const gulp  = require('gulp'),
browserify  = require('browserify'),
source      = require('vinyl-source-stream'),
src         = 'src/',
all         = '**/*',
jsxExt      = '.jsx',
cssExt      = '.css',
htmlExt     = '.html',
entries     = src + 'index' + jsxExt,
allsrc      = src + all,
sources     = allsrc + jsxExt,
mainJs      = 'bundle.js',
build       = 'dist'

gulp.task('jsx', () => {
  browserify({
      entries: entries,
      extensions: [jsxExt],
      debug: true
    })
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .bundle()
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(source(mainJs))
    .on('error', (err) => {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(gulp.dest(build))
})

gulp.task('vendors', () => {
  gulp.src([
      'node_modules/semantic-ui/dist/semantic.css',
      'node_modules/semantic-ui/dist/semantic.js',
      'node_modules/semantic-ui/dist/themes/**/*'
    ], {base: 'node_modules/semantic-ui/dist/'})
    .pipe(gulp.dest(build))
  return gulp.src([
      'node_modules/jquery/dist/jquery.js'
    ], {base: 'node_modules/jquery/dist/'})
    .pipe(gulp.dest(build))
})

gulp.task('html', () => {
  return gulp.src(src + 'index' + htmlExt, {base: src})
    .pipe(gulp.dest(build))
})

gulp.task('default', ['jsx', 'vendors', 'html'])

gulp.task('watch', ['default'], () => {
  gulp.watch(sources, ['jsx'])
  gulp.watch(allsrc + htmlExt, ['html'])
})
