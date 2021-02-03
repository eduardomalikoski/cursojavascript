// Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero(array) {
    let menor = array.reduce((anterior, atual) => anterior < atual ? anterior : atual)

    return console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])
console.log()

// ou

function menorNumero2(array) {
    let menor = Math.min(...array)

    return console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])