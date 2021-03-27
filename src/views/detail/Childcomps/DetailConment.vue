<template>
  <div class="detail-conment" v-if="Object.keys(conmentInfo).length !== 0">
    <div class="title-conment">
      <h4>用户评论</h4>
      <div @click="moreConment"
           class="more-conment">更多 >></div>
    </div>

    <div class="conment-info" v-for="(item, index) in conmentInfo.list" :key="index">
      <div class="logo-name">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="conment">
        <p class="conment-content">{{item.content}}</p>
        <div class="info-other">
          <span class="date">{{item.created | showDate}}</span>
          <span>{{item.style}}</span>
        </div>
        <div  class="conment-image">
          <img :src="image" alt="" v-for="(image, index) in item.images" 
               :key="index"
               @click="enlargePhoto">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'

export default {
  props: {
    conmentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    moreConment() {
      console.log('加载更多评论');
    },
    enlargePhoto() {
      console.log('放大照片');
    }
  },
  filters: {
    showDate(date) {
      // 将时间戳转换为date
      let time = new Date(date * 1000)

      // console.log(time.getMonth() + 1);
      // let year = time.getFullYear()
      // let month = time.getMonth() + 1
      // let day = time.getDay()

      // return year + "-" + month + "-" + day

      // 将date格式化
      return formatDate(time, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .detail-conment {
    padding: 10px 0;
    border-bottom: 5px solid rgba(104, 104, 104, 0.116);
  }
  .title-conment {
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid rgba(104, 104, 104, 0.116);
    padding: 10px;
  }
  .more-conment {
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }

  .conment-info {
    margin-top: 5px;
    width: 100%;
  }
  .logo-name {
    position: relative;
    left: 1%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
  .logo-name img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(145, 145, 145, 0.288);
    margin-right: 0.5rem;
  }
  .logo-name span {
    color: rgba(0, 0, 0, 0.815);
    font-weight: 700;
    display: block;
  }

  .conment {
    width: 100%;
    /* padding: 10px 0; */
  }
  .conment-content {
    padding: 20px 0.3rem 10px 0.3rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.815);
    font-weight: 500;
  }
  .info-other {
    margin-left: 5px;
    font-size: 14px;
    color: rgba(107, 107, 107, 0.774);
  }
  .info-other .date {
    padding-right: 5%;
  }

  .conment-image {
    margin-top: 10px;
    width: 100%;
    /* height: 60px; */
    display: flex;
    position: relative;
    left: 0.3rem;
  }
  .conment-image img{
    width: 25%;
    padding: 0 0.85rem 0 0;
  }
</style>