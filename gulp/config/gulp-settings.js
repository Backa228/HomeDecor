import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: { 
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    scrFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `htdocs`
}

export const configFTP = {
	host: "decor-for-home.free.nf", // Адреса FTP сервера
	user: "if0_38808516", // Ім'я користувача
	password: "FwKMk5mGJrMTK", // Пароль
	parallel: 5 // Кількість одночасних потоків
}
