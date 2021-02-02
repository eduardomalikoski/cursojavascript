// Arrow Function
const soma = (a, b) => a + b
const subtracao = (a, b) => { 
    return a - b
}

console.log(soma(1, 2))
console.log(subtracao(2, 1))

// Arror Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// param default
function log(texto = 'Node') {
    console.log(texto)
}

log(null)
log(undefined) // ainda mantém o Node
log('sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))