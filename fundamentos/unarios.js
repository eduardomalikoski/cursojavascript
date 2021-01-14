let num1 = 1
let num2 = 2

num1++ // operador unário pós fixado
console.log(num1);
--num1 // operador unário pré fixado
console.log(num1);

//aqui o incremento de 1 ocorre e então é feita a comparação com o valor de num2. A comparação é feita antes do valor de num2 ser diminuído através de --
console.log(++num1 === num2--);
// ou seja: 2 === 2 = true

console.log(num1 === num2) // false: 1 === 2
