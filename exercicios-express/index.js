const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMiddleware')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')

//comunicacao entre modulo externo passando parametros
produtoApi(app, 'com parametro')

/**
 * body parser cria uma prop dentro de req chamada body, que vai ter o resultado do body interpretada por ele,
 * funcoes do bodyparser sao funcoes middlewares,
 * registrando tipos de dados que o body parser vai resolver
 */
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//usando funcoes de um modulo de fora
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

//invocando a funcao modularizada
app.use(saudacao('Apolonio'))

/**
 * duas formas de pegar parametros no node
 * primeiro: pela query string na url
 * segundo: via : na url declarada na funcao get
 */
app.get('/clientes/relatorio', (req, res) => {
  //pegando o parametro vindo da requiscao via query string
  res.send(`Cliente relatório: completo = ${req.query.completo} / ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
  //pegando o parametro id vindo da requiscao via url
  res.send(`Cliente ${req.params.id} selecionado!`)
})

//exemplo de post
app.post('/corpo', (req, res) => {

  //fazendo na mao, sem o body parser
  // let corpo = ''

  // req.on('data', (parte) => {
  //   corpo += parte
  // })

  // req.on('end', () => {
  //   res.send(corpo)
  // })

  //com o body parser
  res.send(req.body)
})

//quando não se tem o path no use, todas os metodos http passam por aquela funcao
app.use((req, res, next) => {
  console.log('ANTES!')
  //irá para a proxima função que esta registrada com o mesmo path
  next()
})

app.get('/tipos-de-resposta', (req, res, next) => {
  console.log('DURANTE!')
  //tipos de resposta que podem ser enviadas
  // res.send('a resposta é uma string!')

  // res.send('<h1>A resposta é um html!</h1>')

  // res.json({
  //   name: 'Caio',
  //   idade: 25,
  //   cidade: 'SP'
  // })

  res.json({
    data: [
      { id: 1, nome: 'Zé', posicao: 1 },
      { id: 2, nome: 'Paulo', posicao: 2 },
      { id: 3, nome: 'Luis', posicao: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })

  next()
})

app.use('/tipos-de-resposta', (req, res) => {
  //como essa é a funcao final da cadeia, nao precisa do next
  console.log('DEPOIS!')
})

//setando a porta que será usada
app.listen(3000, () => {
  console.log('Backend executando...')
})
