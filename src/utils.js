/* eslint-disable max-len */
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

// Determinar si la ruta es absoluta
const pathIsAbsolute = (namePath) => path.isAbsolute(namePath);

// Si la ruta no es absoluta (relativa), convertir a absoluta
const convertToAbsolute = (namePath) => (pathIsAbsolute(namePath) ? namePath : path.resolve(namePath));

// Determinar si la ruta es a un archivo
const isFile = (namePath) => fs.statSync(namePath).isFile();

// Determina si la ruta es a un directorio
const isDirectory = (namePath) => fs.statSync(namePath).isDirectory();


// Recorre directorio
const checkDirectory = (namePath) => {
  let arrayFile = [];
  // const newPath = convertToAbsolute(namePath);
  if (!isDirectory(namePath)) {
    // Si no es un directorio lo almacena en array
    arrayFile.push(namePath);
  } else {
    // Lista de contenidos del directorio
    const readDirectory = fs.readdirSync(namePath);
    // Iterará sobre el array
    readDirectory.map((obj) => {
      //
      const element = path.join(namePath, obj);
      const result = (isDirectory(element)) ? arrayFile = arrayFile.concat(checkDirectory(element)) : arrayFile.push(element);
      return result;
    });
  }
  return arrayFile;
};

// ¿Es un archivo .md?
const isMd = (namePath) => (path.extname(namePath) === '.md');


// Filtra archivos .md almacenandolos en un array
const filterIsMd = (arryFile) => {
  const arrayIsMd = [];
  arryFile.forEach((element) => {
    if (path.extname(element) === '.md') {
      arrayIsMd.push(element);
    }
  });
  return arrayIsMd;
};


// Retornará un array de objetos con tres propiedades
const findUrl = (mdfile) => {
  const data = fs.readFileSync(mdfile, 'utf8');
  const toString = data.toString();
  const regExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
  const regExprText = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
  const links = toString.match(regExp);
  const text = toString.match(regExprText);
  const urls = [];
  if (links) {
    for (let i = 0; i < links.length; i += 1) {
      const linkElement = {
        href: links[i],
        text: text[i],
        file: mdfile,
      };
      urls.push(linkElement);
    }
  }
  return urls;
};


// Validación de links
const validateLinks = (mdfile) => {
  const allLinks = findUrl(mdfile);
  const arrayPromise = allLinks.map((e) => new Promise((resolve) => fetch(e.href)
    .then((response) => {
      e.status = response.status;
      if (response.status >= 200 && response.status < 400) {
        e.statustext = 'ok';
      }
      if (response.status >= 404) {
        e.statustext = 'fail';
      }
      resolve(e);
    })
    // .catch((error) => {
    //   e.status = 404;
    //   console.log(error);
    //   e.statustext = 'fail';
    //   resolve(e);
    .catch(() => {
      e.status = 404;
      e.statustext = 'fail';
      resolve(e);
    })));
  return Promise.all(arrayPromise);
};


module.exports = {
  pathIsAbsolute,
  convertToAbsolute,
  isFile,
  isDirectory,
  checkDirectory,
  isMd,
  filterIsMd,
  findUrl,
  validateLinks,
};
