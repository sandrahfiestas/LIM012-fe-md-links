
const path = require('path');
const fs = require('fs');

// Determinar si la ruta es absoluta
const pathIsAbsolute = (namePath) => path.isAbsolute(namePath);
console.log('¿La ruta es absoluta?', pathIsAbsolute('bar/baz'));

// Si la ruta no es absoluta (relativa), convertir a absoluta
const convertToAbsolute = (namePath) => (pathIsAbsolute(namePath) ? namePath : path.resolve(namePath));

// Determinar si la ruta es a un archivo
const isFile = (namePath) => fs.statSync(namePath).isFile();





module.exports = {
  pathIsAbsolute,
  convertToAbsolute,
  isFile,
};







