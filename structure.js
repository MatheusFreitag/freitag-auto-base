#!/usr/bin/env node

const fs = require('fs');
const contents = require('./contents.js');
const { exec } = require('child_process');
//Se a /public nao existe, crio ela e todas as subpastas necessarias
if (!fs.existsSync("./public")){
    fs.mkdirSync("./public");
    fs.mkdirSync("./public/css");
    fs.mkdirSync("./public/img");
    fs.mkdirSync("./public/js");
    fs.mkdirSync("./public/stylus");
}

//Com a Public criada, insiro os arquivos que são necessários
if (fs.existsSync("./public/css")) {
    fs.writeFileSync("./public/css/style.css","");
}
if (fs.existsSync("./public/js")) {
    fs.writeFileSync("./public/js/script.js", "");
}
if (fs.existsSync("./public/stylus")) {
    fs.writeFileSync("./public/stylus/style.styl", "");
}

//Se o Gulpfile não existe, crio
if (!fs.exists("./gulpfile.js")){
    fs.writeFile("./gulpfile.js", contents.gulpfileContent, ()=>{
        console.log('Gulpfile created');
    })
}

//Se o index.js não existe, crio
if (!fs.exists("./index.js")) {
    fs.writeFile("./index.js", contents.indexJSContent, () => {
        console.log('index.js created');
    })
}


//Se o index.html não existe, crio
if (!fs.exists("./index.html")) {
    fs.writeFile("./index.html", contents.indexHTMLContent, () => {
        console.log('index.html created');
    })
}


//Pacotes necessários serão instalados
//Express
console.log('Express is being installed');
exec("npm i express --save", (err,stdout,stderr)=>{
    console.log('Express installed');
});

//Body Parser
console.log('Body-Parser is being installed');
exec("npm i body-parser --save", (err, stdout, stderr) => {
    console.log('Body-Parser installed');
});

//Gulp
console.log('Gulp is being installed');
exec("npm i gulp --save", (err, stdout, stderr) => {
    console.log('Gulp installed');
})

//Gulp-Util
console.log('Gulp-Util is being installed');
exec("npm i gulp-util --save", (err, stdout, stderr) => {
    console.log('Gulp-Util installed');
})

//Browser-Synch
console.log('Browser-Synch is being installed');
exec("npm i browser-sync --save", (err, stdout, stderr) => {
    console.log('Browser-Synch installed');
});

//Gulp-Stylus
console.log('Gulp-Stylus is being installed');
exec("npm i gulp-stylus --save", (err, stdout, stderr) => {
    console.log('Gulp-Stylus installed');
});






