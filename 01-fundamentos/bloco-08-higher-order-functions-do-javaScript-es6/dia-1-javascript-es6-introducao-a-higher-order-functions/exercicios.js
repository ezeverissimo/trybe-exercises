const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Pedro Guerra'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Pedro Guerra'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const createPerson = function (person) {
    return {
        nomeCompleto: person,
        email: `${person}@trybe.com`,
    }
}

newEmployees(createPerson);