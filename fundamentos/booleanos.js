let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 0 //1 true AND 0 false
console.log(!!isAtivo) /* !! mostra se é true ou false */

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('fim')
console.log(!!('' || null || 0 || false || 'epa'))

let nome = ''
nome = 0
console.log(nome || 'Desconhecido')