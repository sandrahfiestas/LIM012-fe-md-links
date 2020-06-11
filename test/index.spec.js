const index = require('../src/index.js');

const pathAbsolute = 'D:\\LIM012-fe-md-links\\src';
const pathRelative = './src';
const pathDirectory = 'D:\\LIM012-fe-md-links\\test';
const pathFile = 'D:\\LIM012-fe-md-links\\README.md';
const arrypathFile = ['D:\\LIM012-fe-md-links\\README.md'];
const pathDirectoryX = 'D:\\LIM012-fe-md-links\\data\\';
const arryfilesDirectory = [
  'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  'D:\\LIM012-fe-md-links\\data\\mdNoLink.md',
  'D:\\LIM012-fe-md-links\\data\\script.js',
];
const fileMd = 'README.md';
const fileTxt = 'text.txt';
const arrFile = [
  'D:\\LIM012-fe-md-links\\.eslintrc.js',
  'D:\\LIM012-fe-md-links\\.gitignore',
  'D:\\LIM012-fe-md-links\\README.md',
];
const arrFileMd = ['D:\\LIM012-fe-md-links\\README.md'];

const mdNoLinks = 'D:\\LIM012-fe-md-links\\data\\mdNoLink.md';
const mdContainLinks = 'D:\\LIM012-fe-md-links\\data\\mdContainLink.md';
const arrContainLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: 'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'D:\\LIM012-fe-md-links\\data\\mdContainLink.md',
  },
];


// ¿La ruta es absoluta?
describe('pathIsAbsolute', () => {
  it('deberia retornar false si la ruta no es absoluta', () => {
    expect(index.pathIsAbsolute(pathRelative)).toBe(false);
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
    expect(index.convertToAbsolute(pathRelative)).toBe(pathAbsolute);
  });
});

// ¿Es un archivo?
describe('isfile()', () => {
  it('debería retornar true si la ruta es un archivo', () => {
    expect(index.isFile(pathFile)).toBe(true);
  });

  it('debería retornar false si la ruta no es un archivo', () => {
    expect(index.isFile(pathDirectory)).toBe(false);
  });
});


// ¿Es un directorio?
describe('isDirectory()', () => {
  it('debería retornar true si la ruta es a un directorio', () => {
    expect(index.isDirectory(pathDirectory)).toBe(true);
  });

  it('debería retornar false si la ruta no es un directorio', () => {
    expect(index.isDirectory(pathFile)).toBe(false);
  });
});

// Recorrer el directorio almacenando en un array sus subdirectorios
describe('checkDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof index.checkDirectory).toBe('function');
  });
  it('debería devolver un array de contenidos del directorio', () => {
    expect(index.checkDirectory(pathDirectoryX)).toEqual(arryfilesDirectory);
  });

  it('debería devolver un array al no ser un directorio', () => {
    expect(index.checkDirectory(pathFile)).toEqual(arrypathFile);
  });
});


// ¿Es un archivo .md?
describe('isMd()', () => {
  it('debería retornar true si es un archivo .md', () => {
    expect(index.isMd(fileMd)).toBe(true);
  });

  it('debería retornar false si no es un arhivo .md', () => {
    expect(index.isMd(fileTxt)).toBe(false);
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
    expect(index.findUrl(mdContainLinks)).toEqual(arrContainLinks);
  });
});
