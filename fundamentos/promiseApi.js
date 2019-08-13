//modulo de requisicoes do node
const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''
  
      res.on('data', dados => {
        resultado += dados
      })
  
      res.on('end', () => {
        try {
          //caso de certo chama o resolve, caso de erro, o reject
          resolve(JSON.parse(resultado))
        } catch(e) {
          reject(e)
        }
      })
    })
  })
}

//refatorando o com callbacks, transforando em promises
let nomes = []
getTurma('A').then(alunos => {
  nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
  getTurma('B').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
    getTurma('C').then(alunos => {
      nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
      console.log(nomes)
    })
  })
})

//usando promise all
//recebe varias promises, quando todas forem resolvidas, ele começa a chamar os .then()
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas)) // add o resultado das 3 funcoes em um array vazio
  .then(alunos => alunos.map(aluno => aluno.nome)) //pega apenas o nome de cada aluno e passa o alunos pra frente
  .then(nomes => console.log(nomes)) //recebe o aluno como nomes e printa eles na tela
  .catch(e => console.log(e.message)) //trata um eventual erro
