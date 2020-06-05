const index = require ('../src/index.js');

const pathAbsolute = 'D:\\LIM012-fe-md-links\\src';
const pathRelative = './src';


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


