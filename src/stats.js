const clc = require('cli-color');

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
// console.log(statsLinks(linksArry));


// Contabiliza links: Totals, Unique y Broken
const statsAllLinks = (linksArr) => {
  const totalLinks = linksArr.length;
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
