<template>
  <div id="app">
    <h1>Portas da esperança!</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <!-- o v-model alterando o valor do estado no portsAmount transformando ele em numero para fazer o v-for -->
        <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
      </div>
      <div v-if="!started">
        <label for="selectedDoor" id="selectedDoor" size="3">Qual a porta selecionada?</label>
        <input type="text" id="selectedDoor" size="3" v-model.number="selectedDoor">
      </div>
      <button v-if="!started && portsAmount !== '' && selectedDoor <= portsAmount && selectedDoor !== ''" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <!-- : no hasGift é para informar que o valor é um booleano, caso contrario, ele passaria false como string -->
        <Door :hasGift="i === selectedDoor" :number="i" />
      </div>
    </div>
  </div>
</template>
<script>
import Door from './components/Door'

export default {
  name: 'App',
  components: { Door },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedDoor: null
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: #FFF;
    background: linear-gradient(to right, #1a2980, #26d0ce);
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .form label {
    margin-right: 10px;
  }

  .form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  .doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
