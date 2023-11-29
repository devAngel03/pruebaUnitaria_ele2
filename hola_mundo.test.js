const holaMundo = require('./hola_mundo');

test('Comprobando mensaje', () => {
  expect(holaMundo()).toBe('!Hola Profesor!');
});