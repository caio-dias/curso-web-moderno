// assync/await = transformar algo assincrono, em algo que parece sincrono, simplificar o uso de codigo assincrono e promises..

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

//a palavra await só vai funcionar em uma funcao que tiver a palavra async
let obterAlunos = async () => {

  /**
   * usando o await, a funcao seguinte so sera executada quando a 
   * funcao anterior com await tiver terminada (sendo sucesso ou falha)
   * usa-se o await quando o passo seguinte depender do termino do passo anterior
   **/
  const turmaA = await getTurma('A')
  const turmaB = await getTurma('B')
  const turmaC = await getTurma('C')

  return [].concat(turmaA ,turmaB, turmaC)
} //retorna um obj asyncFunction, pegamos o resultado final no .then()

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))