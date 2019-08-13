function falarDepoisDe(segundos, frase) {
  //promise recebe uma callback com 2 params o resolve, para resolver a promise e o reject para rejeitar ela
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      //sucesso da funcao, resolve aceita apenas um parametro, seja uma variavel, obj, array etc
      resolve(frase)
    }, segundos * 1000);
  })
}

//toda promise recebe a funcao then, que é o encadeamento de funcoes que o resolve da promise retorna
falarDepoisDe(3, 'OPAAAAAAAA!')
  .then(frase => frase.concat('?!@#$'))
  .then(outraFrase => console.log(outraFrase))
  //tratanto o erro (quando voce chama o reject)
  .catch(e => console.log(e))