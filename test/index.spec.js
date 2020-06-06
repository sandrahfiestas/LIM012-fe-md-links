const index = require ('../src/index.js');

const pathAbsolute = 'D:\\LIM012-fe-md-links\\src';
const pathRelative = './src';
const pathDirectory = 'D:\\LIM012-fe-md-links\\test';
const pathFile = 'D:\\LIM012-fe-md-links\\README.md';



// ¿La ruta es absoluta?
describe('pathIsAbsolute',() => {
    it('deberia retornar false si la ruta no es absoluta', () => {
        expect(index.pathIsAbsolute(pathRelative)).toBe(false);
    });

    it('deberia retornar true si la ruta es absoluta', () => {
        expect(index.pathIsAbsolute(pathAbsolute)).toBe(true);
    });
});

// Convertir en absoluta
describe('convertToAbsolute()', () => {
    it('debería retornar una ruta absoluta al ingresar una ruta relativa', () => {
      expect(index.convertToAbsolute(pathRelative)).toBe(pathAbsolute);
    });
});

// ¿Es un archivo?
describe('isfile()', () => {
    it('debería retornar true si la ruta es un archivo', () => {
        expect(index.isFile(pathFile)).toBe(true);
    });
});

describe('isfile()', () => {
    it('debería retornar false si la ruta no es un archivo', () => {
        expect(index.isFile(pathDirectory)).toBe(false);
    });
});