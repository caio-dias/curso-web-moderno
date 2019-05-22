//modo antigo
const nome = 'Caio'
const concatenacao = 'olá '+nome+'!'
console.log(concatenacao)

//template string
const template = `olá ${nome}!`
console.log(template)

//expressao
console.log(`1 + 1 = ${1+1}`)

//funcao
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('Cuidado!')}`)