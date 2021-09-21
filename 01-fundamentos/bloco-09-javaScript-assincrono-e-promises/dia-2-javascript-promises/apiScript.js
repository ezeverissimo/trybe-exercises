// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const createArray = () => {
  const arr = [];
  const repeat = 10;
  for (let actualNumber = 0; actualNumber <= repeat; actualNumber += 1) {
    let randonNumber = Math.floor(Math.random() * 50) + 1;
    randonNumber = randonNumber * randonNumber;
    arr.push(randonNumber);
  }
  const sumArray = arr.reduce((acc, number) => acc + number)
  return sumArray;
}

const arrayDiv = (number) => {
  const div = [];
  div.push(number / 2);
  div.push(number / 3);
  div.push(number / 5);
  div.push(number / 10);
  return div;
}

const fetchPromice = (randomNumber) => {
  const verifyPromise = new Promise((resolve, reject) => (randomNumber < 8000) ? resolve(randomNumber) : reject())
  verifyPromise
  .then((result => arrayDiv(result)))
  .then((result => result.reduce((acc, number) => acc + number)))
  .then((result => console.log(result)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};
fetchPromice(createArray());

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data);
};

window.onload = () => console.log(fetchJoke());;