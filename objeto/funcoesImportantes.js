const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // vai pegar todas as chaves de um objeto
console.log(Object.values(pessoa)) // "" todos os valores ""
console.log(Object.entries(pessoa)) // "" arrays e subarrays com os todos os valores

// usando destructuring dentro de entries.
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// definir a propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // ela poderá ser listada (enumerada)
    writable: false, // não poderá ser alterada
    value: '01/01/2020' // valor
})

pessoa.dataNascimento = '01/01/2030'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// pega o destino "dest" que irá receber todos os atributos fazendo uma concatenação. Levando pelo assign todos os atributos ao objeto "dest" de destino
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const o3 = { b: 10 }
const obj = Object.assign(dest, o1, o2, o3)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
