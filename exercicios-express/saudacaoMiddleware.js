const saudacao = (nome) => {
  //é normal funcoes retornarem funcoes middleware, usa-se isso quando a funcao precisa receber um parametro especifico, 
  //para o express nao confundir o parametro com req, res ou next, usa-se esse modo.
  return (req, res, next) => {
    console.log(`Seja bem vindo ${nome}`)
    next()
  }
}

//exportando a funcao para ser usada em outro lugar
module.exports = saudacao