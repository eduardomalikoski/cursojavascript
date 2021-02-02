// let const

{
    var a = 2
    let b = 3
    const c = 4
    console.log(b)
    console.log(c)
}
console.log(a)

// Template String
const produto = 'iPhone'
console.log(`${produto} é caro bagarai
Compra um Xiaomi`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)