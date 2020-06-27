const path = require('path');
const fetchMock = require('../__mocks__/node-fetch.js');
const md = require('../src/index.js');

fetchMock
  .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions', 200)
  .mock('https://carlosazaustre.com/manejando-la-asincronia-en-javascript/', 404)
  .mock('https://www.w3schools.com/tags/asdadadd', 404);


const pathMd = path.resolve('./data/mdContainLink.md');

const arrContainLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: pathMd,
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: pathMd,
  },
  {
    href: 'https://www.w3schools.com/tags/asdadadd',
    text: 'Página w3shools',
    file: pathMd,
  },
];
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


describe('mdLinks', () => {
  it('debería retornar una lista: href, path, text, status y ok o fail', (done) => {
    md.mdLinks(pathMd, { validate: true }).then((res) => {
      expect(res).toEqual(arrcontentLinksOkFail);
      done();
    });
  });

  it('debería retornar una lista: href, path y text', (done) => {
    md.mdLinks(pathMd, { validate: false }).then((res) => {
      expect(res).toEqual(arrContainLinks);
      done();
    });
  });
});
