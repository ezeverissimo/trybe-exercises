let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 3, 27];


// Exercicio 1

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}


// Exercicio 2

let total = 0

for (let index = 0; index < numbers.length; index += 1) {
    total = total + numbers[index];
}
console.log(total);


// Exercicio 3

let total = 0
let mediaAritmetica = 0

for (let index = 0; index < numbers.length; index += 1) {
    total = total + numbers[index];
    mediaAritmetica = total / numbers.length;
}
console.log(mediaAritmetica)


// Exercicio 4

let total = 0
let mediaAritmetica = 0

 for (let index = 0; index < numbers.length; index += 1) {
     total = total + numbers[index];
     mediaAritmetica = total / numbers.length;
    }
    if (mediaAritmetica > 20) {
        console.log("valor maior que 20");
    } else {
        console.log("valor menor ou igual a 20");
    }


// Exercicio 5

let maiorNumero = 0;
let numero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    numero = numbers[index];
    if (numero >= maiorNumero) {
        maiorNumero = numero
    }
}
    console.log(maiorNumero)


// Exercicio 6

let numerosImpares = 0
let numeros = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        numerosImpares = numerosImpares + 1;
    }
}

if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(numerosImpares);
}


// Exercicio 7


let menorNumero = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
    if (menorNumero < numbers[index]) {
        menorNumero = menorNumero;
    } else {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero)


// Exercicio 8

let numero = [];
let umAoVinteCinco = 25;

for (let index = 1; index <= umAoVinteCinco ; index += 1) {
    numero.push(index);
}    
console.log(numero);


// Exercicio 9

let dividendo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let divisor = 2;
let restoDivisao = 0;
let divisao = [];

for (let index = 0; index < dividendo.length; index += 1) {
    restoDivisao = dividendo[index] / divisor;
    divisao.push(restoDivisao);
}
console.log(divisao);