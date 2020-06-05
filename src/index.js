
const path = require('path');


// Determinar si la ruta es absoluta
const pathIsAbsolute = (namePath) => path.isAbsolute(namePath);
console.log('¿La ruta es absoluta?', pathIsAbsolute('bar/baz'));

// Si la ruta no es absoluta (relativa), convertir a absoluta
const convertToAbsolute = (namePath) => (pathIsAbsolute(namePath) ? namePath : path.resolve(namePath));
console.log('Convertir ruta a absoluta', convertToAbsolute('baz'));






module.exports = {
  pathIsAbsolute,
  convertToAbsolute,
};







