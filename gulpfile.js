
const gulp = require('gulp')

const webpack = require('webpack')
const path = require('path')
const del = require('del')
const sftp = require('gulp-sftp')

// 是上传地址配置，可以在.gitignore中忽略此文件上传，为了安全本地拥有就可以了
const config = require('./config')

gulp.task('test', ['upload', 'clean'], function() {
  console.log('上传完成！')
})
gulp.task('upload', function() {
  console.log('上传文件中。。。')
  return gulp.src('dist' + '/**').pipe(sftp(config.test))
})
gulp.task('clean', ['upload'], function() {
  console.log('上传完毕，删除本地构建的代码')
  del('./dist')
})