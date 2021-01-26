// Object.preventExtensions
// pode ser modificado, mas nao vai permitir q seu obj seja extendido, pode até excluir objs mas não add

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'escolar'
delete produto.tag
console.log(produto)

// Object.seal
// nao consegue adicionar e excluir atributos de um obj, mas consegue modificar os valores dos atributos dos obj
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
// como um objeto selado, mas com valores constantes, nao consegue incluir novos valores, nao consegue excluir chaves do objeto e nem consegue modificar os dados de todas as variáveis do objeto