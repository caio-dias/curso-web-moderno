//modulo de requisicoes do node
const http = require('http')

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  
  http.get(url, res => {
    let resultado = ''

    //pegando os dados e atribuindo em resultado
    res.on('data', dados => {
      resultado += dados
    })

    //chamando a funcao final quando o ondata termina
    res.on('end', () => {
      callback(JSON.parse(resultado))
    })
  })
}

//callback hell, quando temos varias callbacks e vira uma tarefa dificil
let nomes = []
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
      console.log(nomes)
    })
  })
})