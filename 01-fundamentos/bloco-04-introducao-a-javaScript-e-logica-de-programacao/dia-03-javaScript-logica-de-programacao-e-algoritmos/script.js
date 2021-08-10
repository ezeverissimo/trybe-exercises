// 1 - Fazer um programa
// 2 - Dar um valor a uma varialvel com o nome de "n"
// 3 - Fazer com que toda vez que o for rode ele armazene o valor de "n" em asteristicos
// 4 - Fazer um console.log que mostre asteriscos de lado do mesmo tamanho do valor "n"
// 5 - Repetir os asteristicos em cada linha


// Exercicio 1 

// let n = 5;
// let simbolo = "*";

// for (let index = 1; index < n; index += 1) {
//     simbolo += "*";
// }
// for (let i = 1; i <= n; i += 1) {
//     console.log(simbolo);
// }


// Exercicio 2 

// let n = 5;
// let asteristicos = "";
// let simbolo = "*";

// for (let index = 0; index < n; index += 1) {
//     asteristicos = asteristicos + simbolo
//     console.log(asteristicos);
// }


// Exercicio 3 

let n = 5;
let simbolo = "*";
let espacamentos = " ";
let string = "";

for (let index = 1; index <= n; index += 1) {
    for (let i = 0; i < n - index; i += 1) {
        string += espacamentos;
    }
    for (let k = 0; k < index; k += 1) {
        string += simbolo;
    }
    string += "\n";
}
console.log(string);