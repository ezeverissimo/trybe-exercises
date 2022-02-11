const { expect } = require('chai');
const catImages = require('../getImages');


describe('Testa função que retorna imagens', () => {
  it('Testa se é uma função', () => {
    expect(catImages).to.be.a('function');
  });

  describe('Retorna erro se N !== number ', () => {

    it('Retorna erro passando uma string como argumento', async () => {
      expect(await catImages('2')).to.be.equal('Número inválido');
    });
    it('Retorna erro passando uma obj como argumento', async () => {
      expect(await catImages({})).to.be.equal('Número inválido');
    });
  });


  describe('Testa função recebendo um argumento de número 0', () => {

    it('Retorna array vazio', async () => {
      const imagens = await catImages(0);

      expect(imagens).to.be.an('array');
      expect(imagens).to.be.length(0);
    });
  });

  describe('Se N > 0, retorna um array de objetos', () => {
    it('retorna mesmo tamanho no arr com o argumento passado', async () => {
      const arrImages = await catImages(5);
      expect(arrImages).to.be.an('array');
      expect(arrImages).to.be.length(5);
    })
  });

});
