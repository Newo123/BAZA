import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        vendorJs: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/modules/*.js`,
        vendorJs: `${srcFolder}/js/vendor/*.js`,
        images: `${srcFolder}/img/**/**`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        vendorJs: `${srcFolder}/js/vendor/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/img/**/**`,
    },
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}