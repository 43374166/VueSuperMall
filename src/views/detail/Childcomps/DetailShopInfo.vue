<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-itme middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div> 
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodscount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>     
      </div>
      <div class="middle-center"></div>
      <div class="middle-item middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>           
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(sells) {
      return (sells / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style>
  .shop-info {
    margin-top: 20px;
    
    border-bottom: 5px solid rgba(97, 97, 97, 0.1);
  }
  .shop-top {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .shop-top img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .shop-middle {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  .middle-left {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .middle-center {
    width: 2px;
    height: 60px;
    background-color: rgba(100, 100, 100, 0.3);
  }
  .middle-itme .info-sells {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
  }

   .middle-itme .info-goods {
     height: 50px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items:center;
   }
   .middle-right {
     width: 160px;
     font-size: 13px;
     display: flex;
     justify-content: space-around;
   }
   .score {
     color: rgb(39, 179, 62);
     padding: 2px 10px;
   }
   .better {
     background-color: rgb(39, 179, 62);
     color: #fff;
   }
   .score-better {
     color: rgb(255, 72, 0);
   }
   .better-more {
     background-color: rgb(255, 72, 0);
   }

   .shop-bottom {
     height: 30px;
     margin-top: 15px;
     /* background-color: red; */
     display: flex;
     justify-content: center;
     margin-bottom: 10px;
   }

   .enter-shop {
     width: 150px;
     background-color: rgba(173, 179, 197, 0.39);
     text-align: center;
     line-height: 30px;
     border-radius: 3px;
     color: rgb(44, 44, 44);
     font-size: 13px;
   }
</style>