//                       ...nomes == vai poder passar quantos nomes quiser
module.exports = function(...nomes) {
    return nomes.map(x => `Boa semana ${x}`)
}