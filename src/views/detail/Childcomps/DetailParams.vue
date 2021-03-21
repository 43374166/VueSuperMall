<template>
  <div class="item-params">
    <div class="rule-key">{{itemParams.rule.key}}</div>
    <div class="rule-value">
      <table>
        <tr v-for="(tables, index) in itemParams.rule.tables[0]" :key="index">
          <td v-for="(item, index) in tables" :key="index">{{item}}</td>
        </tr>
      </table>
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

<style>
  
</style>