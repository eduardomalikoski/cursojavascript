{{{{ var sera = 'sera?'}}}}

console.log(sera)

function teste() {
    var local = 123 // quando declara uma variavel dentro de um escopo de funcao, ela nao pode ser usada fora do escopo
    console.log(local)
}

teste()
console.log(local)