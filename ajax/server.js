const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

//mapeando para o express prover os arquivos estaticos na raiz do projeto
app.use(express.static('.'))

//mapeando os tipos de dados que o bodyParser vai realizar o parse
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//usando multer para interpretar upload de arquivos
const storage = multer.diskStorage({
  //personalizando nome a pasta do arquivo
  destination: function(req, file, callback) {
    //armazena arquivo na pasta atual
    callback(null, './upload')
  },
  filename: function(req, file, callback) {
    //renomeando o arquivo
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

//passando as configs e mapeando o nome que virá na requisicao (arquivo)
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
  //passando a config do multer
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro')
    }

    res.end('Concluido com sucesso')
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    //retornando o body + novos dados (como se estivesse manipulando os dados e resolvendo)
    ...req.body,
    nacionalidade: 'brasileiro'
  })
})

app.get('/parOuImpar', (req, res) => {
  //modos de pegar dados enviados pelo front-end 
  //req.body
  //req.query
  //req.params
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

app.listen(8080, () => console.log('Servidor executando...'))