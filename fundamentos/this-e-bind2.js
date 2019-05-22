function Pessoa() {
    this.idade = 0

    //guarda a referencia do this
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
        //amarra o this para nao perder a referencia
    }/*.bind(this)*/,1000)
}

//resolvendo com arrow function
//a arrow function guarda o contexto do this de maneira correta
function Pessoa2() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
new Pessoa2