let a = 60;
let b = 60;
let c = 60;
let pecaXadrez = "Rainha";
let porcentagem = 90;
let numero1 = 1;
let numero2 = 2;
let numero3 = 4;
let numeroImpar = false;
let valorCustoProduto = 2;
let valorVendaProduto = 4;


// Exercicios 1 //

console.log("soma " + (a + b));
console.log("subtracao " + (a - b));
console.log("multiplecacao " + (a * b));
console.log("divisao " + (a / b));
console.log("modulo " + (a % b));

// Exercicio 2 //

if (a > b) {
    console.log("Letra a");
} else {
    console.log("Letra b");
}

// Exercicio 3 //

if (a > b && a > c) {
console.log("Letra a");
} else if (b > c) {
    console.log("Letra b");
} else {
    console.log("Letra c");
}

// Exercicio 4 //

if (a > 0) {
    console.log("positive");
} else if (a < 0){
    console.log("negative");
} else {
    console.log("0");
}

// Exercicio 5 //

if (a + b + c === 180 && a + b + c > 0) {
    console.log(true);
} else if (a + b + c < 0) {
    console.log(false);
} else {
    console.log("Erro");
}

// Exercicio 6 //

switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log("horizontal, vertical e diagonal");
    break;

  case "rainha":
    console.log("horizontal, vertical e diagonais");
    break;  

  case "bispo":
    console.log("diagonal");
    break;  

  case "cavalo":
    console.log("duas casas em sentido horizontal e mais uma na vertical ou vice-versa");
    break;  

  case "torre":
    console.log("vertical ou horizontal");
    break; 
    
  case "peão":
    console.log("uma casa para frente");
    break;  

  default:
    console.log("Error");
}

// Exercicio 7 //

if (porcentagem >= 90 && porcentagem <= 100) {
  console.log("Nota A");
} else if (porcentagem >= 80 && porcentagem < 90) {
  console.log("Nota B");
}
else if (porcentagem >= 70 && porcentagem < 80) {
  console.log("Nota C");
}
else if (porcentagem >= 60 && porcentagem < 70) {
  console.log("Nota D");
}
else if (porcentagem >= 50 && porcentagem < 60) {
  console.log("Nota E");
}
else if (porcentagem < 50 && porcentagem >= 0) {
  console.log("Nota F");
} else {
  console.log("Error");
}

// Exercicio 8 //

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
console.log(true);
} else {
  console.log(false);
}

// Exercicio 9 //

if (numero1 % 2 === 1 || numero2 % 2 === 1 || numero3 % 2 === 1) {
  numeroImpar = true;
}

console.log(numeroImpar);

// Exercicio 10 //

if (valorVendaProduto >= 0 && valorCustoProduto >= 0) {
let lucroProduto = valorVendaProduto - valorCustoProduto; 
lucroProduto = lucroProduto * 1000;
console.log(lucroProduto);
} else {
  console.log("Erro, valor de entrada");
}
