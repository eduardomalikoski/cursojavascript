function criarProduto(nome, preco) {
    // está retornando um objeto
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2999.99))
console.log(criarProduto('iPhone 11', 4999.99))