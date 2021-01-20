// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function div(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`Resultado: ${resultado.toFixed(2)}`)
    console.log(`Resto: ${resto}`)
}

div(11, 4)