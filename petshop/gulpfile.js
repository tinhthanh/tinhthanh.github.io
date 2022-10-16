var gulp        = require('gulp')
var path        = require('path')
var fileinclude = require('gulp-file-include')

gulp.task('fileinclude', function() {
    return gulp.src([ "src/pages/*.html" ])
        .pipe(fileinclude({
            prefix: '//@@',
            basepath: '@file'
        }))
       .pipe(gulp.dest(path.join(__dirname, '/dist/pages/')))
})
// Watch Files: nghĩa là khi những file thuộc folder pages hoặc partial và có đuôi .html thay đổi 
/// => code thì sẽ build lại code với task fileinclude
gulp.task('watch', function () {
    gulp.watch('src/pages/*.html', gulp.series('fileinclude'))
    gulp.watch('src/partial/*.html', gulp.series('fileinclude'))
    gulp.watch('src/partial/*.js', gulp.series('fileinclude'))
});