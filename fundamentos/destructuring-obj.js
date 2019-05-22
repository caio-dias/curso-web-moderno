//desestruturacao, tira algo da sua estrutura..
const pessoa = {
    nome: 'Caio',
    idade: 24,
    endereco: {
        logradouro: 'rua Abc',
        numero: 100
    }
}

//extraindo nome e idade de pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//extraindo e dando alias
const { nome: n, idade: i } = pessoa
console.log(n,i)

//extraindo e dando valores por padrao se o atributo nao existir no obj
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//extraindo atributos dentro de objs internos
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)