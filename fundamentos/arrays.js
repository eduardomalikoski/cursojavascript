const valores = [7.2, 8.2, 1.3]
console.log(valores)
valores[7] = 1.0
console.log(valores[7])
console.log(valores)
console.log(valores.length) // quantidade

valores.push({id: 3}, false, null, 'teste') 
console.log(valores)

console.log(valores.pop()) // vai pegar o ultimo valor do array

console.log(valores.length)
delete valores[10] // delete um valor 
console.log(valores)

console.log()
console.log(typeof valores)