const mix = require('laravel-mix');
const path = require('path');

// Summernote does require("jQuery") (capital Q). Point it at the same jquery
// package we import, otherwise the plugin attaches to a second jQuery copy.
mix.webpackConfig({
    resolve: {
        alias: { jQuery: path.resolve(__dirname, 'node_modules/jquery') },
    },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
