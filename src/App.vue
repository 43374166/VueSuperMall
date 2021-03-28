<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <!-- <api /> -->
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
// import Api from './api/api.vue'


export default {
  components: {
    MainTabBar,
    // Api
  }
}
</script>

<style>
  @import url(~assets/css/base.css);
</style>
