<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter/>
    <CounterSquared/>
    <Buttons/>
    <InputColor/>
  </div>
</template>

<script>

import Counter from '../components/Counter.vue'
import CounterSquared from '../components/CounterSquared.vue'
import Buttons from '../components/Buttons.vue'
import InputColor from '../components/InputColor.vue'
export default {
  name: 'Home-View',
  computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.dispatch('setColorCode',newValue)
      }
    }
  },
  components:{ Counter, CounterSquared, Buttons, InputColor }
  
}
</script>
<style >
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }
  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>
