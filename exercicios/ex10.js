// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function divisivel(nmr) {
    if (nmr % 3 == 0) {
        return true
    }
    return false
}

console.log(divisivel(5))