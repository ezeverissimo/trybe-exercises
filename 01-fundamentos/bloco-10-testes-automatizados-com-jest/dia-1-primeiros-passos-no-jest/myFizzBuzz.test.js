const myFizzBuzz = require('./myFizzBuzz');

describe('Testa funcao myFizzBuzz', () => {
    it('Numero divisivel por 3 e 5 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('Numero divisivel por 3 retorna fizz', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    })
    it('Numero divisivel por 5 retorna buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    })
    it('Número que não é divisível por 3 ou 5 retorna o proprio numero', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })
    it('Um parâmetro que não é um número retorna false', () => {
        expect(myFizzBuzz('7')).toBe(false);
    })
})