//Object.values = devolve os valores de um obj
//Object.entries = devolve uma matriz de um obj
//Object.keys = devolve as chaves de um obj

const obj = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj))

console.log(Object.keys(obj))

console.log(Object.entries(obj))

//melhorias na notação literal

const nome = 'caio'

const pessoa = {
  nome, //inves de nome: nome
  ola() { //inves ola : function () {...}
    return 'olá'
  }
}

console.log(pessoa.nome, pessoa.ola())