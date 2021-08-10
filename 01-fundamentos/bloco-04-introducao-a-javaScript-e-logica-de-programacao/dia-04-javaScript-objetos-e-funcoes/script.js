// // PART 1


// // Exercicio 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };


//   console.log("Bem-vinda, " + info.personagem);


//   // Exercicio 2

//  info['recorrente'] = 'Sim';

//  console.log(info); 

 
//  // Exercicio 3

// for (let key in info) {
//     console.log(key);
// }


// // Exercicio 4 

// for (let valueKey in info) {
//     console.log(info[valueKey]);
// }


// // Exercicio 5 

// let infoPatinhas = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let key in infoPatinhas) {
//       if (info.recorrente === 'Sim' && infoPatinhas.recorrente === 'Sim') {
//           info.recorrente = "Ambos recorrentes";
//           infoPatinhas.recorrente = ""
//         }
//         console.log(info[key] + " e " + infoPatinhas[key]);
//   }



// PART 2

// Exercicio 1

// function polindromo(arara) {
// if (polindromo()) === 
// }




// Exercicio 2


function indiceMaior(numero) {
  let maiorNumero = 0
  for (let position in numero) {
    if (numero[maiorNumero] < numero[position]) {
      maiorNumero = position;
    }
  }
  return maiorNumero;
}
console.log(indiceMaior([15, 11, 6, 33, 10, 1]));



// Exercicio 3 

function indiceMenor(numero) {
  let menorIndice = 0;
  for (let indice in numero) {
    if (numero[menorIndice] > numero[indice]) {
      menorIndice = indice;
    }
  }
  return menorIndice;
}
indiceMenor([2, 4, 6, 7, 10, 0, -3]);
console.log(indiceMenor([2, 4, -6, 7, 10, 0, -3]));

