<template>
  <div class="calculator">
    <!-- chamando componente display passando o valor dele vindo do estado -->
    <Display :value="displayValue" />

    <Button label="AC" triple @onCalcButtonClick="clearMemory" />
    <Button label="/" operation @onCalcButtonClick="setOperation" />
    <Button label="7" @onCalcButtonClick="addDigit" />
    <Button label="8" @onCalcButtonClick="addDigit" />
    <Button label="9" @onCalcButtonClick="addDigit" />
    <Button label="*" operation @onCalcButtonClick="setOperation" />
    <Button label="4" @onCalcButtonClick="addDigit" />
    <Button label="5" @onCalcButtonClick="addDigit" />
    <Button label="6" @onCalcButtonClick="addDigit" />
    <Button label="-" operation @onCalcButtonClick="setOperation" />
    <Button label="1" @onCalcButtonClick="addDigit" />
    <Button label="2" @onCalcButtonClick="addDigit" />
    <Button label="3" @onCalcButtonClick="addDigit" />
    <Button label="+" operation @onCalcButtonClick="setOperation" />
    <Button label="0" double @onCalcButtonClick="addDigit" />
    <Button label="." @onCalcButtonClick="addDigit" />
    <Button label="=" operation @onCalcButtonClick="setOperation" />
  </div>
</template>

<script>
  import Display from "../components/Display"
  import Button from "../components/Button"

  export default {
    //dados, estado inicial da aplicacao
    data: function () {
      return {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
      }
    },

    //registrando os componentes que serão usados
    components: { Button, Display },

    //metodos do componente
    methods: {
      clearMemory() {
        //fazendo o seu objeto voltar ao estado inicial
        Object.assign(this.$data, this.$options.data())
      },
      setOperation(operation) {
        if (this.current === 0) {
          //setando a operacao, passando o current para o segundo numero e limpando o display
          this.operation = operation
          this.current = 1
          this.clearDisplay = true
        } else {
          //verificando se a operacao é =
          const equals = operation === "="
          
          //pegando operacao atual
          const currentOperation = this.operation

          //salvando a operacao no primeiro valor do values
          try {
            this.values[0] = eval(
              `${this.values[0]} ${currentOperation} ${this.values[1]}`
            )
          } catch (error) {
            this.$emit('onError', error)
          }

          this.values[1] = 0

          this.displayValue = this.values[0]
          this.operation = equals ? null : operation
          this.current = equals ? 0 : 1
          this.clearDisplay = !equals
        }
      },
      addDigit(n) {
        if (n === "." && this.displayValue.includes(".")) {
          return
        }

        const clearDisplay = this.displayValue === "0" || this.clearDisplay
        const currentValue = clearDisplay ? "" : this.displayValue
        const displayValue = currentValue + n

        //setando o estado do valor do display e deixando o cleardisplay false
        this.displayValue = displayValue
        this.clearDisplay = false

        //setando o valor no array atual do values
        this.values[this.current] = displayValue
      }
    }
  }
</script>

<style>
  .calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
  }
</style>
