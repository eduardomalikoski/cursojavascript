// a palavra chave this pode variar, mas na função Factory, ou seja, função que retorna um objeto, não alternará o this. Isso no ex q foi feito na arrow function

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('Jao')
pessoa2.falar()