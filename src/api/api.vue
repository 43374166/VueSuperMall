<template>

</template>

<script>
import {getData} from './data.js'

export default {
  created() {
    getData().then(res => {
      console.log(res);
    })
  }
}
</script>

<style>

</style>