// Cadeia de protótipos (prototype chain)
Object.prototype.corOlhos0 = 'Verde amarelado' // don't do it kkk
const avo = { corOlhos1: 'Azul' }
const pai = { __proto__: avo, corOlhos2: 'Verde', corOlhos3: 'Castanho' }
const filho = { __proto__: pai, corOlhos3: 'Castanho claro' }
console.log(filho.corOlhos0, filho.corOlhos1, filho.corOlhos2, filho.corOlhos3)
console.log();


const carro = {
    velAtual: any = 0,
    velMax: any = 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 334 // shadowing, estará sombreando o valor de velMax, sobreescrevendo
}

const volvo = {
    modelo: 'V40',
    status() { // sombreando a function status dentro do objeto volvo
        return `${this.modelo}: ${super.status()}` // usando o super ele vai usar o método do prototype (protótipo)
    }
}

// vai estabelecer uma funcao de prototipo entre objetos, aqui ferrari vai ter como prototipo carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
console.log();

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(400)
console.log(ferrari.status())