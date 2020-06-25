#!/usr/bin/env node
const {
  mdLinks,
} = require('./index.js');


const {
  statsLinks,
  statsAllLinks,
} = require('./stats');


// process.argv -> Matriz que contiene los argumentos de la linea de comandos
// 1°nodo 2°nombre del archivo (desde)3°argumentos de la linea de comandos adicionales


const paths = process.argv[2];
const optionOne = process.argv[3];
const optionTwo = process.argv[4];

const cli = (path, options, stats) => {
  if (options === '--validate' && stats === '--stats') {
    return mdLinks(path, { validate: true })
      .then((result) => {
        statsAllLinks(result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } if (options === '--validate') {
    return mdLinks(path, { validate: true })
      .then((result) => {
        console.table(result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } if (options === '--stats') {
    return mdLinks(path, { validate: true })
      .then((result) => {
        statsLinks(result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  return mdLinks(path, { validate: false })
    .then((result) => {
      console.table(result);
    })
    .catch((error) => {
      console.log('Error', error);
    });
};
cli(paths, optionOne, optionTwo);


module.exports = {
  cli,
};
