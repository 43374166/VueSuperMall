<template>
  <nav-bar class="detail-navbar">
    <div slot="left" 
         class="nav-left"
         @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>baclClick
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{active: index === currentIndex}"
          class="title-item">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.go(-1)
      // console.log('dianji');
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .nav-left {
    display: flex;
    justify-content: center;
    margin-top: 11px;
  }
  .active {
    color: var(--color-tint);
  }
</style>