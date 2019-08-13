// tagged templates - processa o template string dentro e uma funcao

function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'outra string'
}

const aluno = 'zé'
const situacao = 'aprovado'

console.log(tag `${aluno} está ${situacao}`)