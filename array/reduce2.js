const alunos = [
    { nome: 'Jao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(x => x.bolsista).reduce(todosBolsistas))

// Desafio 1: Algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(x => x.bolsista).reduce(algumBolsista))
console.log();
// ou:
console.log(alunos.map(x => x.bolsista).reduce((resultado, bolsista) => resultado && bolsista))
console.log(alunos.map(x => x.bolsista).reduce((resultado, bolsista) => resultado || bolsista))