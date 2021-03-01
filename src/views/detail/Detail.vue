<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>


import {getDetailData} from 'network/detail'
import DetailNavBar from './Childcomps/DetailNavBar'

export default {
  components: {
    DetailNavBar
  },
  reated() {
    // 获取数据
    this.getDetailData()
  },
  methods: {
    getDetailData() {
      getDetailData().then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style>

</style>