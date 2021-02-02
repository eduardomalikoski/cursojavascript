function esperarPor(tempo = 1500) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor()
//     .then(_ => console.log('executando promisse 1...'))
//     .then(esperarPor)
//     .then(_ => console.log('executando promisse 2...'))
//     .then(esperarPor)
//     .then(_ => console.log('executando promisse 3...'))
//     .then(esperarPor)
//     .then(_ => console.log('executando promisse 4...'))

function retornarValor(tempo = 5000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), tempo)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor()
    console.log(`async/await ${valor}...`)

    await esperarPor()
    console.log(`async/await ${valor + 1}...`)

    await esperarPor()
    console.log(`async/await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()
