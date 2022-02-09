const imcCalculator = (peso, altura) =>
  (peso / Math.pow(altura / 100, 2)).toFixed(2);

const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso?')

const altura = readline.question('Qual sua altura?')

const imc = imcCalculator(peso, altura);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (imc < 24.9) {
  console.log('Peso normal');
} else if (imc < 29.9) {
  console.log('Acima do peso (sobrepeso) ');
} else if (imc < 34.9) {
  console.log('Obesidade grau I');
} else if (imc < 39.9) {
  console.log('Obesidade grau II');
} else if (imc >= 40.0) {
  console.log('Obesidade grau III e IV');
}