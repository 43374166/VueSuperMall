<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in swiperImg" 
                 :key="item"
                 class="swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  props: {
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }
</style>