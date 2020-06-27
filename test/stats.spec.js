const path = require('path');
const stats = require('../src/stats.js');


const pathMd = path.resolve('./data/mdContainLink.md');

const arrcontentLinksOkFail = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: pathMd,
    status: 200,
    statustext: 'ok',
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: pathMd,
    status: 404,
    statustext: 'fail',
  },
  {
    href: 'https://www.w3schools.com/tags/asdadadd',
    text: 'Página w3shools',
    file: pathMd,
    status: 404,
    statustext: 'fail',
  },
];


const validStats = {
  total: 3,
  unique: 3,
};


const validStatsLinks = {
  total: 3,
  unique: 3,
  broken: 2,
};


describe('statsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof stats.statsLinks).toBe('function');
  });

  it('debería retornar cantidad de links total & unique', () => {
    expect(stats.statsLinks(arrcontentLinksOkFail)).toEqual(validStats);
  });

  it('debería retornar cantidad de links total, unique & broken', () => {
    expect(stats.statsAllLinks(arrcontentLinksOkFail)).toEqual(validStatsLinks);
  });
});
