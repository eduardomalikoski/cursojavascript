// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

function somarNumeros(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]        
    }

    return console.log(soma)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])
somarNumeros([2, 2, 2])
console.log()
// ou

function somarNumeros2(array) {
    let soma = 0
    array.forEach(element => soma += element)
    return console.log(soma)
}

somarNumeros2([10, 10, 10])
somarNumeros2([15, 15, 15, 15])
somarNumeros2([2, 2, 2])