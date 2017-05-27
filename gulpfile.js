/**
 * Created by gaochao on 5/27/17.
 */

var gulp=require('gulp');

var concat = require('gulp-concat');

var less = require('gulp-less');

var uglify = require('gulp-uglify');

var del  =  require('del');


var compress = require('gulp-minify-css');


var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean',function(){
    return del(['build']);
})


gulp.task('default',function(){
   gulp.src('less/index.less').pipe(less()).pipe(compress()).pipe(concat('style.min.css')).pipe(gulp.dest('build/css'));
   gulp.watch("less/**/*.less",['clean','default']);
})
