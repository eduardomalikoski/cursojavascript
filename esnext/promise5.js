function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(x => `Valor: ${x}`) // ou .then(console.log)
    .then(
        // x => console.log(x),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(_ => console.log('quase fim'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(_ => console.log('fim'))