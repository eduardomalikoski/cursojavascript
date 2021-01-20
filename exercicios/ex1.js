// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function func(x, y) {
    let soma = x + y
    let sub = x - y
    let mult = x * y
    let div = x / y
    console.log(`Valores escolhidos: ${x} e ${y}`);
    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${sub}`);
    console.log(`Multiplicação: ${mult}`);
    console.log(`Divisão: ${div}`);
}

func(10, 5)
