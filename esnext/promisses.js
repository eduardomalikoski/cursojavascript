function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, 'abc')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'top')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))