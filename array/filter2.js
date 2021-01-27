Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

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

console.log(produtos.filter2(function(x) {
    if (x.preco > 500 && x.fragil == true)
        return x
}))
console.log();
console.log();

const caro = x => x.preco >= 500

const isFragil = x => x.fragil

console.log(produtos.filter2(caro).filter2(isFragil));

console.log(produtos.filter(x => x.preco >= 500).filter(x => x.fragil == true))