'use strict';

const gulp = require('gulp');
const twig = require('gulp-twig');

gulp.task('twig', () =>
  gulp.src(['./typescript/**/*.twig'])
    .pipe(twig({ errorLogToConsole: true }))
    .pipe(gulp.dest('./typescript/'))
);

gulp.task('watch', ['twig'], () =>
  gulp.watch([
    './typescript/**/*.twig',
    './typescript/**/twig/**/*.js'
  ], ['twig'])
);

gulp.task('default', ['watch']);