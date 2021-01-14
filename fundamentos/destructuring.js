const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'Rua X',
        numero: 100
    }
}

// Aqui diz: tire  de dentro do objeto o atributo nome e idade, qual objeto? O objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// Dentro das chaves está sendo utilizado o destructuring. Está extraindo de um objeto o atributo idade e nome e está sendo passado à variável n e i
const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // resultará em undefined e true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// sempre ver se o caminho dos dados estão corretos para fazer o destructuring
// Destructuring é extrair dados de um objeto