/* eslint-disable max-len */
const path = require('path');
const fs = require('fs');
const clc = require('cli-color');
// const colors = require('colors');

// Determinar si la ruta es absoluta
const pathIsAbsolute = (namePath) => path.isAbsolute(namePath);
console.log('¿La ruta es absoluta?', pathIsAbsolute('bar/baz'));

// Si la ruta no es absoluta (relativa), convertir a absoluta
const convertToAbsolute = (namePath) => (pathIsAbsolute(namePath) ? namePath : path.resolve(namePath));

// Determinar si la ruta es a un archivo
const isFile = (namePath) => fs.statSync(namePath).isFile();

// Determina si la ruta es a un directorio
const isDirectory = (namePath) => fs.statSync(namePath).isDirectory();
console.log('¿es un directorio', isDirectory('D:\\LIM012-fe-md-links\\src'));


// Probando paleta CLI
const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;
console.log(error('¡Error!'));
console.log(warn('Advertencia'));
console.log(notice('Aviso'));

// Probando paleta de COLORS
console.log('¡Error!'.red);
console.log('Advertencia'.yellow);
console.log('Aviso'.blue);

module.exports = {
  pathIsAbsolute,
  convertToAbsolute,
  isFile,
  isDirectory,
};
