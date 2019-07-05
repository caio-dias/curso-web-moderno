const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//novas instancias feitas a partir de uma factory, logo é um novo obj, entao os valor sao diferentes
const contadorC = require('./instanciaNova')() //invocando a funcao criada pela factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
//resultados iguais, o obj ja existia, entao o node tinha cacheado os valores
console.log(contadorB.valor) // = 3

contadorC.inc()
contadorC.inc()

//resultados diferentes, o obj D nao existia
console.log(contadorC.valor, contadorD.valor)