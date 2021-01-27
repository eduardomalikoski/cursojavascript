// uma estrutura indexada e dinâmica
// array é heterogêneo em JS, mas como boas práticas deixá-lo homogêneo
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Ana', 'Paula', 'Juliana') // isso é válido, mas não comum
console.log(aprovados)

aprovados = ['Ana', 'Paula', 'Juliana'] // notação literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Gabriela'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafaela'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // aprovados[8] != null

console.log(aprovados)
aprovados.sort() // ordenar o array TOPTOPTOPTOP
console.log(aprovados)

delete aprovados[0] // vai deletar, mas apenas vai colocar undefined 
console.log(aprovados)
console.log() 
aprovados = ['Ana', 'Paula', 'Juliana']
console.log(aprovados)
console.log("aqui está deletando a partir do indice 1 dois elementos");
aprovados.splice(1, 2)
console.log(aprovados);
console.log();

aprovados = ['Ana', 'Paula', 'Juliana']
console.log(aprovados)
console.log("aqui está deletando a partir do indice 1 dois elementos e depois adicioando dois elementos");
aprovados.splice(1, 2, 'elemento1', 'elemento2')
console.log(aprovados)

