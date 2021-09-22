const { encode, decode } = require('./encodeAndDecode');

describe ('Testa a função encode', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    })
    it('testa se e uma funcao', () => {
        expect(typeof encode).toEqual('function');
    })
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
  
    })
})