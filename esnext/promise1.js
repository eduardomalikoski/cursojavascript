// promessa, algo que será resolvido no futuro. Uma promessa gerará apenas um valor, mas há possibilidades com objetos de retornar mais de um valor
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})
/****************************************/

let x = new Promise(function(Promessa) {
    Promessa({
        z: 1,
        y: 4
    })
})

x.then(function(resultado) {
    console.log(resultado)
})
/****************************************/

let y = new Promise(function(p) {
    p(['Jao', 'Duh', 'Ana'])
})

y.then(function(res) {
    console.log(res)
})
/****************************************/

const primeiroElemento = arrayOuString => arrayOuString[0]

const letraMinuscula = str => str.toLowerCase()

const log = f => console.log(f)

// resolve == cumprirPromessa
let z = new Promise(function(resolve) {
    resolve(['Jao', 'carlos'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(log)