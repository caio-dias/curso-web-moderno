//file system é um modulo core do node, feito para leitura de arquivos
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//lendo de modo sincrono:
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//lendo de moto assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

//lendo json direto (so funciona com json)
const config = require('./arquivo.json')
console.log(config.db.user)

//lendo pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta:')
  console.log(arquivos)
})