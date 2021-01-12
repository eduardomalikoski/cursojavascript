const peso1 = 1.2
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.082
const avaliacao2 = 6.123

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //deixar com 2 casas decimais

console.log(media.toString())

console.log(media.toString(2)) //binário

console.log(typeof media) //ver o tipo

console.log(typeof Number) //Number = funcao; number = type
