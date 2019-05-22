const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // = conflito entre paradigmas: funcional e OO, falar nao tem uma saudacao dentro dela

// o bind resolve o this, cria um apontamento para quem ele recebe como param tornando o this, aquele obj
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()