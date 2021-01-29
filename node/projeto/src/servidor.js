const port = 3003

const express = require('express')
const app = express()
const data = require('./data')
const bodyParse = require('body-parser')

// vai retornar uma função middleware que vai fazer um parse no corpo (body) da requisição
// SE ESTIVER UTILIZANDO POR POSTMAN O FORM-URLENCODED ISSO VAI FAZER UM PARSE QUE VAI TRANSFORMAR EM OBJETOS
app.use(bodyParse.urlencoded({ extended: true }))

app.get('/produtos', (req, resp, next) => {
    // resp.send({ nome: 'Notebook', preco: 1399.00 }) // converter para JSON
    resp.send(data.getProdutos())
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(data.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = data.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto) // JSON
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = data.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)
})

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = data.excluirProduto(req.params.id)
    resp.send(produto)
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})