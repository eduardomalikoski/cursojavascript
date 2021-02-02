// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function vetorParEImpar(nmr) {
    let quantidadePar
    let quantidadeImpar

    for (let i = 0; i < nmr.length; i++) {
        if (nmr[i] % 2 == 0) {
            quantidadePar++
        }
        else {
            quantidadeImpar++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
    
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
vetorParEImpar(vetor)