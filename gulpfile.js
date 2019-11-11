const { src, dest, parallel, series, watch } = require('gulp');
const DIST_DIR = 'dist';
const SRC_DIR = 'src';

const gulpClean = require('gulp-clean');
const cssConcat = require('gulp-concat-css');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function clean() {
    return src(`${DIST_DIR}/*`, {allowEmpty: true})
        .pipe(gulpClean())
}

function css() {
    return src([`${SRC_DIR}/home/**/*.css`, `${SRC_DIR}/LESSONS/**/*.css`])
        .pipe(cssConcat('styles.min.css'))
        .pipe(csso())
        .pipe(dest(DIST_DIR))
}

function html() {
    return src(`${SRC_DIR}/home/index.html`)
        .pipe(fileInclude({prefix: '@@'}))
        .pipe(dest(DIST_DIR))
}

function js() {
    return src(`${SRC_DIR}/**/*.js`)
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest(DIST_DIR))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    watch(SRC_DIR).on('change', build);
    watch(DIST_DIR).on('change', browserSync.reload);
}


exports.css = css;
exports.clean = clean;
exports.serve = serve;
exports.html = html;
exports.js = js;

const build = parallel(html, css, js);

exports.dev = series(clean, build, serve);
exports.default = series(clean, build);
