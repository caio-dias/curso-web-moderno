//arquivo cliente sempre usa outros modulos
//seguindo padroes do common js

//importando modulos, arquivos relativos ao nosso projeto, se importam com ./
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)