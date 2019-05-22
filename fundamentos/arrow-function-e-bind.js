//o this muda quando se usa function, com arrow function ele sempre esta no contexto da sua funcao
let comparaComThis = function (param) {
    console.log('o this é '+this)
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('-----------------com arrow-----------------')
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//e impossivel usar o bind com arrow, ela sempre apontara para seu obj
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)