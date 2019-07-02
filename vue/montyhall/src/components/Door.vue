<template>
  <div class="door-area">
    <!-- :class primeiro parametro a classe que sera aplicada, segundo parametro a expressao que ira verificar o true -->
    <!-- mostrando a classe selected quando a maçaneta for clicada e a porta nao estiver aberta -->
    <div class="door-frame" :class="{ selected : selected && !open}">
      <Gift v-if="open && hasGift" />
    </div>
    <!-- quando clicar na porta o selected tera o seu valor invertido -->
    <div class="door" @click="selected = !selected" :class="{ open }">
      <div class="number" :class="{ selected }">{{ number }}</div>
      <div class="knob" :class="{ selected }" @click.stop="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from './Gift'

export default {
  name: 'Door',
  components: { Gift },
  props: {
    number: {},
    hasGift: { type: Boolean }
  },
  data: function() {
    return {
      open: false,
      selected: false
    }
  }
}
</script>

<style>
  :root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
  }

  .door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #aaa;
    margin-bottom: 20px;
    font-size: 3rem;
    display: flex;
    justify-content: center;
  }

  .door-frame {
    position: absolute;
    height: 300px;
    width: 180px;
    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background: chocolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .door .knob {
    height: 20px;
    width: 20px;
    margin-top: 60px;
    border-radius: 10px;
    background: brown;
    align-self: flex-start;
  }

  .door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
  }

  .door .number.selected {
    color: yellow;
  }

  .door .knob.selected {
    background: yellow;
  }

  .door.open {
    background: #0007;
  }

  .door.open .knob, .door.open .number {
    display: none;
  }
</style>
