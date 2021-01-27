// pode-se mexer no array msm sendo const, mas não pode atribuir
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posicao
console.log(pilotos)

// splice pode add e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // no indice dois, sem remover ngm, ...add
console.log(pilotos)

// remover
pilotos.splice(3, 1) // no indice tres, remover um elemento
console.log(pilotos)

console.log();
const algunsPilotos1 = pilotos.slice(2) // retorna um novo array, neste caso vai retornar um array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna do indice 1 ao indice 4 sem contar o 4
console.log(algunsPilotos2)
