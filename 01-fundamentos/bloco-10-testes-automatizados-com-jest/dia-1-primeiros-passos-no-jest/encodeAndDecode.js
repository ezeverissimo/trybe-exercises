function encode(palavra) {
    let vogais = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    let stringConvertida = '';
  
    for (let index = 0; index < palavra.length; index += 1) {
      let letraAtual = palavra[index];
      if (vogais[letraAtual]) {
        stringConvertida += vogais[letraAtual];
      } else {
        stringConvertida += letraAtual;
      }
    }
    return (stringConvertida);
}

function decode(palavra) {
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let stringConvertida = '';

  for (let index = 0; index < palavra.length; index += 1) {
    let letraAtual = palavra[index];
    if (vogais[letraAtual]) {
      stringConvertida += vogais[letraAtual];
    } else {
      stringConvertida += letraAtual;
    }
  }
  return (stringConvertida);
}

module.exports = { encode, decode };