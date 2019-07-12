/**
 * Projeto CRUD com banco de dados apenas em memoria, com ações feitas pelo POSTMAN
 */

const porta = 3003

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//importando tudo que o banco de dados importa
const bancoDeDados = require('./bancoDeDados')

//middleware

//para qualquer requisicao que seja feita, ela irá parsear o dado para um objeto
app.use(bodyParser.urlencoded({ extended: true }))

//pegando todos os produtos
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

//pegando produto por id, passando o id no :id
app.get('/produtos/:id', (req, res, next) => {
  //pegando na requisicao o id que foi passado na url, e enviando ele na resposta
  res.send(bancoDeDados.getProduto(req.params.id))
})

//salvando o produto na base pegando o nome e preco do corpo da requisicao
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

//atualizando o produto na base
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

//excluindo o produto pelo id
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})