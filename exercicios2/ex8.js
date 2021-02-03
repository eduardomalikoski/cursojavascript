// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}
    