const path = require('path');
const index = require('../src/utils.js');

const pathAbsolute = path.resolve('./data');
const pathFile = './data/script.js';
const pathMd = path.resolve('./data/mdContainLink.md');
const mdNoLinks = path.resolve('./data/mdNoLink.md');
const arrypathFile = ['./data/script.js'];
const arryfilesDirectory = [
  'D:\\LIM012-fe-md-links\\data\\datos\\scriptDatos.js',
  'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  'D:\\LIM012-fe-md-links\\data\\mdNoLink.md',
  'D:\\LIM012-fe-md-links\\data\\script.js',
];

const arrFile = [
  'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  'D:\\LIM012-fe-md-links\\data\\mdNoLink.md',
  'D:\\LIM012-fe-md-links\\data\\script.js',
];
const arrFileMd = [
  'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  'D:\\LIM012-fe-md-links\\data\\mdNoLink.md',
];
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


// ¿La ruta es absoluta?
describe('pathIsAbsolute', () => {
  it('deberia retornar false si la ruta no es absoluta', () => {
    expect(index.pathIsAbsolute('./data')).toBe(false);
  });

  it('deberia retornar true si la ruta es absoluta', () => {
    expect(index.pathIsAbsolute(pathAbsolute)).toBe(true);
  });
});

// Convertir en absoluta
describe('convertToAbsolute()', () => {
  it('deberia retornar una ruta absoluta al ingesar una ruta absoluta', () => {
    expect(index.convertToAbsolute(pathAbsolute)).toBe(pathAbsolute);
  });

  it('debería retornar una ruta absoluta al ingresar una ruta relativa', () => {
    expect(index.convertToAbsolute('./data')).toBe(pathAbsolute);
  });
});

// ¿Es un archivo?
describe('isfile()', () => {
  it('debería retornar true si la ruta es un archivo', () => {
    expect(index.isFile(pathFile)).toBe(true);
  });

  it('debería retornar false si la ruta no es un archivo', () => {
    expect(index.isFile(pathAbsolute)).toBe(false);
  });
});


// ¿Es un directorio?
describe('isDirectory()', () => {
  it('debería retornar true si la ruta es a un directorio', () => {
    expect(index.isDirectory(pathAbsolute)).toBe(true);
  });

  it('debería retornar false si la ruta no es un directorio', () => {
    expect(index.isDirectory(pathFile)).toBe(false);
  });
});

// Recorrer directorio almacendo los archivos en un array
describe('checkDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof index.checkDirectory).toBe('function');
  });
  it('debería devolver un array de archivos del(los) directorio(s)', () => {
    expect(index.checkDirectory(pathAbsolute)).toEqual(arryfilesDirectory);
  });

  it('debería devolver un array al no ser un directorio', () => {
    expect(index.checkDirectory(pathFile)).toEqual(arrypathFile);
  });
});


// ¿Es un archivo .md?
describe('isMd()', () => {
  it('debería retornar true si es un archivo .md', () => {
    expect(index.isMd(pathMd)).toBe(true);
  });

  it('debería retornar false si no es un arhivo .md', () => {
    expect(index.isMd(pathFile)).toBe(false);
  });
});

// Filtra archivos .md almacenandolos en un array
describe('filterIsMd()', () => {
  it('debería almacenar en un array los archivos con extensión .md', () => {
    expect(index.filterIsMd(arrFile)).toEqual(arrFileMd);
  });
});

// Obtener links de un archivo .md
describe('findUrl()', () => {
  // no reconoce el toEqual(undefined)
  it('debería devolver un array vacio si el archivo .md no contiene links', () => {
    expect(index.findUrl(mdNoLinks)).toEqual([]);
  });

  it('debería obtener el array de links que contiene el archivo .md', () => {
    expect(index.findUrl(pathMd)).toEqual(arrContainLinks);
  });
});

// Validate
describe('validateLinks', () => {
  it('debería ser una función', () => {
    expect(typeof index.validateLinks).toBe('function');
  });
  it('debería devolver un array de objetos con cinco propiedades',
    () => expect(index.validateLinks(pathMd)).resolves.toEqual(arrcontentLinksOkFail));
  it('debería devolver un array vacio si el archivo no tiene enlaces',
    () => expect(index.validateLinks(mdNoLinks)).resolves.toEqual([]));
});
