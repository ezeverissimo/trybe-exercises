const service = require('./script.js')

it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
  service.dividir = jest.fn();

  service.dividir();
  expect(service.dividir).toHaveBeenCalled();
})

it('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno.', () => {
  service.multiplicar = jest
    .fn()
    .mockReturnValue(10)

  service.multiplicar();
  expect(service.multiplicar).toHaveBeenCalled();
  expect(service.multiplicar()).toBe(10);
})

it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
  service.somar = jest
  .fn()
  .mockImplementation((a, b) => a + b);

  service.somar(2, 2);

  expect(service.somar).toHaveBeenCalled();
  expect(service.somar).toHaveBeenCalledWith(2, 2);
})

it('Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
  service.dividir = jest
  .fn()
  .mockReturnValue(15)

  service.dividir(2, 5)

  expect(service.dividir).toHaveBeenCalled();
  expect(service.dividir()).toBe(15);
  expect(service.dividir).toHaveBeenCalledTimes(2);

})

it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
  const mockSubtrair = jest.spyOn(service, 'subtrair');
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
})