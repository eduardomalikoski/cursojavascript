// tipos valor, trabalham com tipos primitivos
// tipos referencia trabalham com objetos, funcoes que apontam para o mesmo lugar na memória

let valor // undefined
console.log(valor) 

valor = null // ausência de valor
console.log(valor);
// console.log(valor.toString()); //ERRO

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evitar
console.log(!!produto.preco); // verifica se há um preco
// delete produto.preco // assim que se tira um atributo de uma variavel
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco); // vai dar falso
console.log(produto);

// conclusao
// undefined é quando um valor de uma variável não está definido
// null é um valor não definido, mas de forma induzida, ou seja, o programador colocou null em alguma propriedade de objeto por ex