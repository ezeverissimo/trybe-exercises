// 1 - HOF irá gerar um número aleatório entre 1 e 5

// 2 - Recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado

const genarator = (number, callBack) => {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return callBack(randomNumber, number);
}

// 3 - Função que checa se o número apostado é igual ao número sorteado

const winnerCheck = (winnerNumber, number) => {
    if (winnerNumber === number){
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}
genarator(5, winnerCheck);