function gerarNumerosEntre(min, max, tempo = 2000) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 50, 4000),
        gerarNumerosEntre(1, 50, 1000),
        gerarNumerosEntre(1, 50, 2000),
        gerarNumerosEntre(1, 50, 3000),
        gerarNumerosEntre(1, 50, 4000),
        gerarNumerosEntre(1, 50, 5500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(_ => {
        console.timeEnd('promise')
    })