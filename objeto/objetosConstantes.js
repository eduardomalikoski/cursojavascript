// pessoa -> 123 -> {...}
const pessoa = { nome : 'Jão' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// congelando o objeto pessoa, não vai conseguir mais modificar o objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome); // vai ignorar

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'Jao'
console.log(pessoaConstante)