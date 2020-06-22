// const pathX = require('path');

// const pathAbsoluteX = pathX.resolve('../data');
// const pathRelativeX = '../data';
// const filePathMd = pathX.resolve('../data/mdContainLink.md');

const {
  convertToAbsolute,
  checkDirectory,
  filterIsMd,
  findUrl,
  validateLinks,
} = require('./utils.js');


const mdLinks = (path, options) => new Promise((resolve) => {
  const pathAbsolute = convertToAbsolute(path);
  const checkedDirectory = checkDirectory(pathAbsolute);
  const arrFilteredIsMd = filterIsMd(checkedDirectory);

  if (options.validate === true) {
    arrFilteredIsMd.forEach((element) => {
      const arryElement = validateLinks(element);
      resolve(arryElement);
    });
  } else {
    arrFilteredIsMd.forEach((element) => {
      const arryElement = findUrl(element);
      resolve(arryElement);
    });
  }
});
// mdLinks(pathAbsoluteX, { validate: true }).then((res) => console.log(res));

module.exports = {
  mdLinks,
};
