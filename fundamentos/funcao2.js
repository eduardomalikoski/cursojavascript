// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
    // return a + b
}

imprimirSoma(2, 3)
console.log();

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    // console.log(a + b)
    return a + b
}
console.log(soma(1, 1))

// retorno implicito
const subtracao = (a, b) => a - b // quando nao tem chaves significa que vai executar apenas uma linha de codigo, como num if sem chaves

console.log(subtracao(1, 2))

const imprimir2 = a => console.log(a)
imprimir2('top')