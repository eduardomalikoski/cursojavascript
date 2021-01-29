// this num escopo global aponta para module.exports, mas numa função aponta para globalThis
console.log(this === globalThis) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis() {
    console.log('dentro de uma função')
    console.log(this === exports) // false dentro de uma função
    console.log(this === module.exports) // false
    console.log(this === globalThis) // true dentro de função

    this.perigo = '...' // vai ficar em global
}

logThis()