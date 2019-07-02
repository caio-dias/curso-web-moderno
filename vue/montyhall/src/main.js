//ponto de entrada que o webpack le é o main.js

import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(App)
  }
}).$mount("#app")
//adicionando isso dentro da div app