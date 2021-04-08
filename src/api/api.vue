<template>
  <div class="dubo">
    <input type="text" value=""><br>
    <button v-for="(item, index) in [1,2,3]" :key="index"
            @click="clickNum(item)">压：{{item}}</button>
  </div>
</template>

<script>
// import {getData} from './data.js'
// import {Dobo} from './Proson'

export default {
  data() {
    return {
      dubo: {}
    }
  },
  created() {
    // getData().then(res => {
    //   // console.log(res);
    // })
  },
  mounted() {
    console.log(this.createNum());
    
    // console.log(this.dubo);
  },
  methods: {
    clickNum(item) {
      // console.log(item);
      if(item == this.createNum()) {
        console.log('恭喜你获得10000银两');
      }else if(item == this.createNum()) {
        console.log('2  k');
      }else if(item == this.createNum()){
        console.log('3');
      }
      // console.log(this.createNum());
      return item
    },
    createNum() {
      let timer = null
      
      if(timer) clearInterval(timer)
        timer = setInterval(() => {
          let NumBer = Math.round(Math.random() * 2 + 1)
          // console.log(NumBer);
          return NumBer
        },2000)
        // console.log(NumBer);
    }
  }
}
</script>

<style>

</style>