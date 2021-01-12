// par nome/valor
// (o local físico da sua variavel que foi definida no código)
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'fala' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    diade: 31,
    peso: 90.98,
    endereco: {
        logradouro: 'Rua X',
        numero: 12
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);