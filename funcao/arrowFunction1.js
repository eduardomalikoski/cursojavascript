let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// pode-se tirar os parênteses caso haja apenas 1 param
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI).toFixed(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá arrow'
ola = _ => 'Olá segunda forma arrow' // possui um param, mas ignorável
console.log(ola())
