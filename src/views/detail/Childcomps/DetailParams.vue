<template>
  <div v-if="Object.keys(itemParams).length !== 0"  class="params-info">
    <!-- <div class="rule-key">{{itemParams.rule.key}}</div> -->
    <div v-for="(tables, index) in itemParams.rule.tables" :key="index">
      <table class="info-size">
        <tr v-for="(table, index) in tables" :key="index">
          <td v-for="(td, indey) in table" :key="indey">{{td}}</td>
        </tr>
      </table>
    </div>
    
    <div class="info-param">
      <table v-for="(info, index) in itemParams.info.set" :key="index">
        <tr>
          <td class="info-param-key">{{info.key}}</td>
          <td class="info-param-value">{{info.value}}</td>
        </tr>
      </table>
    </div>
    
    <div v-if="itemParams.info.image">
      <img :src="itemParams.info.image[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .params-info {
    margin-top: 10px;
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-info .info-size {
    width: 100%;
    border-collapse: collapse;
  }
  .params-info .info-size tr{
    height: 42px;
  }
  .params-info .info-size td{
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-param {
    margin-top: 10px;
  }
  .info-param table tr {
    width: 100vw;
    display: block;
  }
  .info-param-key {
    width: 95px;
  }
  .info-param-value {
    color: #eb4868;
  }
  .info-img {
    width: 100%;
  }
</style>