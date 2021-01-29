const produtos = [
    {
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'iPad Pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Martelo',
        preco: 18.99,
        fragil: false
    }
]

console.log(produtos.filter(function(x) {
    if (x.preco > 500 && x.fragil == true)
        return x
}))
console.log();
console.log();
// ou
const caro = x => x.preco >= 500

const isFragil = x => x.fragil

console.log(produtos.filter(caro).filter(isFragil));