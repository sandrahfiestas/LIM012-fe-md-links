// Contabiliza links: Totals y Unique
const statsLinks = (linksArr) => {
  const totalLinks = linksArr.length;
  const uniqueLinks = [...new Set(linksArr.map((links) => links.href))].length;
  return { total: totalLinks, unique: uniqueLinks };
};


// Contabiliza links: Totals, Unique y Broken
const statsAllLinks = (linksArr) => {
  const totalLinks = linksArr.length;
  // operador de propagación ... descomponemos el array de elementos y pasamos por cada uno de ellos
  const uniqueLinks = [...new Set(linksArr.map((links) => links.href))].length;
  const brokenLinks = linksArr.filter((element) => element.statustext === 'fail').length;
  return { total: totalLinks, unique: uniqueLinks, broken: brokenLinks };
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
