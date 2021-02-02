// não aceita repetição e não é indexado
const times = new Set()
times.add('Coritiba')
times.add('Palmeiras')
times.add('Flamengo')
times.add('Coritiba')

console.log(times)
console.log(times.size)
console.log(times.has('coritiba'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)