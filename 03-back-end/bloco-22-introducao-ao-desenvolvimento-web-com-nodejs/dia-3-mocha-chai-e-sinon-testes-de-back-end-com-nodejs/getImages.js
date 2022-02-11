const axios = require('axios');

const getImages = async (num) => {
  try {

    if(typeof num !== 'number') throw Error('Número inválido');
    if(!num) return [];

  } catch (error) {
    return error.message;
  }

  try {
    let catImagens = [];
    for (let index = 0; index < num; index++) {
      catImagens.push(axios.get('https://api.thecatapi.com/v1/images/search'))
    }
    const response = await Promise.all(catImagens);
    const images = response.map((imagem) => imagem.data);
  
    return images;
  } catch (error) {
    throw Error('Erro na API');
  }
};

module.exports = getImages;
