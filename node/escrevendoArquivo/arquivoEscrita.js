const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1200.00,
  desconto: 0.15
}

//gerando um arquivo json com o obj
//1param = local que vai ser gerado o arquivo, 2param = conteudo que vai estar no arquivo, 3param = callback
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})

const caminho = __dirname + '/arquivoGerado.json'

//lendo de moto assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log('arquivo gerado:', config)
})