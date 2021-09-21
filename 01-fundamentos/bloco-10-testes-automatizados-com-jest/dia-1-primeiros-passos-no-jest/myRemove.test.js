const myRemove = require('./myRemove.js');

describe('Confere funcao myRemove', () => {
    it('Verifica se a funcao remove o numero 3', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
    })
    it('Verifica se a funcao não retorna o array [1, 2, 3, 4]', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
    })
    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 4))
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
    })
})