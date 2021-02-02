// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    const juros = capitalInicial * taxaJuros * tempoAplicacao
    const montante = capitalInicial + juros
    console.log(montante.toFixed(2))
}
jurosSimples(1200, 0.025, 10)

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
    const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao)
    console.log(montante.toFixed(2))
}
jurosComposto(5000, 0.01, 6)