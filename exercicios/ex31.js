// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function numerosNegativos(vetor) {
    negativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }        
    }
    console.log(negativos);
}
vet = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
numerosNegativos(vet)