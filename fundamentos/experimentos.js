// entenda os runtimes e fuja do escopo global..
// sempre let ou const, caso precise acessar o global, acessar por objetos (dicas)

let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a);
console.log(globalThis.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
// OR module.exports = { e: 456, d: false, e: 'teste' }
console.log(module.exports);

// criando uma variável sem colocar var, let ou const irá para o global
abc = 3 // wrong, don't do that
console.log(global.abc);