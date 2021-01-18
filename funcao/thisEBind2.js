function Pessoa() {
    this.idade = 0
    
    const self = this

    // dispara uma outra function a partir de um intervalo passado
    setInterval(function() {
        // this.idade++
        // console.log(this.idade)
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // a cada 1 segundo a funcao anonima será disparada
    // este bind estaria amarrando o this para o objeto Pessoa
}

new Pessoa

// criou-se a constante self para que this fosse atribuido sempre ao obj Pessoa