function apenasBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('APROVADO');
        console.log('NOTA: ', nota);
    }
}

apenasBoaNoticia(9.1)
apenasBoaNoticia(5)

function seForVerdade(valor) {
    if (valor) {
        console.log('That' + 's true: ', valor);
    }
}
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
seForVerdade(true)