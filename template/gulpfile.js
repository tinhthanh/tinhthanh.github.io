var gulp        = require('gulp')
var path        = require('path')
var fileinclude = require('gulp-file-include')

gulp.task('fileinclude', function() {
    return gulp.src([ "src/*.html" ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.join(__dirname, '/dist')))
})
