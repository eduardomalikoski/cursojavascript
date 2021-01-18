// Factory é uma função que no final sempre retorna um objeto
// Factory simples // Factory = Fábrica
function criarPessoa() {
    return {
        nome: 'Jao',
        sobrenome: 'Carvalho'
    }
}

console.log(criarPessoa())