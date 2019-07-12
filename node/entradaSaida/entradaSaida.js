//pegando a flag -a quando o arquivo é executado com a flag
const anonimo = process.argv.indexOf('-a') !== -1 //boolean

if (anonimo) {
  //saida padrao do servidor (tela)
  process.stdout.write('Fala meu consagrado!\n')
  //encerra o processo
  process.exit()
} else {
  process.stdout.write('Informe seu nome: ')
  //entrada padrao (teclado)
  process.stdin.on('data', data => {
    //callback retorna o dado digitado + o enter que é o \n

    //passa o dado para string e remove o \n
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Salve ${nome}!!\n`)
    process.exit()
  })
}
