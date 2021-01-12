// pode ser com "" ou ''.. hoje também pode-se usar o ´`

const escola = "malikoski"

console.log(escola.charAt(4)) // letra que está no indice 4
console.log(escola.charAt(10))
console.log(escola.charCodeAt(2)) // valor da tabela unicode
console.log(escola.indexOf('a')) // retorna o indice onde encontra-se o valor


console.log(escola.substring(1)) // escrever a partir do indice (1)
console.log(escola.substring(0, 3)) // escrever de um indice(0) até (3) (não incluindo o indice 3)

console.log('escola '.concat(escola).concat('!'))
console.log('escola ' + escola + '!')
console.log(escola.replace(2, 'l'))

console.log(escola.replace(/\m/g, 'e')) // substituir tudo por um valor (regex)

console.log('Ana, Jao, Pedro'.split(',')) // vai gerar um array. split é tipo uma quebra