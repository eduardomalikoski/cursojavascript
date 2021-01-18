// Função em JS é Firs-Class Object (Citiziens)
// Higher-order function

// criar de forma literal
function func1() { }

// armazenar em uma variável
const func2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }]
// ou até mesmo:
const array2 = [function (a, b) { return a + b }, func1, func2]
console.log(array[0](2, 3)) // indice 0 pq pegou a primeira function

// armazenar em um atributo de objeto
const obj = { }
obj.falar = function () { return 'Olá' }
console.log(obj.falar())

// passar function como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando function...') })

// uma function pode retornar/conter uma function
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 1)(3)
const cincoMais = soma(1, 1)
cincoMais(4)