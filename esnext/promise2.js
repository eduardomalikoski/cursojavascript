setTimeout(function() {
    console.log('executando callback...')
    
    setTimeout(function() {
        console.log('executando callback 2...')

        setTimeout(() => {
            console.log('executando callback 3...')
        }, 2000);
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executando promisse...')
            resolve()
        }, tempo);
    })
}

esperarPor(5000)
    .then(() => esperarPor())
    .then(esperarPor)