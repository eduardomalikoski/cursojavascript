function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`) // this opcional
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()
console.log(pessoa1.nome)