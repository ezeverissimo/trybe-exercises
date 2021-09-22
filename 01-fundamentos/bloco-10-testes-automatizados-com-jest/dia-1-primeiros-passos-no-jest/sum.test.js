const sum = require('./sum.js');

describe('Confere funcao sum', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(9).toBe(sum(4, 5));
    });
    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(0).toBe(sum(0, 0))
    })
    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" ', () => {
        expect(() => { sum(4, '5')}).toThrow();
    })
    it('Testa se a mensagem de erro e parameters must be numbers', () => {
        expect(() => { sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
    })
});