const clc = require('cli-color');

// Contabiliza links: Totals y Unique
const statsLinks = (linksArr) => {
  const totalLinks = linksArr.length;
  const uniqueLinks = [...new Set(linksArr.map((links) => links.href))].length;
  console.log(clc.blueBright(`✔  Total: ${totalLinks}`));
  console.log(clc.yellowBright(`✔  Unique: ${uniqueLinks}`));
};


// Contabiliza links: Totals, Unique y Broken
const statsAllLinks = (linksArr) => {
  const totalLinks = linksArr.length;
  // operador de propagación ... descomponemos el array de elementos y pasamos por cada uno de ellos
  const uniqueLinks = [...new Set(linksArr.map((links) => links.href))].length;
  const brokenLinks = linksArr.filter((element) => element.statustext === 'fail').length;
  console.log(clc.blueBright(`✔  Total: ${totalLinks}`));
  console.log(clc.yellowBright(`✔  Unique: ${uniqueLinks}`));
  console.log(clc.redBright(`✖  Broken: ${brokenLinks}`));
};


/*
// Probando set
const pruebaSet = new Set(linksArry);
console.log([...pruebaSet]); // devuelve array de objetos
*/


module.exports = {
  statsLinks,
  statsAllLinks,
};
