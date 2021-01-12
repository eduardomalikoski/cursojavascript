const nome = 'José'
const conc = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(conc, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Hei... ${up('cuidado')}!`)