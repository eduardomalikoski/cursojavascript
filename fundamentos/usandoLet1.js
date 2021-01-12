// let fica apenas no escopo

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
