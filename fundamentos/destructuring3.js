function rand({ min= 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }))
//ou
//const obj = { max: 50, min: 40 }
//console.log(rand(obj))

console.log(rand({ min: 900 })) // entre 900 e 1000
console.log(rand({})) //  entre 0 e 1000

const x = Math.random() * (1000 - 0) + 0
console.log(Math.floor(x))