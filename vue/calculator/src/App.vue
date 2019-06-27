<template>
  <div id="app">
    <h1>Calculadora Vue</h1>
    <Calculator />
  </div>
</template>

<script>
  import Calculator from "./main/Calculator"

  export default {
    components: { Calculator }
  }
</script>

<style>
  * {
    font-family: 'Rajdhani', sans-serif; 
  }
  
  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(32,124,202,1) 35%,rgba(41,137,216,1) 64%,rgba(125,185,232,1) 93%);
  }
</style>
