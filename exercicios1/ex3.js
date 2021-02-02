// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function elevar(base, exp) {
    let result = Math.pow(base, exp)
    result = base ** exp

    return result
}

console.log(elevar(4, 3))