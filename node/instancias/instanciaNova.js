// uma factory retorna um novo obj
//criando uma nova instancia
module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}