module.exports = (app, texto) => {
  const salvar = (req, res) => {
    res.send(`produto > salvar > ${texto}`)
  }

  const obter = (req, res) => {
    res.send(`produto > obter > ${texto}`)
  }

  //registrando rotas e passando callbacks
  app.post('/produto', salvar)
  app.get('/produto', obter)
}