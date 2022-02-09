const fs = require('fs').promises;

const simpsonPerson = async () => {
  try {
    const persons = await fs.readFile('./simpsons.json', 'utf-8')
    return JSON.parse(persons);
  } catch (error) {
    console.log(error);
  }
}

const printAllPersons = async () => {
  const persons = await simpsonPerson()
  return persons.forEach(({id, name}) => {
    console.log(id, name);
  });
}

const selectPerson = async (personId) => {
  const persons = await simpsonPerson()
  return new Promise((resolve, reject) => {
    const filteredPerson = persons.find(({id}) => Number(id) === personId);

    if(!filteredPerson) reject(new Error('id não encontrado'));

    resolve(filteredPerson);
  })
}

const printPerson = async(personId) => {
  try {
    const {id, name} = await selectPerson(personId);
    console.log(id, name);
  } catch (error) {
    console.log(error.message);
  }
}

const changePersons = async() => {
  const persons = await simpsonPerson();

  const newPersons = persons.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);
  const returnToJson = JSON.stringify(newPersons);
  fs.writeFile('./simpsons.json', returnToJson);

}

changePersons();
