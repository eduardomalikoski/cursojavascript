function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desconto = 0.1
console.log(getPreco());
console.log(produto.getPreco())

const carro = { preco: 49990, desconto: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// aqui passa-se o objeto relacionado a funcao e entao os params referente à ela
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
// a diferença entre call e apply é a forma q passa-se params na chamada