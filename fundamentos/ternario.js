// unário = 1 operando
// binário = 2 operandos
// ternário = 3 operandos
// const resultado = nota => nota >= 6 ? 'Aprovado' : 'Reprovado'
const resultado = nota => nota >= 6 ? 'Aprovado' : 'Reprovado'
//                                se sim       se não
console.log(resultado(7))
console.log(resultado(5))

// ou
const parOuImpar = numero => {
    return numero % 2 == 0 ? 'Par' : 'Impar'
}
console.log(parOuImpar(4));

// ou
const imparOuPar = nmr => nmr % 2 == 0 ? 'Par' : 'Impar'
console.log(imparOuPar(5));