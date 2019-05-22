//this aponta para o module.exports
console.log(this === global) //false
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
  //dentro de uma funcao this aponta para global
  console.log('Dentro e uma funcao o this é:',this === exports)
}
logThis()