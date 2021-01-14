function tratarErroELancar(erro) {
    // throw new Error('ERRO')
    // throw 10 // pode passar o que quiser no throw
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('fim');
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)

// try {
    
// }
// catch (error) {
    
// }