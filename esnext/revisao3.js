// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // valor
console.log(Object.entries(obj)) // [chave valor]

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola())
console.log()

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())