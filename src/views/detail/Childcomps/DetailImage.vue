<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="detail-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index" class="detail-img">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in item.list" 
             :key="index" 
             :src="item" alt="" 
             @load='detailImgLoad'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    detailImgLoad() {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
  .detail-info {
    margin-top: 20px;
  }
  .start {
    width: 40%;
    height: 2px;
    margin-left: 5%;
    background-color: rgba(48, 48, 48, 0.61);
  }
  .detail-desc .start::before, .detail-desc .end::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .end {
    position: relative;
    left: 55%;
    width: 40%;
    height: 2px;
    /* margin-right: 0; */
    background-color: rgba(48, 48, 48, 0.61);
  }
  .end::after {
    right: 0;
    top: -3px;
  }
  .desc {
    font-size: 13px;
    width: 290px;
    margin: 0 auto;
    padding: 15px 0;
    text-align: justify;
    word-wrap:break-word;
    overflow:hidden;
  }
  .info-list {
    width: 100vw;
  }
  .info-list img{
    width: 100%;
  }

  .info-key {
    font-size: 14px;
    position: relative;
    left: 15px;
    color: #000;
    padding: 5px 0;
  }

  .detail-img {
    width: 100vw;
    padding-bottom: 5px;
    border-bottom: 5px solid rgba(100, 100, 100, 0.3);
  }
</style>