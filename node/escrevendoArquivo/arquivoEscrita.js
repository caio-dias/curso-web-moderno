const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1200.00,
  desconto: 0.15
}

//gerando um arquivo json com o obj
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})