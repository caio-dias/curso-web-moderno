/**
  operador rest/spread
  quando precisa juntar é o rest
  quando precisa espalhar é o spread 
*/


//rest se usa na funcao para enviar mais de um parametro (um conjunto de valores, envia como array)
function total(...numeros) {
  let valorTotal = 0
  numeros.forEach(n => valorTotal += n)
  return valorTotal
}
console.log(total(2,3,4,5))

//spread com obj
const funcionario = { nome: 'Ze', salario: 1213.12 }
//criando um clone add a cidade, e espalhando tudo de funcionario dentro dele
const clone = { cidade: "SP", ...funcionario }
console.log(clone)

//spread com array
const grupoA = ['ze', 'maria', 'tiao', 'pedrao']
const grupoFinal = ['rodrigo', ...grupoA]
console.log(grupoFinal)