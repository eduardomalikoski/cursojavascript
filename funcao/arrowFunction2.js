function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 500)
}

new Pessoa()

// this não varia em arrow functions