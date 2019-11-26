const { dest, src, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const sass = require("gulp-sass");

//ソース変更時用
function js() {
  return webpackStream(webpackConfig, webpack)
  .pipe(dest('public/assets/js/'));
}

function css() {
  return src("src/css/main.scss")
  .pipe(sass())
  .pipe(dest("public/assets/css/"))
}

// 監視用
function watchFiles() {
  watch("public/*.html").on('change', browserSync.reload);
  watch("src/js/**", js);
  watch("public/assets/js/bundle.js").on('change', browserSync.reload);
  watch("src/css/**", css);
  watch("public/assets/css/main.css").on('change', browserSync.reload);
}

// サーバー起動
function serve() {
    browserSync.init({
      server: "public"
    });
}

exports.default = parallel(serve, watchFiles);