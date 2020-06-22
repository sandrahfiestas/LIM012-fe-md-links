const clc = require('cli-color');
// const utils = require('./utils.js');
const path = require('path');
// const pathAbsolute = path.resolve('./data');

const pathMd = path.resolve('./data/mdContainLink.md');
const linksArry = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: pathMd,
    status: 200,
    statusText: 'ok',
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: pathMd,
    status: 404,
    statusText: 'fail',
  },
  {
    href: 'https://www.w3schools.com/tags/asdadadd',
    text: 'Página w3shools',
    file: pathMd,
    status: 404,
    statusText: 'fail',
  },
];


/*
// Probando set
const pruebaSet = new Set(linksArry);
console.log([...pruebaSet]); // devuelve array de objetos
*/


// Contabiliza links: Totals y Unique
const statsLinks = (linksArr) => {
  const totalLinks = linksArr.length;
  const uniqueLinks = [...new Set(linksArr.map((links) => links.href))].length;
  console.log(clc.blueBright(`✔  Total: ${totalLinks}`));
  console.log(clc.yellowBright(`✔  Unique: ${uniqueLinks}`));

  // const result = `
  // Total: ${totalLinks}
  // Unique: ${uniqueLinks}`;
  // return (result);
};
console.log(statsLinks(linksArry));


module.exports = {
  statsLinks,
};
