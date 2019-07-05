// padrao middleware ou cadeia de responsabilidade

//contexto é o que se passa e se muda (ou nao) em cada passo do middleware, carrega o dado de um passo para o outro
const contexto = {}

const passo1 = (contexto, next) => {
  contexto.valor1 = 'mid1'
  next()
}

const passo2 = (contexto, next) => {
  contexto.valor2 = 'mid2'
  next()
}

const passo3 = (contexto, next) => {
  contexto.valor3 = 'mid3'
}

//recebe o contexto e um conjunto de funcoes middlewares
const executar = (contexto, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](contexto, () => execPasso(indice + 1))
  }
  //inicia a execucao de passos pelo 0
  execPasso(0)
}

//testando a chamada do padrao de varias formas, desde que tenha o next, pode chamar na ordem que quiser, inclusive nao chamar uma funcao ou outra..
executar(contexto, passo1, passo2, passo3)
executar(contexto, passo2, passo1, passo3)

console.log(contexto)