// contexto lexcio é o contexto onde é criado a function ou uma variavel, seja local ou global

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()